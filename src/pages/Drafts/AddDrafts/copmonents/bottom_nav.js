function BottomNav({ onPrevious, onNext, padding }) {
  return (
    <div className={padding ? "px-4" : ""}>
      <div className="py-2 flex gap-10 justify-between">
        <button onClick={onPrevious}>Previous</button>
        <button
          onClick={onNext}
          className="continue-button p-[18px] w-[150px] text-neutral-50 font-lato text-[16px] rounded-[18px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
