---
title: 【Linux】シェルスクリプトでログ出力するのに便利なツール「shell-logger」
date: "2019-05-17"
---

![Otter](./otter.jpg)  

---

シェルスクリプトを書いている時にログのレベルに分けて出力する様な事があると思います。  
そんな時に便利なツールです。

### rcmdnk/shell-logger  
https://github.com/rcmdnk/shell-logger


### インストール方法

上記のURLから ```etc/shell-logger.sh``` を取得し、
適当なところにおいてそれを読み込むだけでOKです。

```
$ source .../etc/shell-logger.sh
```

### 使い方

読み込むと以下の関数が使えるようになります。


|Level |Functions |
|---|---|
|DEBUG |debug |
|INFO |info, information |
|NOTICE |notice, notification |
|WARNING |warn, warning |
|ERROR |err, error |


ターミナルからも試すことができます。

```
$ notice This is notice level.
[2018/XX/XX XX:XX:XX] [NOTICE]: This is notice level.
$ err This is error.
[2018/XX/XX XX:XX:XX] [ERROR]: This is error.
$ notice cat test at pipe/file output|cat
[2018/XX/XX XX:XX:XX] [NOTICE]: cat test at pipe/file output
```

上の例で最後のnoticeコマンドはパイプで繋げていますが、  
ファイルへ出力したり、パイプでコマンドに渡す場合は、色の装飾が消える様になっています。

### オプション

変数を書き換えることで、色々なカスタマイズが出来ます。

|変数名 |概要 |デフォルト値 |
|---|---|---|
|_LOGGER_DATE_FORMAT |出力する日付のフォーマットの変更 |%Y/%m/%d %H:%M:%S |
|_LOGGER_LEVEL |0: DEBUG, 1: INFO, 2: NOTICE, 3: WARN, 4: ERROR |1 |
|_LOGGER_STDERR_LEVELここで指定したレベル以上の出力を stderrに出力する |4 |
|_LOGGER_DEBUG_COLOR | DEBUGの色変更 |3(イタリック表示) |
|_LOGGER_INFO_COLOR |INFOの色変更 |""ターミナルのデフォルトの色 |
|_LOGGER_NOTICE_COLOR |NOTICEの色変更 |36(シアン) |
|_LOGGER_WARNING_COLOR |WARNINGの色変更 |33(黄色) |
|_LOGGER_ERROR_COLOR |ERRORの色変更 |31(赤) |
|_LOGGER_ALWAYS_COLOR |-1: 常に色を付けない 0: ターミナル出力のみ色を付ける 1: 常に色を付ける |0 |
|_LOGGER_LEVELS |出力時の各レベルのフォーマット。※5つの名前指定が必要 |("DEBUG" "INFO" "NOTICE" "WARNING" "ERROR") |

※色の定義についてはStandard ECMA-48 (p61, p62)を参照  
http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-048.pdf