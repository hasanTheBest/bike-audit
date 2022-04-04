import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import Blog from "./components/Blog/Blog";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        &copy; <a href="https://github.com/hasanTheBest">Mahmud</a> | All rights
        reserved
      </footer>
    </div>
  );
}

export default App;
