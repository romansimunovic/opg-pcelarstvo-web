import Hero from "../components/sections/Hero/Hero";
import Benefits from "../components/sections/Benefits";
import Products from "../components/sections/Products";
import Story from "../components/sections/Story";
import Gallery from "../components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
        <Benefits />
        <Products />
        <Story />
        <Gallery />
    </>
  );
}