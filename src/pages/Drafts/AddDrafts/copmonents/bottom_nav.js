function BottomNav({ onPrevious, onNext, padding, disabled = true }) {
  return (
    <div className={padding ? "px-4" : ""}>
      <div className="py-2 flex gap-10 justify-between">
        <button onClick={onPrevious} className="p-[18px]">
          Previous
        </button>
        <button
          disabled={disabled}
          onClick={onNext}
          className={`${
            disabled ? "bg-neutral-300 text-neutral-50" : "continue-button"
          } p-[18px] w-[150px] text-neutral-50 font-lato text-[16px] rounded-[18px]`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
