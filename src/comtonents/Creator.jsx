import { useState } from "react";

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
    <div className="mt-10 lg:mt-[70px]">
      <div className="flex items-center justify-between lg:justify-end lg:relative lg:h-[48px]">
        <h1 className="text-white text-[20px] lg:text-[40px] font-[700] tracking-[14px] lg:tracking-[15px] lg:leading-[40px] lg:absolute lg:top-0 lg:left-0">
          TODO
        </h1>
        <img
          src={`./images/icon-moon.svg`}
          alt="moon_icon"
          className="w-[20px] lg:w-[25px] h-[20px] lg:h-[26px]"
        />
      </div>
      <div className="w-[327px] lg:w-[540px] h-[48px] lg:h-[64px] rounded-[5px] bg-white pl-[20px] lg:pl-[24px] flex items-center gap-[12px] lg:gap-[24px] mt-10 shadow-creatorShadow">
        <button
          onClick={compliteHandler}
          className={`${
            useButton
              ? "bg-gradient-to-br from-[#5df] to-[#c058f3]"
              : "bg-white border border-solid border-[#e3e4f1]"
          } w-5 lg:w-6 h-5 lg:h-6 rounded-full flex justify-center items-center hover:cursor-pointer hover:border-[#55ddff]`}
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
          className="outline-none text-xs lg:text-lg text-[#393a4b] font-[500] tracking-[-0.25px] w-[250px] lg:w-[400px] caret-[#3a7cfd] placeholder:text-xs lg:placeholder:text-lg placeholder:text-[#9495a5] placeholder:font-[500] placeholder:tracking-[-0.17px] lg:placeholder:tracking-[-0.25px] "
        />
      </div>
    </div>
  );
}

export default Creator;
