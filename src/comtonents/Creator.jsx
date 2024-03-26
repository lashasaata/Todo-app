import { useState } from "react";
import "./Creator.css";

function Creator(props) {
  const [useButton, setUseButton] = useState(false);
  const compliteHandler = () => {
    setUseButton(!useButton);
  };
  const [useInput, setUseInput] = useState();

  const inputHAndler = (e) => {
    setUseInput(e.target.value);
  };

  const handleEnter = (e) => {
    let index = Math.floor(Math.random() * 10000);
    if (e.key === `Enter` && useInput != null && useInput != "") {
      const newToDO = {
        complited: useButton,
        toDo: useInput,
        id: index,
      };
      e.target.value = "";
      setUseInput("");
      setUseButton(false);
      props.setUseToDo([...props.useToDo, newToDO]);
    }
  };
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-[20px] font-[700] tracking-[14px]">
          TODO
        </h1>
        <img
          src={`./images/icon-moon.svg`}
          alt="moon_icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-[327px] h-[48px] rounded-[5px] bg-white pl-[20px] flex items-center gap-[12px] mt-10 shadow-creatorShadow">
        <button
          onClick={compliteHandler}
          className={`${
            useButton
              ? "bg-gradient-to-br from-[#5df] to-[#c058f3]"
              : "bg-white border border-solid border-slate-200"
          } w-5 h-5 rounded-full flex justify-center items-center`}
        >
          {useButton ? (
            <img src="./images/icon-check.svg" alt="check_icon" />
          ) : (
            ""
          )}
        </button>
        <input
          onChange={inputHAndler}
          onKeyDown={handleEnter}
          type="text"
          placeholder="Create a new todo…"
          className="outline-none text-xs text-[#393a4b] font-[500] tracking-[-0.25px] w-[250px] placeholder:text-xs placeholder:text-[#9495a5] placeholder:font-[500] placeholder:leading-[-0.17px] "
        />
      </div>
    </div>
  );
}

export default Creator;
