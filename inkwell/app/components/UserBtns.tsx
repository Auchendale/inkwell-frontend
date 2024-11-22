const UserBtns = () => {
  return (
    <div className="p-5 my-5 gap-10 grid grid-cols-3">
      <button className="border rounded-full py-7 my-10 hover:bg-blue-600 hover:text-white transition duration-300 ease-in">
        Write a new letter
      </button>
      <button className="border rounded-full py-7 my-10 hover:bg-blue-600 hover:text-white transition duration-300 ease-in">
        Post on the bulletin board
      </button>
      <button className="border rounded-full py-7 my-10 hover:bg-blue-600 hover:text-white transition duration-300 ease-in">
        User info
      </button>
      <button className="border rounded-full py-7 my-10 hover:bg-blue-600 hover:text-white transition duration-300 ease-in">
        Saved letters
      </button>
      <button className="border rounded-full py-7 my-10 hover:bg-blue-600 hover:text-white transition duration-300 ease-in">
        Settings
      </button>
    </div>
  );
};

export default UserBtns;
