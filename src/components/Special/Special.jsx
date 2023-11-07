import { useContext } from "react";
import { AssetContext } from "../Gradpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Special</h2>
      <p>{gift}</p>
      <p>{asset}</p>
    </div>
  );
};

export default Special;
