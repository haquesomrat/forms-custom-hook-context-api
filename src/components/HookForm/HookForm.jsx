import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  // when return as array
  //   const [name, handleNameChange] = useInputState("Injam");
  //   const [email, handleEmailCange] = useInputState(
  //     "ihsomrat.official@gmail.com"
  //   );
  //   const [password, handlePassChange] = useInputState("12345678");

  //   when return as object
  const nameState = useInputState("Injam");
  const emailState = useInputState("ihsomrat.official@gmail.com");
  const passwordState = useInputState("12345678");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    console.log(nameState.value, emailState.value, passwordState.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <input {...nameState} type="text" name="name" />
        <br />
        <input {...emailState} type="email" name="email" />
        {/* <input
          value={email}
          onChange={handleEmailCange}
          type="email"
          name="email"
        /> */}
        <br />
        <input {...passwordState} type="password" name="password" />
        {/* <input
          value={password}
          onChange={handlePassChange}
          type="password"
          name="password"
        /> */}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
