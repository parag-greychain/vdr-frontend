import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Login, Home } from "./pages";
import { PATHS } from "./shared";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={PATHS.login} element={<Login />} />
        <Route index path={PATHS.home} element={<Home />} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer
        position={"bottom-right"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />

      <Suspense
        fallback={
          <div className="d-flex d-flex-middle d-flex-center h-full">
            Loading...
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
