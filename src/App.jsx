import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ReduxSync from "./pages/sync/redux";
import ReduxAsync from "./pages/async/redux";
import ZustandSync from "./pages/sync/zustand";
import ZustandAsync from "./pages/async/zustand";
import JotaiSync from "./pages/sync/jotai";
import JotaiAsync from "./pages/async/jotai";
import MobxSync from "./pages/sync/mobx";
import MobxAsync from "./pages/async/mobx";
import AboutId from "./pages/async/aboutId";
import JotaiId from "./pages/sync/jotaiId";
import ReduxId from "./pages/sync/reduxId";
import MobxId from "./pages/sync/mobxId";
import Context from "./pages/sync/context";
import ZustandId from "./pages/sync/zustandId";
import ContextId from "./pages/sync/contextId";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ReduxSync />,
        },
        {
          path: "async/redux",
          element: <ReduxAsync />,
        },
        {
          path: "sync/zustand",
          element: <ZustandSync />,
        },
        {
          path: "async/zustand",
          element: <ZustandAsync />,
        },
        {
          path: "sync/jotai",
          element: <JotaiSync />,
        },
        {
          path: "sync/context",
          element: <Context />,
        },
        {
          path: "async/jotai",
          element: <JotaiAsync />,
        },
        {
          path: "sync/mobx",
          element: <MobxSync />,
        },
        {
          path: "async/mobx",
          element: <MobxAsync />,
        },
        {
          path: "about/:id",
          element: <AboutId />,
        },
        {
          path: "about/jotai/:id",
          element: <JotaiId />,
        },
        {
          path: "about/redux/:id",
          element: <ReduxId />,
        },
        {
          path: "about/mobx/:id",
          element: <MobxId />,
        },
        {
          path: "about/zustand/:id",
          element: <ZustandId />,
        },
        {
          path: "about/context/:id",
          element: <ContextId />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
