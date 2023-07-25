import { useState } from "react";
import FormInputRow from "./components/FormInputRow";
import IconArrow from "./assets/icon-arrow.svg";

const state = {
  day: "",
  month: "",
  year: "",
};

function App() {
  const [value, setValue] = useState(state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { day, month, year } = value;
    console.log(value);
  };

  const handleChange = (e) => {
    // console.log(e.target);
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <main className="h-screen grid grid-cols-1  content-center bg-nLightGrey">
      <section className="w-vw mx-auto p-6 rounded-t-2xl rounded-bl-2xl rounded-br-[5rem] bg-nWhite md:w-[850px]">
        <form onSubmit={handleSubmit}>
          <div className=" flex gap-4 md:w-fixed">
            <FormInputRow
              labelText={"day"}
              name={"day"}
              handleChange={handleChange}
              value={value.day}
              placeHolder={"DD"}
            />
            <FormInputRow
              labelText={"month"}
              name={"month"}
              handleChange={handleChange}
              value={value.month}
              placeHolder={"MM"}
            />
            <FormInputRow
              labelText={"year"}
              name={"year"}
              handleChange={handleChange}
              value={value.year}
              placeHolder={"YYYY"}
            />
          </div>

          <div className="my-16 relative flex items-center justify-center md:justify-end">
            <hr className="h-px  bg-nLightGrey border-0 w-full" />
            <button
              type="submit"
              className="w-16 h-16 bg-primaryPurple rounded-full flex items-center justify-center absolute"
            >
              <img src={IconArrow} alt="" className="w-6" />
            </button>
          </div>
        </form>
        <div className="text-5xl italic font-bold">
          <h1>
            <span className="text-primaryPurple pr-2">
              {!value.year ? "--" : value.year}
            </span>
            years
          </h1>
          <h1>
            <span className="text-primaryPurple pr-2 ">
              {!value.month ? "--" : value.month}
            </span>
            months
          </h1>
          <h1>
            <span className="text-primaryPurple pr-2">
              {!value.day ? "--" : value.day}
            </span>
            days
          </h1>
        </div>
      </section>
    </main>
  );
}

export default App;
