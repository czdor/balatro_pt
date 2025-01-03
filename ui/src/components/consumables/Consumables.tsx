import { ItemsContainer } from "../Items";
import { SpectralCards } from "./SpectralCards";
import { TarotCards } from "./TarotCards";
import { PlanetCards } from "./PlanetCards";
import { Vouchers } from "./Vouchers";

export const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

const Consumables = () => {
  return (
    <ItemsContainer>
      <Vouchers />
      <PlanetCards />
      <TarotCards />
      <SpectralCards />
    </ItemsContainer>
  );
};

export default Consumables;
