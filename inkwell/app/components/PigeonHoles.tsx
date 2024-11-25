import LetterViewer from "./LetterViewer";

const PigeonHoles = () => {
  return (
    <>
      <select>
        <option value="all">all</option>
        <option value="sender">sender</option>
        <option value="date_sent">date sent</option>
      </select>
      <div className="border-4 border-black m-20 p-5">
        <LetterViewer />
      </div>
    </>
  );
};

export default PigeonHoles;
