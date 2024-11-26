import LetterViewer from "./LetterViewer";

const PigeonHoles = () => {
  return (
    <>
      <select className="p-2 m-5 border-2 rounded">
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
