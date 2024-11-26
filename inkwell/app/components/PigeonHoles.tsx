import LetterViewer from "./LetterViewer";

const PigeonHoles = () => {
  return (
    <>
      <div className="px-20">
        <p>sort by:</p>
        <select>
          <option value="none">-</option>
          {/* <option value="sender">sender</option> */}
          <option value="date_sent">date sent</option>
        </select>
        <p>order:</p>
        <select>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
      </div>
      <div className="border-4 border-black m-20 p-5">
        <LetterViewer />
      </div>
    </>
  );
};

export default PigeonHoles;
