/* eslint-disable react/prop-types */
const FormInputRow = ({
  labelText,
  name,
  value,
  handleChange,
  placeHolder,
  isError,
  errorValue,
}) => {
  // console.log(isError);
  return (
    <div className="flex flex-col    ">
      <label
        htmlFor={name}
        className={`${
          isError
            ? "text-primaryLightRed tracking-[0.125em] text-xs uppercase"
            : "text-nSmokeyGreye tracking-[0.125em] text-xs uppercase"
        }`}
      >
        {labelText}
      </label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        className={`${
          isError
            ? "p-4 border border-primaryLightRed rounded-md text-base w-full uppercase"
            : "p-4 border border-nLightGrey rounded-md text-base w-full uppercase"
        }`}
      />
      {isError && (
        <p className="text-primaryLightRed text-xs italic mt-2">{errorValue}</p>
      )}
    </div>
  );
};
export default FormInputRow;
