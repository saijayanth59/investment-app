import Input from "./Input";

// const INITIAL_VALUES = {
//   initial: 0,
//   annual: 0,
//   returns: 0,
//   duration: 0,
// };
const names = [
  "INITIAL INVESTMENT",
  "ANNUAL INVESTMENT",
  "EXPECTED RETURN",
  "DURATION",
];

export default function Inputs({ values, changeHandler }) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <Input
            name={names[0]}
            changeHandler={changeHandler}
            pos={0}
            value={values[0]}
          />
          <Input
            name={names[1]}
            changeHandler={changeHandler}
            pos={1}
            value={values[1]}
          />
        </div>
        <div className="input-group">
          <Input
            name={names[2]}
            changeHandler={changeHandler}
            pos={2}
            value={values[2]}
          />
          <Input
            name={names[3]}
            changeHandler={changeHandler}
            pos={3}
            value={values[3]}
          />
        </div>
      </div>
    </>
  );
}
