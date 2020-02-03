# DNAConverter-web_vue
* [Webページ](http://adventam10.html.xdomain.jp/dna/)
* [Webページ(https!!!)](https://adventam10.github.io/DNAConverter-web_vue/)

## 環境
* サーバー  
[XFREE](https://www.xfree.ne.jp/)
*  HTML5

## 内容
* copy_to_mamp.sh  
MAMP の htdocs にソースをコピーするスクリプト

### ソース
* src  
作業用
* docs  
`npx gulp` で作成した実際にサーバーに置くやつ

## gulp使い方
* [node.js](https://nodejs.org/ja/)（最新版の方）をインストール
* ターミナルで `node -v` できればインストール完了
* ターミナルで DNAConverter-web_vue フォルダに移動
* 必要であれば `npm install -D` でインストールする
* `npx gulp` で処理実行 docs フォルダにファイルが生成される
