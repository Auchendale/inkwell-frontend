import LetterViewer from "./LetterViewer";

const PigeonHoles = () => {
  return (
    <>
      <select>
        <option value="all">all</option>
        <option value="sender">sender</option>
        <option value="date_sent">date sent</option>
      </select>
      <div className="border-4 border-amber-900">
        <LetterViewer />
      </div>
    </>
  );
};

export default PigeonHoles;
