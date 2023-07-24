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
            />
            <FormInputRow
              labelText={"month"}
              name={"month"}
              handleChange={handleChange}
              value={value.month}
            />
            <FormInputRow
              labelText={"year"}
              name={"year"}
              handleChange={handleChange}
              value={value.year}
            />
          </div>

          <div className="my-20 relative flex items-center justify-center md:justify-end">
            <hr className="h-px  bg-nLightGrey border-0 w-full" />
            <button
              type="submit"
              className="w-16 h-16 bg-primaryPurple rounded-full flex items-center justify-center absolute"
            >
              <img src={IconArrow} alt="" className="w-6" />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
