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

  const themeHandler = () => {
    props.setDarkMode(!props.darkMode);
  };
  return (
    <div className="mt-10 lg:mt-[70px]">
      <div className="flex items-center justify-between lg:justify-end lg:relative lg:h-[48px]">
        <h1 className="text-white text-[20px] lg:text-[40px] font-[700] tracking-[14px] lg:tracking-[15px] lg:leading-[40px] lg:absolute lg:top-0 lg:left-0">
          TODO
        </h1>
        {props.darkMode ? (
          <img
            onClick={themeHandler}
            src={`./images/icon-sun.svg`}
            alt="moon_icon"
            className="w-[20px] lg:w-[25px] h-[20px] lg:h-[26px] hover:cursor-pointer"
          />
        ) : (
          <img
            onClick={themeHandler}
            src={`./images/icon-moon.svg`}
            alt="moon_icon"
            className="w-[20px] lg:w-[25px] h-[20px] lg:h-[26px] hover:cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${
          props.darkMode
            ? "bg-[#25273d] shadow-dark"
            : "bg-white shadow-creatorShadow"
        } w-[327px] lg:w-[540px] h-[48px] lg:h-[64px] rounded-[5px] pl-[20px] lg:pl-[24px] flex items-center gap-[12px] lg:gap-[24px] mt-10`}
      >
        <button
          onClick={compliteHandler}
          className={`${
            useButton
              ? "bg-gradient-to-br from-[#5df] to-[#c058f3]"
              : !props.darkMode
              ? "bg-white border border-solid border-[#e3e4f1]"
              : "bg-[#25273d] border border-solid border-[#393a4b]"
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
          className={`${
            props.darkMode
              ? "placeholder:text-[#767992] bg-[#25273d] text-[#c8cbe7]"
              : "placeholder:text-[#9495a5] bg-white text-[#393a4b]"
          } outline-none text-xs lg:text-lg font-[500] tracking-[-0.25px] w-[250px] lg:w-[400px] caret-[#3a7cfd] placeholder:text-xs lg:placeholder:text-lg placeholder:font-[500] placeholder:tracking-[-0.17px] lg:placeholder:tracking-[-0.25px]`}
        />
      </div>
    </div>
  );
}

export default Creator;
