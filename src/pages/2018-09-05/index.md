---
title: 【Ruby】Rubyにおける正しいshebangの書き方
date: "2018-09-05"
---

![Ocelot](./ocelot.jpg)  

### shebangとは？
shebangとはUNIXのシェルスクリプトの業界標準で、
シェルスクリプトの一行目のコメントの、 #! がそれにあたる。  
起動するインタプリタを指定することができる。  

例えばbashであれば以下の通りとなる。  

```bash
#! /bin/sh
echo 'Hello world!'
```

### rubyにおけるshebangの指定  

Rubyを指定する場合には以下の様に書かれることがあるが、
Rubyが必ずしも ```/usr/bin/ruby```にあるとは限らない。

```ruby
#! /usr/bin/ruby
puts 'Hello world!'
```

この問題を避ける為には、env コマンドを使えばよい。

```ruby
#! /usr/bin/env ruby
puts 'Hello world!'
```

しかし、移植性を考えると上記でもまだ問題がある。  
FreeBSDでは、標準の ```/etc/crontab``` は以下の様になっており ```/usr/local/bin``` が含まれていない。  

```sh
PATH=/etc:/bin:/sbin:/usr/bin:/usr/sbin
```

そのため、上記のshebangのスクリプトを ```/etc/crontab``` に登録すると、
FreeBSD においては ruby は ```/usr/local/bin``` にあるのが標準であり、
インタープリタを見つけられずにエラーとなる。  

結論としては以下の様に記載するのがベストプラクティスの様である。

```ruby
#!/bin/sh
exec ruby -x "$0" "$@"
#!ruby
puts "Hello, World!"
```

但し、```#! /usr/bin/env``` は実用上極めて広範囲に動く為、デフォルトとして無難ではある。  
必要に駆られた時に、 ```exec ruby -x "$0" "$@"``` 方式にする運用で良いのではないかと感じる。  


### 参考：
Ruby 2.5.0 リファレンスマニュアル > Rubyの起動
<https://docs.ruby-lang.org/ja/2.5.0/doc/spec=2frubycmd.html>
