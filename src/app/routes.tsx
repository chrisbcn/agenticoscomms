import { createBrowserRouter, Navigate } from "react-router";
import DiscoverFeed from "./pages/DiscoverFeed";
import ItemDetail from "./pages/ItemDetail";
import AtelierHome from "./pages/AtelierHome";
import BrandPage from "./pages/BrandPage";
import MobileLayout from "./components/MobileLayout";
import AgenticLayout from "./components/AgenticLayout";
import Screen02_AgentGreeting from "./pages/agentic/Screen02_AgentGreeting";
import Screen03_VoiceInput from "./pages/agentic/Screen03_VoiceInput";
import Screen04_RestaurantRec from "./pages/agentic/Screen04_RestaurantRec";
import Screen05_BookingConfirm from "./pages/agentic/Screen05_BookingConfirm";
import Screen05b_RestaurantOlea from "./pages/agentic/Screen05b_RestaurantOlea";
import Screen06_FamilyMessages from "./pages/agentic/Screen06_FamilyMessages";
import ScreenAaron_MessagesAaron from "./pages/agentic/ScreenAaron_MessagesAaron";
import ScreenMom_MessagesMom from "./pages/agentic/ScreenMom_MessagesMom";
import Screen07_WaymoBooked from "./pages/agentic/Screen07_WaymoBooked";
import Screen08_WaymoTracking from "./pages/agentic/Screen08_WaymoTracking";
import Screen09_PhotoReel from "./pages/agentic/Screen09_PhotoReel";
import Screen10_SharePrompt from "./pages/agentic/Screen10_SharePrompt";
import Screen11_Finale from "./pages/agentic/Screen11_Finale";
import ScreenProcessing from "./pages/agentic/ScreenProcessing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/agentic" replace />,
  },
  {
    path: "/agentic",
    Component: AgenticLayout,
    children: [
      { index: true, Component: Screen02_AgentGreeting },
      { path: "greeting", Component: Screen02_AgentGreeting },
      { path: "voice", Component: Screen03_VoiceInput },
      { path: "restaurant", Component: Screen04_RestaurantRec },
      { path: "booking", Component: Screen05_BookingConfirm },
      { path: "booking-alt", Component: Screen05b_RestaurantOlea },
      { path: "messages", Component: Screen06_FamilyMessages },
      { path: "messages-aaron", Component: ScreenAaron_MessagesAaron },
      { path: "messages-mom", Component: ScreenMom_MessagesMom },
      { path: "waymo", Component: Screen07_WaymoBooked },
      { path: "tracking", Component: Screen08_WaymoTracking },
      { path: "photos", Component: Screen09_PhotoReel },
      { path: "share", Component: Screen10_SharePrompt },
      { path: "finale", Component: Screen11_Finale },
      { path: "processing", Component: ScreenProcessing },
    ],
  },
  {
    path: "/maura",
    Component: MobileLayout,
    children: [
      { index: true, Component: DiscoverFeed },
      { path: "item/:id", Component: ItemDetail },
      { path: "atelier", Component: AtelierHome },
      { path: "brand/:id", Component: BrandPage },
    ],
  },
]);
