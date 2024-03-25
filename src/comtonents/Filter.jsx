import { useState, useEffect } from "react";

function Filter(props) {
  const [useFilter1, setUseFilter1] = useState(true);
  const [useFilter2, setUseFilter2] = useState(false);
  const [useFilter3, setUseFilter3] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const sort1 = () => {
    setUseFilter1(true);
    setUseFilter2(false);
    setUseFilter3(false);
    props.setUseToDo(filteredData);
  };
  const sort2 = () => {
    setUseFilter1(false);
    setUseFilter2(true);
    setUseFilter3(false);
    props.setUseToDo(filteredData);
  };
  const sort3 = () => {
    setUseFilter1(false);
    setUseFilter2(false);
    setUseFilter3(true);
    props.setUseToDo(filteredData);
  };

  useEffect(() => {
    if (useFilter1) {
      // When "All" is selected, show all items
      setFilteredData([...props.useToDo]);
    } else if (useFilter2) {
      // When "Active" is selected, show only active items
      setFilteredData([...props.useToDo].filter((item) => !item.completed));
    } else if (useFilter3) {
      // When "Completed" is selected, show only completed items
      setFilteredData([...props.useToDo].filter((item) => item.completed));
    }
  }, [props.useToDo, useFilter1, useFilter2, useFilter3]);
  return (
    <div>
      <div className="w-[327px] rounded-[5px] bg-white shadow-mainShadow flex justify-center gap-[18.5px] pt-[15px] pb-[19px] mt-4">
        <span
          onClick={sort1}
          className={`${
            useFilter1 ? "text-[#3a7cfd]" : "text-[#9495a5]"
          } text-sm font-[700] tracking-[-0.19px]`}
        >
          All
        </span>
        <span
          onClick={sort2}
          className={`${
            useFilter2 ? "text-[#3a7cfd]" : "text-[#9495a5]"
          } text-sm font-[700] tracking-[-0.19px]`}
        >
          Active
        </span>
        <span
          onClick={sort3}
          className={`${
            useFilter3 ? "text-[#3a7cfd]" : "text-[#9495a5]"
          } text-sm font-[700] tracking-[-0.19px]`}
        >
          Completed
        </span>
      </div>
      <footer className="text-sm text-[#9495a5] font-[500] tracking-[-0.19px] text-center mt-10 mb-8">
        Drag and drop to reorder list
      </footer>
    </div>
  );
}

export default Filter;
