import { useContext } from "react";
import { AssetContext } from "../Gradpa/Grandpa";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>{gift}</p>
    </div>
  );
};

export default Friend;
