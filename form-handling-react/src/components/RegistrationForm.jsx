import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        name="username"
        placeholder="Username"
        value={username}        
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        name="email"
        placeholder="Email"
        value={email}           
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}       
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}
