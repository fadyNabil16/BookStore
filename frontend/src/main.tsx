import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.tsx";
import { UserProvider } from "@/Context/UserAuthContext.tsx";
import { ToastContainer } from "react-toastify";
// import dotenv from "dotenv";

// dotenv.config();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
