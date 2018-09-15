---
title: 【gdb】コマンドライン引数つきでgdbを起動  
date: "2018-09-15"
---

![Condor](./condor.jpg)  

---

## コマンドライン引数つきでgdbを起動

通常、プログラムをコマンドライン引数付きで GDB上で実行したい場合、  
以下のように実行します。

```bash
$ gdb program
$ (gdb) run --foo --bar
```

--args オプションを用いると、次のように実行できます。  
この方がシェルの履歴を再利用できるので便利です。

```bash
$ gdb --args program --foo --bar
$ (gdb) run
```
