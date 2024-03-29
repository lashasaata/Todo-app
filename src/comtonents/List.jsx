import { useState } from "react";
import { useEffect } from "react";

function List(props) {
  const clearComplited = () => {
    const uncompletedElements = props.useToDo.filter((e) => {
      if (!e.complited) {
        return e;
      }
    });
    props.setUseToDo(uncompletedElements);
  };

  // this function makes todos complited
  const complite = (id) => {
    let ids = [];
    props.useToDo.map((e) => {
      ids.push(e.id);
    });
    let compliteItemIndex = ids.indexOf(id);
    const existToDos = [...props.useToDo];
    existToDos[compliteItemIndex].complited =
      !existToDos[compliteItemIndex].complited;
    props.setUseToDo(existToDos);
  };

  // this function gets clicked img parent div "id" searches in todo list and deletes it
  const deleteToDo = (id) => {
    let ids = [];
    props.useToDo.map((e) => {
      ids.push(e.id);
    });
    let deleteItemIndex = ids.indexOf(id);
    const existToDos = [...props.useToDo];
    existToDos.splice(deleteItemIndex, 1);
    props.setUseToDo(existToDos);
  };
  //// filter functions
  const [useFilter1, setUseFilter1] = useState(true);
  const [useFilter2, setUseFilter2] = useState(false);
  const [useFilter3, setUseFilter3] = useState(false);
  const sort1 = () => {
    setUseFilter1(true);
    setUseFilter2(false);
    setUseFilter3(false);
    props.setUseFilter(props.useToDo);
  };

  const sort2 = () => {
    setUseFilter1(false);
    setUseFilter2(true);
    setUseFilter3(false);
    const filteredData = props.useToDo.filter((e) => !e.complited);
    props.setUseFilter(filteredData);
  };

  const sort3 = () => {
    setUseFilter1(false);
    setUseFilter2(false);
    setUseFilter3(true);
    const filteredData = props.useToDo.filter((e) => e.complited);
    props.setUseFilter(filteredData);
  };

  useEffect(() => {
    // This code block will run whenever props.useToDo changes
    if (useFilter1) {
      sort1();
    } else if (useFilter2) {
      sort2();
    } else if (useFilter3) {
      sort3();
    }
  }, [props.useToDo]);

  // focus handler on delete button
  const mouseEnterHandler = (e) => {
    const divButton = [...e.target.childNodes][1];
    const displayProperty = window
      .getComputedStyle(divButton)
      .getPropertyValue("display");

    if (displayProperty == "none" && divButton) {
      divButton.style.display = "block";
    }
  };
  const mouseLeaveHandler = (e) => {
    const divButton = [...e.target.childNodes][1];
    const displayProperty = window
      .getComputedStyle(divButton)
      .getPropertyValue("display");
    const gapProperty = window
      .getComputedStyle([...e.target.childNodes][0])
      .getPropertyValue("gap");
    console.log(gapProperty);
    if (gapProperty == "12px" && displayProperty == "block" && divButton) {
      // do nothing
    } else if (displayProperty == "block" && divButton) {
      divButton.style.display = "none";
    }
  };
  return (
    <div>
      <main
        className={`${
          props.darkMode
            ? "bg-[#25273d] shadow-dark"
            : "bg-white shadow-mainShadow"
        } w-[327px] lg:w-[540px] rounded-[5px] mt-[16px] lg:mt-6 flex flex-col items-center`}
      >
        {[...props.useFilter].map((e) => {
          return (
            <div
              key={e.id}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`${
                props.darkMode ? "border-[#393a4b]" : "border-[#e3e4f1]"
              } w-[327px] lg:w-[540px] flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 border-b border-solid hover:cursor-pointer`}
            >
              <div className="flex items-center gap-3 lg:gap-6">
                <div
                  onClick={() => complite(e.id)}
                  className={`${
                    e.complited
                      ? "bg-gradient-to-br from-[#5df] to-[#c058f3]"
                      : !props.darkMode
                      ? "bg-white border border-solid border-[#e3e4f1]"
                      : "bg-[#25273d] border border-solid border-[#393a4b]"
                  } w-5 lg:w-6 h-5 lg:h-6 rounded-full flex justify-center items-center hover:cursor-pointer hover:border-[#55ddff]`}
                >
                  {e.complited ? (
                    <img src="./images/icon-check.svg" alt="check_icon" />
                  ) : (
                    ""
                  )}
                </div>
                <p
                  className={`${
                    e.complited
                      ? `${
                          props.darkMode
                            ? "text-[#4d5067] line-through"
                            : "text-[#d1d2da] line-through"
                        }`
                      : `${
                          props.darkMode ? "text-[#c8cbe7]" : "text-[#494c6b]"
                        }`
                  } text-xs lg:text-lg tracking-[-0.17px] lg:tracking-[-0.25px] lg:leading-[18px] lg:mt-[-4px]`}
                >
                  {e.toDo}
                </p>
              </div>
              <button
                onClick={() => deleteToDo(e.id)}
                className="block lg:hidden"
              >
                <img
                  key={e.id}
                  className="w-3 lg:w-[18px] h-3 lg:h-[18px]"
                  src="./images/icon-cross.svg"
                  alt="cross_icon"
                />
              </button>
            </div>
          );
        })}
        <div className="w-[327px] lg:w-[540px] flex justify-center pt-4 pb-5">
          <div className="w-[287px] lg:w-[492px] flex items-center justify-between">
            <p
              className={`${
                props.darkMode ? "text-[#5b5e7e]" : "text-[#9495a5]"
              } text-xs lg:text-sm font-[500] tracking-[-0.17px] lg:tracking-[-0.19px]`}
            >
              <span>{props.useFilter.length} </span>items left
            </p>
            <div className="flex justify-center items-center gap-[18.5px] hidden lg:flex">
              <span
                onClick={sort1}
                className={`${
                  useFilter1
                    ? "text-[#3a7cfd]"
                    : props.darkMode
                    ? "text-[#5b5e7e]"
                    : "text-[#9495a5]"
                } text-sm font-[700] tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
              >
                All
              </span>
              <span
                onClick={sort2}
                className={`${
                  useFilter2
                    ? "text-[#3a7cfd]"
                    : props.darkMode
                    ? "text-[#5b5e7e]"
                    : "text-[#9495a5]"
                } text-sm font-[700] tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
              >
                Active
              </span>
              <span
                onClick={sort3}
                className={`${
                  useFilter3
                    ? "text-[#3a7cfd]"
                    : props.darkMode
                    ? "text-[#5b5e7e]"
                    : "text-[#9495a5]"
                } text-sm font-[700] tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
              >
                Completed
              </span>
            </div>
            <span
              onClick={clearComplited}
              className={`${
                props.darkMode ? "text-[#5b5e7e]" : "text-[#9495a5]"
              } text-xs lg:text-sm font-[500] tracking-[-0.17px] lg:tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
            >
              Clear Completed
            </span>
          </div>
        </div>
      </main>
      <div>
        <div
          className={`${
            props.darkMode
              ? "bg-[#25273d] shadow-dark"
              : "bg-white shadow-mainShadow"
          } w-[327px] rounded-[5px] flex justify-center gap-[18.5px] pt-[15px] pb-[19px] mt-4 lg:hidden`}
        >
          <span
            onClick={sort1}
            className={`${
              useFilter1
                ? "text-[#3a7cfd]"
                : props.darkMode
                ? "text-[#5b5e7e]"
                : "text-[#9495a5]"
            } text-sm font-[700] tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
          >
            All
          </span>
          <span
            onClick={sort2}
            className={`${
              useFilter2
                ? "text-[#3a7cfd]"
                : props.darkMode
                ? "text-[#5b5e7e]"
                : "text-[#9495a5]"
            } text-sm font-[700] tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
          >
            Active
          </span>
          <span
            onClick={sort3}
            className={`${
              useFilter3
                ? "text-[#3a7cfd]"
                : props.darkMode
                ? "text-[#5b5e7e]"
                : "text-[#9495a5]"
            } text-sm font-[700] tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]`}
          >
            Completed
          </span>
        </div>
        <footer
          className={`${
            props.darkMode ? "text-[#5b5e7e]" : "text-[#9495a5]"
          } text-sm font-[500] tracking-[-0.19px] text-center mt-10 lg:mt-[49px] mb-8 lg:mb-10`}
        >
          Drag and drop to reorder list
        </footer>
      </div>
    </div>
  );
}

export default List;
