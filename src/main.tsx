import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

// Routes
import App from "./App";
import Checkbox from "./pages/checkbox";
import Partitioner from "./pages/partitioner";
import FileTree from "./pages/file-tree";
import NestedComments from "./pages/nested-comments";
import KanbanBoard from "./pages/kanban-board";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="partitioner" element={<Partitioner />} />
      <Route path="file-tree" element={<FileTree />} />
      <Route path="checkbox" element={<Checkbox />} />
      <Route path="nested-comments" element={<NestedComments />} />
      <Route path="kanban-board" element={<KanbanBoard />} />
    </Routes>
  </BrowserRouter>
);
