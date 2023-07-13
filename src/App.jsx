import FormInputRow from "./components/FormInputRow";

function App() {
  const handleSubmit = (e) => {
    e.prevenetDefault();
  };

  const handleChange = () => {};

  return (
    <main className="h-screen grid grid-cols-1  content-center bg-nLightGrey">
      <section className="w-vw mx-auto p-6 rounded-t-2xl rounded-bl-2xl rounded-br-[5rem] bg-nWhite md:w-fixed">
        <form onSubmit={handleSubmit}>
          <div className=" flex gap-4 ">
            <FormInputRow
              labelText={"day"}
              name={"day"}
              handleChange={handleChange}
              value={24}
            />
            <FormInputRow
              labelText={"month"}
              name={"month"}
              handleChange={handleChange}
              value={7}
            />
            <FormInputRow
              labelText={"year"}
              name={"year"}
              handleChange={handleChange}
              value={1999}
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
