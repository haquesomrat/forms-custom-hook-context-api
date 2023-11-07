import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" required />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          required
        />
        <br />
        <input
          onChange={handlePassChange}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="Submit" required />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StatefulForm;
