"use server";//fetchImage()を常にサーバーサイドで実行。
 
import { CAT_API_KEY } from "./env"; // 追加;APIキーを環境変数として管理すると、ソースコードにAPIキーを直接描かなくてよくなる。


// 画像情報の型定義
type Image = {
  url: string;
};

// APIから画像を取得する関数
export async function fetchImage():Promise<Image> {
  //const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    headers: { "x-api-key": CAT_API_KEY }, // 追加
  });
  const images = await res.json();
  console.log("fetchImage: 画像情報を取得しました", images);
  return images[0]; // 画像情報の配列から最初の要素を返す
}
