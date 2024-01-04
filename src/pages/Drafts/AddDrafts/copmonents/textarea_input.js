function TextAreaInput({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  pluspoint = false,
}) {
  return (
    <div>
      <div className="flex w-full justify-between items-center mb-4">
        <div className="flex gap-4">
          <h3 className="font-lato font-semibold text-sm text-neutral-500">
            {label} {required === true ? "*" : ""}
          </h3>
          {pluspoint ? (
            <img src="/assets/svg/pages/drafts/pluspoint.svg" />
          ) : (
            <></>
          )}
        </div>
        <p className="flex justify-center items-center w-5 h-5 font-inter font-semibold text-neutral-300 border-[1px] border-neutral-300 rounded-full text-xs">
          ?
        </p>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        type=""
        placeholder={placeholder}
        className="h-[120px] text-black text-sm font-light font-lato leading-[150%] tracking-tightfont-lato w-full p-4 border-[1px] border-neutral-300 bg-gray-50 rounded outline-none placeholder:text-neutral-300 placeholder:font-light"
      />
    </div>
  );
}

export default TextAreaInput;
