import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={onSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-500 hover:to-purple-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign In
            </button>
          </div>

          {/* Additional Links */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <a
              href="#"
              className="hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Forgot Password?
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Create an Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
