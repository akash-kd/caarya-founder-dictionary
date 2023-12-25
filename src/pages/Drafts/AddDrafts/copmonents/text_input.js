function TextInput({ label, placeholder,value, required = false, onChange, error }) {
  return (
    <div>
      <div className="flex w-full justify-between items-center mb-3">
        <h3 className="font-lato font-semibold text-sm text-neutral-500">
          {label} {required === true ? "*" : ""}
        </h3>
        <p className="flex justify-center items-center w-5 h-5 font-inter font-semibold text-neutral-300 border-[1px] border-neutral-300 rounded-full text-xs">
          ?
        </p>
      </div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="font-lato font-semibold text-xl w-full border-0 border-b-2 border-neutral-200 placeholder:text-neutral-300"
      />
      <p className="text-red-500 font-lato font-semibold text-xs my-2">
        {error}
      </p>
    </div>
  );
}

export default TextInput;
