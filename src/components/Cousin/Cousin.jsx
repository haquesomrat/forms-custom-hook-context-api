import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>{name}</h2>
      {asset && <Special asset={asset}></Special>}
      {name === "Emu" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
