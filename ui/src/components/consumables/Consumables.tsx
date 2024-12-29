import { ItemsContainer } from "../Items";
import { SpectralCards } from "./SpectralCards";
import { TarotCards } from "./TarotCards";
import { PlanetCards } from "./PlanetCards";

export const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

const Consumables = () => {
  return (
    <ItemsContainer>
      <SpectralCards />
      <TarotCards />
      <PlanetCards />
    </ItemsContainer>
  );
};

export default Consumables;
