function Filter() {
  return (
    <div>
      <div className="w-[327px] rounded-[5px] bg-white shadow-mainShadow flex justify-center gap-[18.5px] pt-[15px] pb-[19px] mt-4">
        <span className="text-sm text-[#9495a5] font-[700] tracking-[-0.19px]">
          All
        </span>
        <span className="text-sm text-[#9495a5] font-[700] tracking-[-0.19px]">
          Active
        </span>
        <span className="text-sm text-[#9495a5] font-[700] tracking-[-0.19px]">
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
