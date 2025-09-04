// src/components/UserProfile.jsx
function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      {/* User Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 rounded-full mx-auto"
      />

      {/* User Name */}
      <h1 className="text-xl text-blue-800 my-4 font-semibold">
        John Doe
      </h1>

      {/* User Bio */}
      <p className="text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
