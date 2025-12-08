import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});  

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {                   
      newErrors.email = "Email is required";
    }
    if (!password) {                 
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);             

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      {/* Errors UI */}
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

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
