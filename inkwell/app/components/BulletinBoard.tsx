import Image from "next/image";

const BulletinBoard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200 bg-white">
        <Image
          src={require("../../assets/bulletin_board1.png")}
          width={500}
          height={300} // Add height for better control
          alt="Bulletin board"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default BulletinBoard;
