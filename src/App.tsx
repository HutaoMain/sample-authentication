import "./App.css";
import React, { Suspense, lazy, useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { AuthContext } from "./context/UserContext";

const Login = lazy(() => import("./components/login/Login"));
const Home = lazy(() => import("./components/home/Home"));
const EditorHome = lazy(() => import("./components/editorHome/EditorHome"));

const App: React.FC = () => {
  const { state } = useContext(AuthContext);

  console.log("state: ", state.user?.username);

  let routes = useRoutes([
    {
      path: "/login",
      element: !state.user ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ) : (
        <Navigate to="/" />
      ),
    },
    {
      path: "/",
      element: state.user ? (
        <Suspense fallback={<div>Loading...</div>}>
          {state.user.username === "atuny0" ? <EditorHome /> : <Home />}
        </Suspense>
      ) : (
        <Navigate to="/login" />
      ),
    },
  ]);

  return routes;
};

export default App;
