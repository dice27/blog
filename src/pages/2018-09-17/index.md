---
title: 【Linux】シェルスクリプトにおいてShebang に bash を明示する
date: "2018-09-17"
---

![SnowLeopard](./snow-leopard.jpg)  

---

## Shebang に bash を明示する

Bash でしか使えない機能のことを俗に *Bashism* と言います。  
Bashism はもちろん Bash 以外のシェルでは動きません。  

これに関するありがちな罠は、以下のように発生します。  

1. Bash が ```/bin/sh``` として使われている環境でシェルスクリプトを書く。  
　　うっかり Bashism がシェルスクリプトに含まれていても、 ```/bin/sh``` は何も文句を言わないので、Bashism に気付かない。  
2. /bin/sh が Bash でない環境(*1)でそのシェルスクリプトを実行すると動かない。  

(*1) Debianがまさにこのパターンです。 ```/bin/sh``` はdebianの場合 Dash  
[Debian Almquist shell - Wikipedia](https://ja.wikipedia.org/wiki/Debian_Almquist_shell)

これに対する回避策は、どの環境でも必ず Bash でシェルスクリプトが実行されるようにすること。
シェルスクリプトの先頭行には ```#!/bin/sh``` ではなく ```#!/bin/bash``` と書きましょう。
