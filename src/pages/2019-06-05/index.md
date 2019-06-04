---
title: 【C言語】指定した範囲での乱数を生成したい
date: "2019-06-05"
---

![Reptile](./reptile.jpg)  

---

##はじめに

とある配列を適当な値で埋めてみたくなることがあるかと思います。  
もしくは、テスト用のデータとしてランダムな値を作りたいということがあると思います。  
そんな時に使えるTipsを紹介します。

##rand()/rand_r()はそのままだと少し不便

乱数を生成する関数として rand()/rand_r()が提供されています。

```c
#include <stdlib.h>

int rand(void);
int rand_r(unsigned int *seedp);
```

* [rand_r(3) - Linux man page](https://linux.die.net/man/3/rand_r)

しかしながら、上記の関数は0 以上 RAND_MAX **(*1)** の間の乱数を使用するので、  
例えば0〜UCHAR_MAX(255)までの乱数を生成したいといった場合にはそのまま使うことが出来ません。

 **(*1)** 私の環境ですと、以下の通り `stdlib.h` に定義されていました

```c
/* The largest number rand will return (same as INT_MAX).  */
#define	RAND_MAX	2147483647
```

##解決策

以下のようなラッパー関数を用意すると最小値/最大値の範囲指定(0〜RAND_MAX)が出来ます。

```c
#include <stdlib.h>

int getrand(unsigned int* seed, int min, int max)
{
    return min + (int)(rand_r(seed) * (max - min + 1.0) / (1.0 + RAND_MAX));
}
```

##DEMO

以下に簡単なサンプルプログラムを用意しています。  
動作の確認などにご活用ください。

https://github.com/ydah/specified_range_rand_r

