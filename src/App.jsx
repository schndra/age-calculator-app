import { useState } from "react";
import FormInputRow from "./components/FormInputRow";
import IconArrow from "./assets/icon-arrow.svg";

const state = {
  day: "",
  month: "",
  year: "",
};

const errorState = {
  isError: false,
  errorValue: "",
};

function App() {
  const [value, setValue] = useState(state);
  const [isDayError, setIsDayError] = useState(errorState);
  const [isMonthError, setIsMonthError] = useState(errorState);
  const [isYearError, setIsYearError] = useState(errorState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { day, month, year } = value;

    if (!day) {
      setIsDayError({ isError: true, errorValue: "This field is required" });
    }
    if (!month) {
      setIsMonthError({ isError: true, errorValue: "This field is required" });
    }
    if (!year) {
      setIsYearError({ isError: true, errorValue: "This field is required" });
    }

    const currDate = new Date();
    const currDay = currDate.getDate();
    const currMonth = currDate.getMonth();
    const currYear = currDate.getUTCFullYear();

    if (day > 31) {
      setIsDayError({ isError: true, errorValue: "Must be a valid day" });
      setIsMonthError({ ...isMonthError, isError: true });
      setIsYearError({ ...isYearError, isError: true });
      return;
    }
    if (month > 12) {
      setIsMonthError({ isError: true, errorValue: "Must be a valid month" });
      setIsDayError({ isError: true });
      setIsYearError({ isError: true });
      return;
    }
    if (year > currYear) {
      setIsYearError({ isError: true, errorValue: "must be in past" });
      setIsDayError({ isError: true });
      setIsMonthError({ isError: true });
      return;
    }

    setIsDayError({ isError: false, errorValue: "" });
    setIsYearError({ isError: false, errorValue: "" });
    setIsMonthError({ isError: false, errorValue: "" });

    console.log(currDay, currMonth, currYear);
    // console.log(value);
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
            <div>
              <FormInputRow
                labelText={"day"}
                name={"day"}
                handleChange={handleChange}
                value={value.day}
                placeHolder={"DD"}
                {...isDayError}
              />
              <p></p>
            </div>
            <div>
              <FormInputRow
                labelText={"month"}
                name={"month"}
                handleChange={handleChange}
                value={value.month}
                placeHolder={"MM"}
                {...isMonthError}
              />
            </div>
            <div>
              <FormInputRow
                labelText={"year"}
                name={"year"}
                handleChange={handleChange}
                value={value.year}
                placeHolder={"YYYY"}
                {...isYearError}
              />
            </div>
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
