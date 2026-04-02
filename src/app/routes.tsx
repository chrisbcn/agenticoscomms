import { createBrowserRouter } from "react-router";
import DiscoverFeed from "./pages/DiscoverFeed";
import ItemDetail from "./pages/ItemDetail";
import MobileLayout from "./components/MobileLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MobileLayout,
    children: [
      {
        index: true,
        Component: DiscoverFeed,
      },
      {
        path: "item/:id",
        Component: ItemDetail,
      },
    ],
  },
]);