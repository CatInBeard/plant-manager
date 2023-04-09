import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from '../Index/Index'
import NotFound from "../NotFound/NotFound"

let basepath = "/app";

let App = (props) => {
    const router = createBrowserRouter([
        {
          path: basepath,
          index: true,
          element: <Index />,
          errorElement: <NotFound />
        }
      ]);

      return <RouterProvider router={router} />;
}

export default App;