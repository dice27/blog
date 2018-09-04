---
title: 【Linux】シェルスクリプトのシンタックスチェックの方法
date: "2018-09-03"
---

![Bull](./bull.jpg)  

長いスクリプトを書いていたりすると、書き終わって実行した時にシンタックスエラーが沢山出たりして辛い思いをする事があります。  
そこで今日は、凄く簡単に出来る、シェルスクリプトのシンタックスチェックの方法について書いていきます。

### シンタックスチェックってなんぞや？
> プログラムの構文が正しいかどうか調べることをシンタックスチェックと言います。  
> 引用元: [ナレッジベース：FAQ](http://tech.4d-japan.com/FAQ/101/)

つまり、シェルスクリプトの文法のチェックが出来ます。  
しかも、とても簡単に出来ます。

### その1 " -n オプションをつけて実行"
以下のように -n オプションをつけて実行すればOKです。

```bash
# bashの場合
$ bash -n hoge.sh

# shの場合
$ sh -n hoge.sh

# zshの場合
$ zsh -n hoge.sh

# dashの場合
$ dash -n hoge.sh
```

非常に簡単ですね。    
※但し、変数のタイプミスなどはエラーにならないので注意が必要です。

### その2 "ShellCheck"
ShellCheckはシェルスクリプトのシンタックスチェックをしてくれるツールです。  
[koalaman/shellcheck](https://github.com/koalaman/shellcheck)

#### インストール方法
各ディストリビューション毎に記載しています。  
▼Macも記載。

```bash
# Debianベースのディストリビューション
$ sudo apt-get install shellcheck

# EPELベースのディストリビューション
$ sudo yum -y install epel-release
$ sudo yum install ShellCheck

# OS X
$ brew install shellcheck
```

#### 使い方
ターミナルを開いて、以下の様に実行すればOKです。

```bash
$ shellcheck [options] hoge.sh
```

#### 主なオプション

|オプション|意味|
|---|---|
|-e [CODE1,CODE2..]| shellcheckが返すエラーコードを指定して、そのエラーや警告を無視します。カンマ区切りで複数指定可能です。|
|-f [FORMAT]|チェック結果の出力形式を指定します。指定可能な出力形式については後述します。|
|-s [target]|ターゲットをsh、bash、dash、kshから指定できます。デフォルトでは、ファイルのシバンを使用するか、ターゲットシェルを判別できない場合はbashを使用します。|
|-V|バージョン情報を出力して終了します。|

#### 指定可能な出力形式

|指定フォーマット|意味|
|---|---|
|tty|デフォルトの出力形式。|
|gcc|GCC互換の出力形式。|
|checkstyle|Checkstyle互換のXML出力。|
|json|Json形式での出力。|

### 参考資料
<http://www.atmarkit.co.jp/flinux/rensai/linuxtips/780chshsyntax.html>
<https://www.mankier.com/1/shellcheck>
<https://rcmdnk.com/blog/2014/11/26/computer-bash-zsh/>
