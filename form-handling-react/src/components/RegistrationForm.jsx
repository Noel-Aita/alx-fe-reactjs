import { useState } from "react";

export default function RegistrationForm() {
  // Step 1: Set up state for each input field
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // to store validation errors

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;

    // Mock API request
    console.log("Sending to API:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      {/* Username Field */}
      <div className="mb-3">
        <label className="block mb-1">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      {/* Email Field */}
      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div className="mb-3">
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
