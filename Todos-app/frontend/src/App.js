import "./App.css";
import AddTodos from "./components/Addtodos.jsx";
import Done from "./components/Done.jsx";
import OnProgress from "./components/OnProgress.jsx";
import Todo from "./components/Todo.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="  flex flex-col items-center justify-center md:flex-row md:items-start md:justify-center  ">
              <Todo />
              <OnProgress />
              <Done />
            </div>
          }
        />

        <Route path="/add" element={<AddTodos />} />
      </Routes>
    </Router>
  );
}

export default App;
