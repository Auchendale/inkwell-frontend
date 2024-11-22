import UserDetails from "./UserDetails";

const UserBtns = () => {
  return (
    <div className="p-5 my-5 gap-10 grid grid-cols-2">
      <button className="btn">Write a new letter</button>
      <button className="btn">Post on the bulletin board</button>
      <button className="btn">Saved letters</button>
      <button className="btn">Settings</button>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn">
          User info
        </div>
        <div
          tabIndex={0}
          className="dropdown-content card bg-primary text-primary-content z-[1] w-64 p-2 shadow"
        >
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default UserBtns;
