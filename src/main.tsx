import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Partitioner from "./pages/partitioner";
import "./index.css";
import FileTree from "./pages/file-tree";
import Checkbox from "./pages/checkbox";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="partitioner" element={<Partitioner />} />
      <Route path="file-tree" element={<FileTree />} />
      <Route path="checkbox" element={<Checkbox />} />
    </Routes>
  </BrowserRouter>
);
