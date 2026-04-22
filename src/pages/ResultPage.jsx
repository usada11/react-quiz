import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";
import Result from "../components/Result/Result";

export default function ResultPage() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;

  return (
    <>
      <h1>Result</h1>
      <p>あなたの正解数は...</p>
      <p>{`全${maxQuizLen}問中，${correctNumLen}問正解でした！`}</p>
      <Result maxQuizLen={maxQuizLen} correctNumLen={ correctNumLen} />
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
      <br />
      <br />
      <Link to={ROUTES.HOME}>ホームに戻る</Link>
    </>
  );
}
