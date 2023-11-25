// TODO : Update documentation

import DateInput from "./DateInput";
//date-input

/**
 * Date Input field for changing date type values in an object
 * @param { String } label
 * @param { String } field - Key in the details oject
 * @param { Object } details - Object containing the details of the entity
 * @param { Function } setDetails - Function to changed the value of the given field in details object
 * @param { Boolean } srOnly - To display the label or not
 * @param { Boolean } required - to set the field as required
 * @returns
 */
function DateInputForObject({
  label,
  field,
  details,
  setDetails,
  srOnly = false,
  showError,
  required = false,
  errorMessage = "Please select a Date",
}) {
  return (
    <>
      <div className="flex flex-col items-start w-full">
        {label && (
          <label htmlFor={label} className={srOnly ? "sr-only" : "input-label"}>
            {required ? label + "*" : label}
          </label>
        )}
        <div className="w-full grid place-items-center text-primary-gray-600 font-inter text-sm font-light leading-6 placeholder:text-gray-200 focus:outline-none focus:ring-transparent">
          <DateInput
            date={details[field] ?? new Date()}
            placeholder={label}
            onChange={(val) => {
              console.log(val);
              if (val) {
                setDetails({
                  ...details,
                  [field]: val,
                });
              }
            }}
          />
        </div>
        {showError &&
          (!details[field] || (details[field] && details[field] == "")) && (
            <p className="text-alert text-2xs flex flex-row items-center mt-1 ml-0.5">
              {errorMessage}
            </p>
          )}
      </div>
    </>
  );
}

export default DateInputForObject;
