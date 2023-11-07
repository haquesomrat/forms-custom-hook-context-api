import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Rakib"} asset={asset}></Cousin>
        <Cousin name={"Emu"}></Cousin>
        <Cousin name={"Rahim"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
