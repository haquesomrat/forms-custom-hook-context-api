import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Gradpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Nisa"}></Cousin>
        <Cousin name={"Niha"}></Cousin>
        <Cousin name={"Rishad"}></Cousin>
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 5000)}>
        Get some money from grandpa
      </button>
    </div>
  );
};

export default Aunty;
