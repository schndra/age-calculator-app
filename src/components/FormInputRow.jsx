/* eslint-disable react/prop-types */
const FormInputRow = ({
  labelText,
  name,
  value,
  handleChange,
  placeHolder,
}) => {
  return (
    <div className="flex flex-col  uppercase  ">
      <label
        htmlFor={name}
        className="text-nSmokeyGreye tracking-[0.125em] text-xs"
      >
        {labelText}
      </label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        className="p-4 border border-nLightGrey rounded-md text-base w-full "
      />
    </div>
  );
};
export default FormInputRow;
