import { Link } from "react-router-dom";
import { ROUTES } from "../const";

export default function AnswerPage() {
  return (
    <>
      <h1>Answer Page</h1>

      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>Your Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              set関数でstate変数を更新を更新する際に何を使うと予期せぬバグが防げる？
            </td>
            <td>関数型更新</td>
            <td>Your Answer 1</td>
          </tr>
          <tr>
            <td>何を使うとより簡単な書き方で配列に要素を追加できる？</td>
            <td>スプレッド構文</td>
            <td>Your Answer 2</td>
          </tr>
          <tr>
            <td>
              Reactにおいて、コンポーネントの「状態」を管理するために最も一般的に使用されるHookは何か？
            </td>
            <td>useState</td>
            <td>Your Answer 3</td>
          </tr>
          <tr>
            <td>
              useEffectの第2引数に空の配列 [] を渡した場合、その副作用はいつ実行されるか？
            </td>
            <td>初回レンダリング（マウント）時のみ実行</td>
            <td>Your Answer 4</td>
          </tr>
          <tr>
            <td>
              コンポーネントがアンマウントされる際にクリーンアップ処理を行うには、useEffect内で何をすべきか？
            </td>
            <td>関数をリターンする</td>
            <td>Your Answer 5</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <Link to={ROUTES.HOME}>Home</Link>
    </>
  );
}
