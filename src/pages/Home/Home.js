import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Instrumentos from "../../components/Instrumentos/Instrumentos";
import Novidades from "../../components/Novidades/Novidades";
import Vitrine from "../../components/Vitrine/Vitrine";
import Marcas from "../../components/Marcas/Marcas";
import About from "../../components/About/About";

const Home = () => {
  return (
    <main>
      <HomeSlider />
      <Instrumentos />
      <Novidades />
      <Vitrine />
      <Marcas />
      <About />
    </main>
  );
};

export default Home;
