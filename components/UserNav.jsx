import Image from "next/image";

const UserNav = ({ user }) => {
  console.log(user?.profileImg);
  return (
    <div className="space-y-4">
      <div className="">
        <Image
          className="shadow-lg rounded-lg"
          src={user.profileImg ?? "https://picsum.photos/400/200"}
          alt="user profile image"
          width={400}
          height={200}
          objectFit={"cover"}
        />
      </div>

      <div className="space-y-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3 className="text-slate-900">{user.name}</h3>
          <p className="text-slate-600">{user.followerCount} followers</p>
        </div>
        <ul role="list" className="flex space-x-1">
          <li>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Follow
            </button>
          </li>
          <li>
            <button
              type="button"
              id={user.email}
              name={user.email}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNav;
