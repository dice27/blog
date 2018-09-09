---
title: 【Report】第78回 Ruby関西 勉強会
date: "2018-09-08"
---

![Wolf](./wolf.jpg)  

---

## 第78回 Ruby関西 勉強会  
<https://rubykansai.doorkeeper.jp/events/62491>

---

* 日時 ： 2017年7月29日 (土)
* 主催者 ： Ruby関西
* 会場 ： さくらインターネット 大阪本社

---

## rails にコントリビュートしてきました
@yalab さん


### スライド資料
https://www.slideshare.net/yalab/rails-78361507

Ruby on rails に プルリクエストがMargeされた経験から、OSSとの関わり方についてのお話でした。

### コントリビュートする時に気をつける事

* CONTRIBUTING.mdに従う  
→この修正で大丈夫なのか等、迷ったらとりあえずプルリクエストを送ってみる。  
　Rejectされても気にしない事が大事。

### 英語は気にしない

* 何をしたのか？  
→ コードを見ればわかる
* 何故したのか？  
→ テストを見ればわかる

少しの説明と挨拶さえしていれば基本的には問題がない。

### コントリビュートすることの効能

* 同じバグを踏むことがなくなる  
* バージョンが上がっても問題ない  
* 世界中の人の時間を節約できる  

---

## GitLab + Dokku で作る CI/CD 環境
@znz さん


### スライド資料
<https://speakerdeck.com/znz/cd-huan-jing>

GitLab と Dokku を組み合わせて CI/CD 環境を作成するお話でした。

### 環境

* GitLab  
* Gitlub CI  
* Dokku  
* (Heroku)  

### GitLabとは？

* GItHubクローンのようなもの  
* Gitホスティング  
* Merge Request機能(GitHubでいう所のプルリクエスト)  
* What is GitLab?  
<https://about.gitlab.com/features/>

### GitLab CI とは

* CI/CDとは Continuous Integration/Continuous Delivery の略語。  
* Jenkinsのジョブを実行しないマスターの様なもの。GitLabに組み込み。  
* GitLab Runner (Jenkins の slave のようなもの) を動かすマシンが別途必要となる。  

### GitLab Runnerとは？

* What is GitLab Runner?  
<https://docs.gitlab.com/runner/>  
* マシン上で直接実行する (Shell Executor)  
* Docker の中で実行する (Docker Executor) ```★今回はこれを使用```

### Dokkuとは？

* What is Dokku?  
<http://dokku.viewdocs.io/dokku/>  
* Dockerを使ったOSSのミニHeroku  
* SSH経由のgitでDeploy可能  

### 組み合わせるとどんなことが出来るか？

* ブランチに Push → Dokku に Review App を deploy  
* Merge Request をマージ → Review App を停止  
* master に push → Staging に deploy  
* 確認後、クリックで Production に deploy  
* What is GitLab Review Apps?  
<https://about.gitlab.com/features/review-apps/>  

### Dokkuの特徴

* bash製で小さいソースコードで作られている。
* 最近、プラグインがGo言語で書き直されている。
* DB等についてはプラグインで対応可能。

### ブログ記事(設定の方法などをまとめられています)  

<http://blog.n-z.jp/blog/categories/gitlab/>

### Ansible Playbook  

<https://github.com/znz/ansible-playbook-gitlab-dokku>

### 質疑応答

#### Herokuの注意点

* 動かすマシンにはメモリがたくさん欲しい。  
* 古い情報は参考にならないので注意。  
→だが情報は多いので分からないことは、調べればなんとかなる。

#### Dokku運用上の注意点

* 自前で動かすHerokuの様なものなのでマシンのメモリが少ないと重くなる。  
→だが、Git pushしたら自動でdeployしてくれるので便利。

---

## AM/PMって知ってます？
@西谷滋人 教授


### スライド資料

<https://ist.ksc.kwansei.ac.jp/~nishitani/?c=plugin;plugin=attach_download;p=RecentPresentations;file_name=170729_RubyKansai_nishitani.pdf>

あたらしい学習感としてparticipation metaphorという物がある。  
QiitaやGitHubなどの成功しているシステムからはPMに基づいた設計思想が見える。  
それを元に大学での取り組みを紹介しながら、  
勉強会というコミュニティの活動について考察されたお話でした。  

### AM/PMとは？

教育の分野で広がってきている言葉で、  
学習活動を知識の獲得(acquire)ではなく技能集団への参加(participate)とみなすもの。  

* AM : acquisition metaphor
* PM : participation metaphor

### Situated Learning: Legitimate Peripheral Participation (Learning in Doing: Social, Cognitive and Computational Perspectives)

<https://www.amazon.co.jp/Situated-Learning-Participation-Computational-Perspectives/dp/0521423740>

アフリカの仕立て職人や助産婦の育成法を社会学的に詳しく調査した結果、徒弟制のなかに学びの本質があると指摘した。  
徒弟となる新人が、共同体の一員として見習い仕事を始める状況を  
「正統的周辺参加(legitimate peripheral participation) 」とあらわし、  
学習が社会活動のなかで実践されていくことを「状況に埋め込まれた学習(situated learning)」と表現した。  

数学教育者の Sfard は、古い学習観とこの新しい学習観の対比を
acquisition(獲得) metaphorとparticipation(参加) metaphor(AM/PM)  
という単語によって適切に表現した。  

### 実際の社会の取り組みに照らし合わせる。

OJTも技能集団への参加型の学習である。  
PBL(Problem Based Learning)という学習理論も同様。  

e.g.) 大工大では「何かを作る。出来るまで卒業できない」という状況をつくって問題に基づく学習をしているとの事。  

知識を理解するためには何かのモデルを作る事が重要。(メンタルモデルが出来ていないと理解が難しい事がある)  

e.g.) ディレクトリが木  
Rootは根っ子という意味だが構造の一番上なのは何故？  
メンタルモデルが出来ていない人に教えるのは難しい。  

弱視のプログラマへの指導に対する課題。  

* メンタルモデルがまだない
* どうやって教えたらいいか？

周りにもしいたらどの様に学んだかを聞きたい為、紹介してほしいとの事

----------------------------------------------

## rubocopとの付き合い方
@wakaba260yen さん


### スライド資料
<https://www.slideshare.net/ssuser21f9f1/rubocop-78362847>

Rubyのソースコード解析ツールである「Rubocop」の紹介でした。

### コードレビューの効能

* 新人教育
* 品質の向上
* 相互学習(レビュアーもコードを読むことで学習できる)

### 好みの話をしても品質の向上は見られない

naoyaのはてなダイアリー 「些末なコードレビュー」  
<http://d.hatena.ne.jp/naoya/20140313/1394664578>

本質的なことにクローズアップして実施する事が大事。  

e.g.)  
* 変更や拡張のしやすさ、バグ回避などの議論
* 設計や実装などの良い議論に時間を費やす

### rubocopとは？

rubyの静的解析ツール  
コーディングルールを初め、さまざまな静的解析が可能。  
だが、Rubyには公式のコーディングルールはない。  

そもそもRubyの思想は "Happy Hacking！"  
楽しくプログラミングできるように設計された言語。  

だけど、必ずしも一人が楽しければ良いわけでもない。  

* 他人のコードを読む触る時。  
* 業務においてはコードは自分だけの物でない。  

→状況に応じた適切なコーディングルールがあるとみんなが幸せになります。

### 機能紹介

* StyleCop  
→コーディングスタイルに対するCop  
コーディングルールの一貫性のチェックを行う。デフォルトはruby-style-guideに準拠  

* LayoutCop  
→レイアウトに対するCop  
インデント、アラインメント、空白などのチェック。

* LintCop  
→エラーに対するCop  
曖昧な表現や、エラーに対するチェックを行う。

* MetricsCop  
→メトリクスに対するCop。  
複雑さや保守性などのメトリクスを解析。  
複雑性を数値で表せる。チーム内での認識合わせにも使える。

* PerformanceCop  
→パフォーマンスに対するCop  
パフォーマンスの低いコードのチェックを行う。

* SeculityCop  
→セキュリティに対するCop。  
セキュリティに問題があるコードのチェック。  
MarshalやYAMLのチェック可。

* RailsCop  
* BundlerCop  
→RailsやBandlerに対するCop

* auto-correct  
→auto-correct対応のCopに対して、自動整形機能がある。  

* Todo  
rubocop ```--auto-gen-confug``` を実行する事でTodoリストを作成出来る。  
(「今は直せない負債」を目に見える形で残せるため、既存のプロジェクトに導入する時に使える)  

### Rubocopは強制ギブス

Railsのコードを解析すると1ファイルに警告300件という場合も…

解決策「Configuration」  
```.rubocop.yml```を設置することで設定を変更可。

### 守・破・離

剣道や茶道などで、修業における段階を示したもの。

守 : 師や流派の教え、型、技を忠実に守り、確実に身につける段階。  
→rubocopに教えを乞う状態

破 : 他の師や流派の教えについても考え、良いものを取り入れ、心技を発展させる段階。  
→rubocopのスタイルを自分に合わせて改善

離 : 一つの流派から離れ、独自の新しいものを生み出し確立させる段階。  
→自分なりのコーディングスタイルを確立

設定ファイル「rubocop.yml」を自分なりに育てることで、「離」に繋がる。

設定を議論することで共通認識が出来ることは非常によい。  
rubocopの設定をチームの合意にする。

### まとめ

* 自動化できるチェックはrubocopで自動化する
* rubocopは自分やチームに応じて育てていける
* rubocopと共に一緒に成長する事で自分なりのコーディングスタイルが確立できる。

### 質疑応答

#### auto-correctはrubocopのオプションか？

rubocopのオプションです。

#### 命名規則の指摘はしてくれるか？

「has_XXXXメソッドなどの最後の文字は"?"にすべきでは?」等の警告はデフォルトで入っている。

#### rubocopの使い方:どのCopに引っ掛かっているのか？の検知は可能か？

rubocop.ymlに以下を記載すれば良い。
```DisplayCopNames: true```

---

## Ruby と C# をつなぐ
@107steps さん


### スライド資料

<https://www.slideshare.net/107steps/ruby-c>

ruby-charp_scriptというrubyからC#を扱うためのライブラリを作られた方のお話でした。

### ruby-charp_scriotの実装

* rubyからC#を扱うためのライブラリ。  
* Roslynの薄いWrapper。  
* C#製  
* Wix Toolsetでインストーラーを作った。

### 将来

* C#のReflectionを使って、Ruby側でC＃のオブジェクトをRubyのコードっぽく生成したい
 e.g.) System::Console.WiteLine("架空のコード")
* .NetのDLLとして組み込んで、Rubyを使って自身のインスタンスをいじりたい
* 外部DLLの呼び出しにも対応したい

### 課題

* NuGet依存関係  
　→最新版のRoslynを組み込んだDLL郡を使おうとするとマイナー番号違いで起動しない。  
* Ruby2.4では起動しない

### 参考資料

<https://www.slideshare.net/107steps/cruby-77619984>  
<https://www.slideshare.net/107steps/rubyc>


### 質疑応答

#### ruby-charp_scriotを使うにあたってC#の開発環境入れてなくてもいいか?

ランタイムをインストールしていればOK

※ 但し動作するのは以下の環境限定  
* C# : Ver.7
* .Net : Ver.4.1

---

## RubyはPythonにしてやられてはいない
@ogomr さん

Rubyビジネスフォーラムに参加した際のレポートの発表でした。  
「RubyはPythonにしてやられてはいない」というのはRuby技術フォーラムでのまつもと ゆきひろ氏の言葉だそう。

### パネルディスカッションの話

議題：「RubyはPythonにしてやられてしまった理由」

* RubyはPythonに勝ったことはない。  
* そもそも言語の比較において勝ち負けという物は無い。  
* 知人の方がどれだけ使っているか？によって何を使うかが決まる。  
* ライブラリに何があるか？それは何に使うか？  
　(※RubyのライブラリはPythonより多い)

議題：「Rubyにおけるビッグデータや人工知能のライブラリはどうなる？」

SciRubyという物があります。  
<https://sciruby-jp.github.io/>  
※但し、まだ実用性はない模様。

議題：「なぜjavaScriptにしてやられたか？」

JavascriptがWebブラウザの言語として決まった後にRubyが出来た。  
高速なV8の技術はRubyに実装可能(但し莫大な資金が必要)  

議題：「mruby・mruby/CはRubyの良さを損なっていないか？」

言語使用は同じ。  
ErrorTrapはサポート低い、車載システムに組み込んだ場合、エラーが出た際には致命的なことが多い。  

---

### Ruby 初級者向けレッスン 61回 - 文字列

Ruby の基本的なクラスのひとつ、文字列についてのワークでした。
