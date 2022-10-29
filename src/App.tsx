import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useCallback } from "react";
import "./App.css";
import PageLayout from "./components/pagelayout.component";
import { PageNavBar } from "./components/pagenavbar.component";
import posts from "./posts";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Post from "./components/post.component";
function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <BrowserRouter>
      <div>
        <PageNavBar isHome={isHome} setIsHome={setIsHome} />

        <Routes>
          <Route
            path="home"
            element={<PageLayout setIsHome={setIsHome} />}
          ></Route>
          {posts.map((post, index) => (
            <Route
              key={index}
              path={post.route}
              element={<Post filePath={post.file} />}
            />
          ))}
          <Route
            path="/"
            element={<PageLayout setIsHome={setIsHome} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
