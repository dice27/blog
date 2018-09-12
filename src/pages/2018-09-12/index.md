---
title: 【Libc】readdir_r()は使わない方が良い  
date: "2018-09-12"
---

![Pelican](./pelican.jpg)  

---

## readdir() vs readdir_r()

ディレクトリを読み込む関数として  
```readdir()``` / ```readdir_r()```の2つの関数が標準ライブラリから提供されている。

* [Linux Programmer's Manual - READDIR(3)](http://man7.org/linux/man-pages/man3/readdir.3.html)
* [Linux Programmer's Manual - READDIR_R(3)](http://man7.org/linux/man-pages/man3/readdir_r.3.html)


使用箇所がシングルスレッドであれば ```readdir()``` を使用しても問題ないが、  
マルチスレッドであるとスレッドセーフである ```readdir_r()``` を使用すれば良いと考えるのが順当である。

だが、結論からいうと ```readdir_r()``` は使用すべきではない。  
マルチスレッドであっても ```readdir() + 排他制御``` をした方が良い。

確かに、POSIX.1-2008では ```readdir()``` のスレッドセーフ性は保障されないとされている。  

> DESCRIPTION  
> The readdir() function need not be thread-safe.  

[参照：readdir, readdir_r - read a directory](http://pubs.opengroup.org/onlinepubs/9699919799/functions/readdir.html)  

> 2.9.1 Thread-Safety  
> All functions defined by this volume of POSIX.1-2017 shall be thread-safe, except that the following functions1 need not be thread-safe.  
> readdir()  

[参照：The Open Group Base Specifications Issue 7, 2018 edition - 2.9.1 Thread-Safety](http://pubs.opengroup.org/onlinepubs/9699919799/functions/V2_chap02.html#tag_15_09_01)

そこで、readdir_r() の仕様を見てみると

[readdir_r(3) - Linux manual page](http://man7.org/linux/man-pages/man3/readdir_r.3.html)

```c
int readdir_r(DIR *dirp, struct dirent *entry, struct dirent **result);
```


```readdir_r()``` はディレクトリストリーム dirp から次のディレクトリエントリーを読み込み、  
entry が指す呼び出し元が割り当てたバッファーにそのエントリーを格納して返す。  

返されるエントリーへのポインターが *result に格納される。  
ディレクトリストリームの末尾に達した場合は、 NULL が *result に格納される。

Linux では dirent 構造体は以下のように定義されている。

```c
struct dirent {  
　ino_t d_ino; /* inode number */  
　off_t d_off; /* not an offset; see NOTES */  
　unsigned short d_reclen; /* length of this record */  
　unsigned char d_type; /* type of file; not supported by all file system types */  
　char d_name[256]; /* filename */  
};
```

しかし、POSIX.1 では d_name フィールドのサイズは規定されておらず、(*1)  
dirent 構造体の d_name の後ろに他の非標準のフィールドがあるかもしれないので、  
移植性が必要なアプリケーションで readdir_r() を使う場合は entry に渡すバッファーを次のようにして割り当てるべきである。

```c
name_max = pathconf(dirpath, _PC_NAME_MAX);  
if (name_max == -1) /* Limit not defined, or error */  
　name_max = 255; /* Take a guess */  
　len = offsetof(struct dirent, d_name) + name_max + 1;  
　entryp = malloc(len);  
```

(*1)Solarisはd_nameが d_name[1] として定義されているそう。


しかし、この上記の対策が_PC_NAME_MAX定数定義の曖昧さから、バッファオーバーフロー脆弱性につながるとの指摘がされている。  

* [参照：readdir_r considered harmful](https://womble.decadent.org.uk/readdir_r-advisory.html)  

* [参照：0000696: either NAME_MAX shouldn't be optional, or readdir_r() needs clarification](http://austingroupbugs.net/view.php?id=696)

Linux/GLIBC側の見解としては以下の通りである。  

> In the current POSIX.1 specification (POSIX.1-2008), readdir() is not
> required to be thread-safe.  However, in modern implementations
> (including the glibc implementation), concurrent calls to readdir()
> that specify different directory streams are thread-safe.  In cases
> where multiple threads must read from the same directory stream,
> using readdir() with external synchronization is still preferable to
> the use of the deprecated readdir_r(3) function.  It is expected that
> a future version of POSIX.1 will require that readdir() be thread-
> safe when concurrently employed on different directory streams.

* 異なるディレクトリストリームを指定するreaddir()の同時呼び出しはスレッドセーフである。
* 複数のスレッドが同じディレクトリストリームから読み取らなければならない場合、
　非推奨のreaddir_r() を使用するより、readdir() をmutex等の排他制御と併用することが望ましい。

[参照：readdir(3) - Linux manual page](http://man7.org/linux/man-pages/man3/readdir.3.html)


また、GNU C Library version 2.24ではreaddir_r()およびreaddir64_r()は非推奨となった。  

> * The readdir_r and readdir64_r functions have been deprecated.  It is
>   recommended to use readdir and readdir64 instead.

[参照：Adhemerval Zanella - The GNU C Library version 2.24 is now available](https://www.sourceware.org/ml/libc-alpha/2016-08/msg00212.html)

上記の事から、マルチスレッドにおいても```readdir_r()```を使うのではなく、  
```readdir() + 排他制御```の使用を検討すべきである。

参考：  
http://mkosaki.blog46.fc2.com/blog-entry-1237.html  
http://blog.gachapin-sensei.com/archives/618834.html  
