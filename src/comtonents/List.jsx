import Filter from "./Filter";

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

  const divHoverHandler = () => {};
  return (
    <main className="w-[327px] lg:w-[540px] rounded-[5px] bg-white shadow-mainShadow mt-[16px] lg:mt-6 flex flex-col items-center">
      {[...props.useFilter].map((e) => {
        return (
          <div
            key={e.id}
            onMouseEnter={divHoverHandler}
            className="w-[327px] lg:w-[540px] flex items-center justify-between px-5 lg:px-6 py-4 lg:py-5 border-b border-solid border-[#e3e4f1]  hover:cursor-pointer"
          >
            <div className="flex items-center gap-[12px]">
              <div
                onClick={() => complite(e.id)}
                className={`${
                  e.complited
                    ? "bg-gradient-to-br from-[#5df] to-[#c058f3]"
                    : "bg-white border border-solid border-[#e3e4f1]"
                } w-5 lg:w-6 h-5 lg:h-6 rounded-full flex justify-center items-center hover:cursor-ponter hover:border-[#55ddff]`}
              >
                {e.complited ? (
                  <img src="./images/icon-check.svg" alt="check_icon" />
                ) : (
                  ""
                )}
              </div>
              <p
                className={`${
                  e.complited ? "text-[#d1d2da] line-through" : "text-[#494c6b]"
                } text-xs lg:text-lg tracking-[-0.17px] lg:tracking-[-0.25px] lg:leading-[18px] lg:mt-[-4px]`}
              >
                {e.toDo}
              </p>
            </div>
            <button onClick={() => deleteToDo(e.id)}>
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
          <p className="text-xs lg:text-sm text-[#9495a5] font-[500] tracking-[-0.17px] lg:tracking-[-0.19px]">
            <span>{props.useFilter.length} </span>items left
          </p>

          <span
            onClick={clearComplited}
            className="text-xs lg:text-sm text-[#9495a5] font-[500] tracking-[-0.17px] lg:tracking-[-0.19px] hover:cursor-pointer hover:text-[#494c6b]"
          >
            Clear Completed
          </span>
        </div>
      </div>
    </main>
  );
}

export default List;
