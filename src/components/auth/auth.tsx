import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { FaUser, FaLock, FaUserGraduate } from "react-icons/fa";

type User = {
  email: string;
  password: string;
  role: string;
};

const MOCK_USERS: User[] = [
  { email: "admin@corp.com", password: "admin123", role: "admin" },
  { email: "user@corp.com", password: "user123", role: "user" },
];

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const foundUser = MOCK_USERS.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        setMessage(`✅ Welcome, ${foundUser.role}!`);
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        if (foundUser.role === "user") navigate("/user");
        else if (foundUser.role === "admin") navigate("/admin");
      } else {
        setMessage("❌ Invalid credentials.");
      }
    } else {
      setMessage("🎉 Account created (mock). Please log in.");
      setIsLogin(true);
      setEmail("");
      setPassword("");
      setRole("");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
          Login
        </button>
        <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
          Sign up
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <span className="icon"><FaUser /></span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-wrapper">
          <span className="icon"><FaLock /></span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLogin && (
          <div className="input-wrapper">
            <span className="icon"><FaUserGraduate /></span>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}

        <button className="auth-button" type="submit">
          {isLogin ? "Login" : "Sign up"}
        </button>

        {message && (
          <p
            style={{
              marginTop: "1rem",
              color: message.includes("✅") || message.includes("🎉") ? "green" : "crimson",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthPage;
