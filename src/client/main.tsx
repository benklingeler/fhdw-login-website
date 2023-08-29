import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import LoginPage from "./pages/login";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
