import { useState } from "react";

export default function RegistrationForm() {
  // Separate states for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Mock API submission
    console.log("Sending to API:", { username, email, password });
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      {/* Username */}
      <div className="mb-3">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={username}          // ✅ explicit state binding
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={email}             // ✅ explicit state binding
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={password}          // ✅ explicit state binding
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
