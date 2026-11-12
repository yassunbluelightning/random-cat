・ここでは、わたし(Yasushi Obata)が、WebAPI,React,Next.js,Vercel,クラウドネイティブアプリを理解していることを示します。 <br>

・「猫画像ジェネレーター」です。どんなものかというと、ボタンを押したら、猫画像のWebAPIから画像のURLを取得し、ランダムに可愛い猫画像を表示するシンプルなクラウドネイティブアプリです。<br>
➡️WebAPIは、HTTP(Hypertext Transfer Protocol)リクエストメッセージなどの仕様のセットと、XML(拡張マークアップ言語)またはJSON(JavaScript Object Notation）形式などの応答メッセージの構造の定義を指します。<br>
➡️React (リアクト)は、ウェブブラウザで複雑なUIを容易に生成するためのフリーかつオープンソースなフロントエンドJavaScriptライブラリで、クライアントサイドであること、コンポーネントベースであること、仮想DOMを扱うこと、といった特徴を持ちます。<br>
➡️Next.js（ネクストジェイエス）は、ReactベースのオープンソースのフルスタックWebアプリケーションフレームワークで、ファイルシステムベースのルーティング、サーバーおよびクライアントでのレンダリング、データ取得、静的Webサイトの生成などの機能を提供します。<br>
➡️Vercelは、Next.jsを開発しているVercel社が提供しているフロントエンド向けのクラウドプラットフォームです。<br>
➡️Vercel上で動くアプリは、サーバーレスアーキテクチャの採用、
自動化されたCI/CDパイプライン、疎結合と外部サービスの活用等の特徴をもつ、クラウドネイティブアプリです。<br>
<br>
・どんなものかすぐに見たい場合は、Vercelにデプロイしてますので、下記のリンクからご確認ください。<br>
[Vercel上で確認](https://random-cat-omega-rose.vercel.app)
<br>

## Getting Started; MacOS,Linux,Windows等で、ローカル環境を構築する場合の手順は以下となります。

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More Next.js; Next.jsについて、もっと知りたい場合は下記を参照ください。
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel; Vercelへのデプロイの手順は以下となります。

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
