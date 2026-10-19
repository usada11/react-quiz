# React Quiz App

Reactで作成したインタラクティブなクイズアプリケーションです。


##  概要

ユーザーがクイズに回答し、スコアや結果をリアルタイムで確認できるWebアプリケーションです。Reactのコンポーネント設計や状態管理（useState / useReducerなど）の学習・実践を目的として制作しました。

---

##  主な機能

- **クイズ回答機能**: 選択肢を選んで解答を進行
- **スコア計算・結果表示**: 全問終了後の正解数の表示
- **リトライ機能**: 再度クイズに挑戦可能
- **答え合わせ対応**: 正解の確認

---

##  使用技術 (Tech Stack)

- **フロントエンド**: React (TypeScript / JavaScript), HTML5, CSS3 / Tailwind CSS
- **状態管理**: React Hooks (`useState`, `useReducer`, `useContext`)
- **ビルドツール**: Vite (または Create React App)
- **デプロイ**: Vercel (または GitHub Pages)

---

##  ローカルでの実行方法

以下の手順で、ローカル環境にて動作確認ができます。

```bash
# 1. リポジトリのクローン
git clone [https://github.com/usada11/react-quiz.git](https://github.com/usada11/react-quiz.git)

# 2. ディレクトリへの移動
cd react-quiz

# 3. パッケージのインストール
npm install

# 4. 開発サーバーの起動
npm run dev   # Create React Appの場合は npm start

起動後，ブラウザで http://localhost:5173/ を開いてください．
