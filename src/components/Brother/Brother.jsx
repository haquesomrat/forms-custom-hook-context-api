import { useContext } from "react";
import { MoneyContext } from "../Gradpa/Grandpa";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Sifat</h2>
      <p>POcket Money: {money}</p>
      <button onClick={() => setMoney(money + 300)}>Add new money</button>
    </div>
  );
};

export default Brother;
