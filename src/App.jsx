import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QuestionPage } from "./components/pages/questionPage";
import { ResultPage } from "./components/pages/resultPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage></QuestionPage>}></Route>
          <Route path="/results" element={<ResultPage></ResultPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
