import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from '../Index/Index'
import NotFound from "../NotFound/NotFound"
import PlantAddContainer from "../PlantAddContainer/PlantAddContainer";
import PlantEditingContainer from "../PlantEditingContainer/PlantEditingContainer"
import PlantViewContainer from "../PlantViewContainer/PlantViewContainer";
import ProfileContainer from "../ProfileContainer/ProfileContainer"

import {basepath, plantAddPath, plantEditingPath, plantViewPath, profilePath} from '../Settings/Path';

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
          path: plantEditingPath[0] + ":id" + plantEditingPath[1],
          element: <PlantEditingContainer />,
          shouldRevalidate: ({ currentUrl }) => {
            return true;
          }
        },
        {
          path: plantAddPath,
          element: <PlantAddContainer />,
          shouldRevalidate: ({ currentUrl }) => {
            return true;
          }
        },
        {
          path: plantViewPath + ":id",
          element: <PlantViewContainer />,
          shouldRevalidate: ({ currentUrl }) => {
            return true;
          }
        },
        {
          path: profilePath,
          element: <ProfileContainer />,
          shouldRevalidate: ({ currentUrl }) => {
            return true;
          }
        }
      ]);

      return <RouterProvider router={router} />;
}

export default App;