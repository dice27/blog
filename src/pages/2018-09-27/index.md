---
title: 【Linux】bashのデバッグツール「bashdb」
date: "2018-09-28"
---

![Puma](./puma.jpg)  

---

### bashのデバッグツール「bashdb」

### bashdbとは

gdbみたいにデバッグが出来るツールです。  
http://bashdb.sourceforge.net/


### インストール方法

```sh
$ sudo apt-get install bashdb
```

### 実行方法

```sh
$ bashdb [options] hogehoge.sh
```

オプションについては以下を参照ください。  
http://bashdb.sourceforge.net/bashdb-man.html#OPTIONS


### 主なコマンド

|コマンド |意味 |
|---|---|
|s1 |行進める |
|b |行数ブレークポイント設定 |
|c |次のブレークポイントまで継続実行 |
|p |変数名変数の値を表示 |
|R |再実行 |
|q |終了 |
|h |ヘルプ表示 |
|l |ソース表示(10行表示) |
|watch |条件文停止条件の設定 |
