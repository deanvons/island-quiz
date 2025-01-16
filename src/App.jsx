import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QuestionPage } from "./components/pages/questionPage";
import { ResultPage } from "./components/pages/resultPage";
import withAuth from "./components/guards/authGuard";

function App() {

  const ProtectedResultPage = withAuth(ResultPage);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage></QuestionPage>}></Route>
          <Route path="/results" element={<ProtectedResultPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
