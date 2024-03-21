import "./Creator.css";
function Creator() {
  return (
    <div className="absolute mt-12">
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
        <input
          type="checkBox"
          className="appearance-none w-5 h-5 rounded-full border border-solid border-slate-200 checked:bg-[url('./images/icon-check')] checked:bg-gradient-to-br from-[#5df] to-[#c058f3]"
        />
        <input
          type="text"
          placeholder="Create a new todo…"
          className="outline-none placeholder:text-xs placeholder:text-[#9495a5] placeholder:font-[500] placeholder:leading-[-0.17px]"
        />
      </div>
    </div>
  );
}

export default Creator;
