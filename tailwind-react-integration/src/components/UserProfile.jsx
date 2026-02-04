function UserProfile() {
  return (
    <div
      className="
        mx-auto
        mt-10
        p-4 md:p-8
        max-w-xs md:max-w-sm
        bg-white
        rounded-xl
        shadow-md
        text-center
      "
    >
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User profile"
        className="
          mx-auto
          rounded-full
          w-24 h-24
          md:w-36 md:h-36
        "
      />

      {/* User Name */}
      <h2
        className="
          mt-4
          font-semibold
          text-lg md:text-xl
          text-gray-800
        "
      >
        Kareh
      </h2>

      {/* User Bio */}
      <p
        className="
          mt-2
          text-sm md:text-base
          text-gray-600
        "
      >
        Frontend developer passionate about building responsive and user-friendly applications.
      </p>
    </div>
  )
}

export default UserProfile
