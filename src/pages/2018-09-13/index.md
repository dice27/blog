---
title: 【gdb】gdbを使ってデバッグする時に付加すべきコンパイルオプション  
date: "2018-09-13"
---

![Penguin](./penguin.jpg)  

---

## gdbを使ってデバッグする時に付加すべきコンパイルオプション

gdbを使用してデバッグする場合、コンパイル時には以下のオプションを付加すると良い。

|Options| Description |
|---|---|
|-g |GDBデバッガで使用するデバッグ情報を生成する。 |
|-O0 |最適化を行わない。最適化を行うと、コードの位置の入れ替えや削除が行われてしまい、デバッグし難くなる。 |


参考資料：Using the GNU Compiler Collection (GCC)  
https://gcc.gnu.org/onlinedocs/gcc/Debugging-Options.html#Debugging-Options  
https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html  
