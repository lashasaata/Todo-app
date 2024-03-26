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
  return (
    <main className="w-[327px] rounded-[5px] bg-white shadow-mainShadow mt-[16px] flex flex-col items-center">
      {[...props.useFilter].map((e) => {
        return (
          <div
            key={e.id}
            className="w-[327px] flex items-center justify-between px-5 py-4 border-b border-solid border-[#e3e4f1] "
          >
            <div className="flex items-center gap-[12px]">
              <div
                onClick={() => complite(e.id)}
                className={`${
                  e.complited
                    ? "bg-gradient-to-br from-[#5df] to-[#c058f3]"
                    : "bg-white border border-solid border-slate-200"
                } w-5 h-5 rounded-full flex justify-center items-center`}
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
                } text-xs tracking-[-0.17px]`}
              >
                {e.toDo}
              </p>
            </div>
            <button onClick={() => deleteToDo(e.id)}>
              <img
                key={e.id}
                className="w-3 h-3"
                src="./images/icon-cross.svg"
                alt="cross_icon"
              />
            </button>
          </div>
        );
      })}
      <div className="w-[327px] flex justify-center pt-4 pb-5">
        <div className="w-[287px] flex items-center justify-between">
          <p className="text-xs text-[#9495a5] font-[500] tracking-[-0.17px]">
            <span>{props.useFilter.length} </span>items left
          </p>
          <span
            onClick={clearComplited}
            className="text-xs text-[#9495a5] font-[500] tracking-[-0.17px]"
          >
            Clear Completed
          </span>
        </div>
      </div>
    </main>
  );
}

export default List;
