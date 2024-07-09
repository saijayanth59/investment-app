import Header from "./components/Header";
import Inputs from "./components/Inputs";
import { useState } from "react";
import Results from "./components/Results";

const INITIAL_VALUES = [100, 100, 3, 5];

function App() {
  const [values, updateValues] = useState(INITIAL_VALUES);

  function handleInputs(key, value) {
    updateValues((prev) => {
      let valuesCopy = structuredClone(prev);
      valuesCopy[key] = parseInt(value);
      return valuesCopy;
    });
  }
  console.log(values);
  return (
    <>
      {/* Header */}
      <Header />
      {/* input fields */}
      <Inputs values={values} changeHandler={handleInputs} />
      {/* results */}
      <Results values={values} />
    </>
  );
}

export default App;
