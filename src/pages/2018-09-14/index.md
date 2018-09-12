---
title: 【gdb】gdbのコマンドラインの履歴をファイルに保存する  
date: "2018-09-14"
---

![Tiger](./tiger.jpg)  

---

## gdbのコマンドラインの履歴をファイルに保存する

ホームディレクトリに .gdbinit を置いておくと、gdb を起動する際に読み込まれます。  
以下の通り記述しておくとgdb のコマンドラインの履歴を覚えておいてくれるようになります。  

```
set history save on
set history size 100
set history filename ~/.gdb_history
```

### 各行の説明

1. gdb のコマンドラインの履歴をファイルに保存する
2. 保存する行を最大 100 行にする
3. 保存するファイル名を指定。この例であれば ```~/.gdb_history```
