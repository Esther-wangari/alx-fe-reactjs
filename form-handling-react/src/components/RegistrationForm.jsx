import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username.trim) newErrors.username = "Username is required";
    if (!email.trim) newErrors.email = "Email is required";
    if (!password.trim) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        console.log("User registered:", data);
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
    } catch (error) {
        console.error("Error registering user:", error);
    }
};
     return (
    <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Register</button>

        </form>
        );
    



    };

export default RegistrationForm;

    
