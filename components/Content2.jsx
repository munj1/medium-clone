import Preview from "./Preview";
import UserNav from "./UserNav";
// import { useUserData } from "./store";

const Content2 = ({ userData }) => {
  console.log(userData);

  if (!userData) {
    return;
  }

  return (
    <div className={`p-6`}>
      <UserNav user={userData} key={userData.email} />
      <Preview />
    </div>
  );
};

export default Content2;
