import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Menu from "./components/Menu";

const App = () => {
  const CARS_DESCRIPTION = "Order Online for Touchless Delivery";
  const SOLAR_PANELS_DESCRIPTION = "Money-back guarantee";
  const SOLAR_ROOF_DESCRIPTION =
    "Solar Roof Costs Less Than a New Roof Plus Solar Panels";

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`w-screen h-screen ${menuOpen && "overflow-hidden"}`}>
      <Menu
        visible={menuOpen}
        menuState={menuOpen}
        setMenuState={setMenuOpen}
      />
      <div
        className={`w-screen h-screen ${
          menuOpen && "filter blur brightness-75"
        }`}
      >
        <Header setMenuState={setMenuOpen} menuState={menuOpen} />
        <Section
          product="ModelS"
          productName="Model S"
          productDescription={CARS_DESCRIPTION}
          id="ModelS"
          firstSection
        />
        <Section
          product="ModelY"
          productName="Model Y"
          productDescription={CARS_DESCRIPTION}
          id="ModelY"
        />
        <Section
          product="Model3"
          productName="Model 3"
          productDescription={CARS_DESCRIPTION}
          id="Model3"
        />
        <Section
          product="ModelX"
          productName="Model X"
          productDescription={CARS_DESCRIPTION}
          id="ModelX"
        />
        <Section
          product="SolarPanels"
          productName="Lowest Cost Solar Panels in America"
          productDescription={SOLAR_PANELS_DESCRIPTION}
          id="SolarPanels"
        />
        <Section
          product="SolarRoof"
          productName="Solar for New Roofs"
          productDescription={SOLAR_ROOF_DESCRIPTION}
          id="SolarRoof"
        />
        <Section
          product="Accesories"
          productName="Accessories"
          productDescription=""
          id="Accesories"
          accessories
        />
      </div>
    </div>
  );
};

export default App;

/**
 * PurgeCSS:
 * bg-ModelS
 * bg-Model3
 * bg-ModelX
 * bg-ModelY
 * bg-SolarPanels
 * bg-SolarRoof
 * bg-Accesories
 */
