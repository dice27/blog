---
title: 【Ruby】様々な改行コードにマッチする正規表現  
date: "2018-09-10"
---

![Sheep](./sheep.jpg)  

---

## 様々な改行コードにマッチする正規表現

以下の様な様々な改行コードがテキストにあった時にマッチさせるTipsです。

```ruby
hoge = "Alpha\r\nBravo\rCharlie\nDelta"
```

例えば、改行コードを<br/>に変換したい場合などは
以下の様に頑張ってもいいのですが、

```ruby
hoge.gsub(/\r\n|\r|\n/, "<br/>")
```

```\R```を指定するだけで広い範囲の改行コードにすべてマッチしてくれます。

```ruby
hoge.gsub(/\R/, "<br/>")
```

その他の正規表現ついては以下を参照

### Ruby 2.5.0 リファレンスマニュアル > 正規表現  
https://docs.ruby-lang.org/ja/latest/doc/spec=2fregexp.html
