import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../const";
import quizData from "../data/quiz";

export default function AnswerPage() {
  const { state } = useLocation();

  const answerLogs = state?.answerLogs ?? [];

  return (
    <>
      <h1>Answer Page</h1>

      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>Your Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {quizData.map((quiz, index) => (
            <tr key={index}>
              <td>{quiz.question}</td>

              <td>{quiz.options[quiz.answerIndex]}</td>

              <td>{quiz.options[answerLogs[index]]}</td>

              <td>{answerLogs[index] === quiz.answerIndex ? "〇" : "×"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Link to={ROUTES.HOME}>ホームに戻る</Link>
    </>
  );
}
