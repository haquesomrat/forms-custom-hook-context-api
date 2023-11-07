import "./App.css";
import Grandpa from "./components/Gradpa/Grandpa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   const { name, email, password } = data;
  //   console.log("sign up data", name, email, password);
  // };
  // const updateProfile = (data) => {
  //   console.log("updated profile data", data.name);
  // };
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        Sign Up Form
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        handleSubmit={updateProfile}
        submitBtnText="Update"
      >
        Profile Update Form
      </ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
