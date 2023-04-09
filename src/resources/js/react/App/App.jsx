import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from '../Index/Index'
import NotFound from "../NotFound/NotFound"
import PlantEditingContainer from "../PlantEditingContainer/PlantEditingContainer"

import {basepath, plantEditingPath} from '../Settings/Path';

let App = (props) => {
    const router = createBrowserRouter([
        {
          path: basepath,
          index: true,
          element: <Index />,
          errorElement: <NotFound />,
          shouldRevalidate: ({ currentUrl }) => {
            return true;
          }
        },
        {
          path: plantEditingPath + ":id",
          element: <PlantEditingContainer />,
          shouldRevalidate: ({ currentUrl }) => {
            return true;
          }
        }
      ]);

      return <RouterProvider router={router} />;
}

export default App;