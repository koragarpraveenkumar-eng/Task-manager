import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import AllTask from "../pages/allTask";
import CompletedTask from "../pages/completedTask";
import PendingTask from "../pages/pendingTask";
import ProcessingTask from "../pages/processingTask";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: AllTask,
      },
      {
        path: "/completed",
        Component: CompletedTask,
      },
      {
        path: "/pending",
        Component: PendingTask,
      },
      {
        path: "/processing",
        Component: ProcessingTask,
      },
    ],
  },
]);

export default router;
