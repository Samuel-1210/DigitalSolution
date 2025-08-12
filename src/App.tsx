import ".//./styles/index.css";
import Header from "./components/layout/Header";
import Hero from "./pages/Hero";

import Partners from "./pages/Partners";
import Overview from "./pages/Overview";
import Media from "./components/common/media/UnderHero";
import Video from "./components/common/media/Video";
import Workflow from "./pages/Workflow";
import Mvv from "./pages/Mvv";
import Talk from "./pages/Talk";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  useEffect(() => {
    toast("Você pode buscar um CEP clicando na lupa no topo!", {
      icon: "🔍",
      duration: 6000,
    });
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <Media />
      <Partners />
      <Overview />
      <Video />
      <Workflow />
      <Mvv />
      <Talk />
      <Footer />
    </>
  );
}
