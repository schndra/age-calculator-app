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
  const [calcAge, setCalcAge] = useState(state);
  const [isDayError, setIsDayError] = useState(errorState);
  const [isMonthError, setIsMonthError] = useState(errorState);
  const [isYearError, setIsYearError] = useState(errorState);
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { day, month, year } = value;

    //current date
    const currDate = new Date();
    const currYear = currDate.getUTCFullYear();
    const currMonth = currDate.getMonth();
    const currDay = currDate.getDate();

    if (!day && !month && !year) {
      setIsDayError({ isError: true, errorValue: "This field is required" });
      setIsMonthError({ isError: true, errorValue: "This field is required" });
      setIsYearError({ isError: true, errorValue: "This field is required" });
      return;
    }

    if (day > 31) {
      setIsDayError({ isError: true, errorValue: "Must be a valid day" });
      setIsMonthError({ ...isMonthError, isError: true });
      setIsYearError({ ...isYearError, isError: true });
      return;
    }
    if (month > 11) {
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

    //date of birth
    const dob = new Date(year, month - 1, day);
    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDay = dob.getDate();
    console.log(dobYear, dobMonth, dobDay);

    let ageYear = currYear - dobYear;
    let ageMonth;
    let ageDay;

    if (currMonth >= dobMonth) {
      ageMonth = currMonth - dobMonth;
    } else {
      ageYear -= 1;
      ageMonth = currMonth + 12 - dobMonth;
    }

    if (currDay >= dobDay) {
      ageDay = currDay - dobDay;
    } else {
      ageMonth -= 1;
      ageDay = 31 + currDay - dobDay;
      if (ageMonth < 0) {
        ageMonth = 11;
        ageYear -= 1;
      }
    }

    setCalcAge({
      year: ageYear,
      month: ageMonth,
      day: ageDay,
    });

    setIsDayError({ isError: false, errorValue: "" });
    setIsYearError({ isError: false, errorValue: "" });
    setIsMonthError({ isError: false, errorValue: "" });
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
              className="w-16 h-16 bg-primaryPurple rounded-full flex items-center justify-center absolute hover:bg-nOffBlack"
            >
              <img src={IconArrow} alt="" className="w-6" />
            </button>
          </div>
        </form>
        <div className="text-5xl italic font-bold">
          <h1>
            <span className="text-primaryPurple pr-2">
              {!calcAge.year ? "--" : calcAge.year}
            </span>
            years
          </h1>
          <h1>
            <span className="text-primaryPurple pr-2 ">
              {!calcAge.month ? "--" : calcAge.month}
            </span>
            months
          </h1>
          <h1>
            <span className="text-primaryPurple pr-2">
              {!calcAge.day ? "--" : calcAge.day}
            </span>
            days
          </h1>
        </div>
      </section>
    </main>
  );
}

export default App;
