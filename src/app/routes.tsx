import { createBrowserRouter, Navigate } from "react-router";
import DiscoverFeed from "./pages/DiscoverFeed";
import ItemDetail from "./pages/ItemDetail";
import AtelierHome from "./pages/AtelierHome";
import BrandPage from "./pages/BrandPage";
import MobileLayout from "./components/MobileLayout";
import AgenticLayout from "./components/AgenticLayout";
import Screen01_HomeScreen from "./pages/agentic/Screen01_HomeScreen";
import Screen02_AgentGreeting from "./pages/agentic/Screen02_AgentGreeting";
import Screen03_VoiceInput from "./pages/agentic/Screen03_VoiceInput";
import Screen04_RestaurantRec from "./pages/agentic/Screen04_RestaurantRec";
import Screen05_BookingConfirm from "./pages/agentic/Screen05_BookingConfirm";
import Screen06_FamilyMessages from "./pages/agentic/Screen06_FamilyMessages";
import Screen07_WaymoBooked from "./pages/agentic/Screen07_WaymoBooked";
import Screen08_WaymoTracking from "./pages/agentic/Screen08_WaymoTracking";
import Screen09_PhotoReel from "./pages/agentic/Screen09_PhotoReel";
import Screen10_SharePrompt from "./pages/agentic/Screen10_SharePrompt";
import Screen11_Finale from "./pages/agentic/Screen11_Finale";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/agentic" replace />,
  },
  {
    path: "/agentic",
    Component: AgenticLayout,
    children: [
      { index: true, Component: Screen01_HomeScreen },   // Animation
      { path: "greeting", Component: Screen02_AgentGreeting }, // Default home
      { path: "voice", Component: Screen03_VoiceInput },     // Bixby greeting
      { path: "restaurant", Component: Screen04_RestaurantRec }, // Voice input
      { path: "booking", Component: Screen05_BookingConfirm },  // Restaurant rec
      { path: "messages", Component: Screen06_FamilyMessages },  // Booked
      { path: "waymo", Component: Screen07_WaymoBooked },    // Reservation confirmed
      { path: "tracking", Component: Screen08_WaymoTracking },  // Waymo booked
      { path: "photos", Component: Screen09_PhotoReel },     // Live tracking
      { path: "share", Component: Screen10_SharePrompt },    // Photo reel
      { path: "finale", Component: Screen11_Finale },        // Finale
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
