import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QuestionPage } from "./components/pages/questionPage";
import { ResultPage } from "./components/pages/resultPage";
import withAuth from "./components/guards/authGuard";

function App() {

  // wrap the ResultPage to protect it
  const ProtectedResultPage = withAuth(ResultPage); 
   // i.e. if you try go to localhost.../results, it won't show unless you satisfy the condition in withAuth

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage></QuestionPage>}></Route>
          {/* render the ProtectedResultPage, it will have the check built in by the withAuth HOC */}
          <Route path="/results" element={<ProtectedResultPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;