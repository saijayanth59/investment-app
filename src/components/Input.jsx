export default function Input({ name, pos, changeHandler, value }) {
  return (
    <>
      <div>
        <label htmlFor="">{name}</label>
        <input
          type="number"
          min="1"
          max="100000"
          name=""
          id=""
          value={value}
          onChange={(e) => changeHandler(pos, e.target.value)}
        />
      </div>
    </>
  );
}
