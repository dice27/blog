---
title: 【Linux】シェルスクリプトにおける関数定義
date: "2019-05-17"
---

![Hedgehog](./hedgehog.jpg)  

---

シェルスクリプトで関数を定義するには様々な書き方があります。  
主な関数の書き方について以下に示します。

### foo () any-command

この形はBorne Shellで使われてたものですがBashではサポートされてません。  
ただ、Zshではサポートされています。

```
$ foo() echo hello
$ foo
hello
```

Bashでは上記の様な定義をしようとするとエラーが出ます。

```
$ foo() echo hello
bash: syntax error near unexpected token `echo'`
```

使えるシェルもあるのですが、1コマンドなので関数にする必要があるかと言われると何とも言い難いところです。

###  foo () any-compound-command(*)

(*)any-compound-commandとは{ ...; }や()、またfor文やif文でコマンドリストを囲った形を指します。

参考：Compound Commands  
https://www.gnu.org/software/bash/manual/html_node/Compound-Commands.html

POSIXでサポートされた形でシェルスクリプトを書くなら、この形を採用するといいかと思います。

 ```{ }``` で囲む場合は、Bashにおいてはワンライナーで書く際に ```{``` の後にスペースが必要なのでご注意ください。

```
$ foo () for i in alfa bravo charlie;do echo $i;done
$ foo
alfa
bravo
charlie
```

### function foo { ...; }

これはKshにて導入されたものの様です。  
Bashでも取り入れられており、多くのシェルでサポートされています。

 *※但し、POSIX準拠ではないです。* 

###  function foo () { ...; }

イメージでは上の二つの合わせ技なので良いと思われるかと思いますが、この形は非推奨です。

いくつかのシェルではサポートされていますが、ほとんどのシェルはこの形を受け入れません。  
移植性を考えるのであれば使うべきでないと思われます。

参考：Bash Pitfalls  
http://mywiki.wooledge.org/BashPitfalls#function_foo.28.29

### function foo () other-compound-command

 ```{ }``` 以外のCompound Commandsも非推奨です。  
上記同様、ほとんどのシェルはこの形を受け入れません。  
Kshですらこの形は使えないとの事。  

### function foo () simple command

この形はZshでのみ使えます。  
最初の例とほぼ同じですが積極的に使うべきものでは無いかと思われます。

```
$ function foo () ls
bash: syntax error near unexpected token `ls'
```
