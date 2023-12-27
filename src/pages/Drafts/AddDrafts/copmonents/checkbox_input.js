export default function CheckBoxInput({ text, onChange }) {
  return (
    <div className="flex gap-3 w-full justify-center items-center">
      <h3 className="font-lato font-semibold text-neutral-400">
        {text}
      </h3>
      <input type="checkbox" onChange={onChange}/>
    </div>
  );
}
