import { Link } from "react-router-dom";

export const NavigationMenu = () => {
  return (
    <div>
      <Link to="todos">Todo List</Link>
      <span> </span>
      <Link to="profile">Profile</Link>
    </div>
  );
};
