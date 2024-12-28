import { ItemsContainer } from "../Items";
import { Editions } from "./Editions";
import { Enhancements } from "./Enhancements";
import { Seals } from "./Seals";

export const defaultData = {
  title: "",
  dataScheme: [],
  data: [],
};

export const Modifiers = () => {
  return (
    <ItemsContainer>
      <Editions />
      <Enhancements />
      <Seals />
    </ItemsContainer>
  );
};
