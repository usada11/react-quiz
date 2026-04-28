const quizData = [
  {
    question: "set関数でstate変数を更新を更新する際に何を使うと予期せぬバグが防げる？",
    options: ["関数型更新", "スプレッド構文", "useEffect", "useState"],
    answerIndex: 0
  },
  {
    question: "何を使うとより簡単な書き方で配列に要素を追加できる？",
    options: ["関数型更新", "スプレッド構文", "useEffect", "useState"],
    answerIndex: 1
  },
  {
    question: "Reactにおいて、コンポーネントの「状態」を管理するために最も一般的に使用されるHookは何か？",
    options: ["関数型更新", "スプレッド構文", "useEffect", "useState"],
    answerIndex: 3
  },
  {
    question: "useEffectの第2引数に空の配列 [] を渡した場合、その副作用はいつ実行されるか？",
    options: ["コンポーネントが破棄される直前のみ実行", "コンポーネントが更新されるたび実行", "一度も実行されない", "初回レンダリング（マウント）時のみ実行"],
    answerIndex: 3
  },
  {
    question: "コンポーネントがアンマウントされる際にクリーンアップ処理を行うには、useEffect内で何をすべきか？",
    options: ["関数をリターンする", "window.unlaodイベントを使用", "useEffectnの第2引数にnullを渡す", "別のuseEffectを定義"],
    answerIndex: 0
  },
];

export default quizData