/**
 * Chronos Button Component
 * @param {String} text
 * @param {Function} onClick
 * @param {Boolean} primary
 * @param {Boolean} secondary
 * @param {Boolean} tertiary
 * @returns
 */

function ChronosButton({
  text = "Add",
  onClick,
  primary,
  secondary,
  tertiary,
  icon,
  loader,
  reverseIcon,
  disabled,
  red,
  underline,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`py-2.5 flex flex-row items-center justify-center ${
        tertiary ? "px-0" : "px-4"
      } ${underline ? "underline underline-offset-2" : ""} ${
        primary
          ? "primary-cta"
          : secondary
          ? "secondary-cta"
          : tertiary
          ? red
            ? "tertiary-red-cta"
            : "tertiary-cta"
          : "text-white font-medium bg-primary-indigo-650 border border-primary-indigo-650  py-2.5 px-3.5 inter rounded-10px secondary-shadow text-sm leading-4 cursor-pointer transition ease-in-out duration-150 hover:scale-105"
      } `}
    >
      <p
        className={`flex ${reverseIcon ? "flex-row-reverse" : ""} items-center`}
      >
        {text} {icon && icon}
      </p>
      {loader && (
        <div className="w-4 h-4 bg-transparent border-white border-2 rounded-full border-t-0 animate-spin ml-2" />
      )}
    </button>
  );
}

export default ChronosButton;
