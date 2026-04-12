import { createBrowserRouter } from "react-router";
import DiscoverFeed from "./pages/DiscoverFeed";
import ItemDetail from "./pages/ItemDetail";
import AtelierHome from "./pages/AtelierHome";
import BrandPage from "./pages/BrandPage";
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
      {
        path: "atelier",
        Component: AtelierHome,
      },
      {
        path: "brand/:id",
        Component: BrandPage,
      },
    ],
  },
]);
