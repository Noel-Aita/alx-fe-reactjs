import useAuth from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Login Page</h2>
      <p>Please log in to access protected routes.</p>
      <button
        onClick={login}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
}
