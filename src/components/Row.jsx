export default function Row({ data }) {
  return (
    <>
      <tr>
        <td>{data.year}</td>
        <td>{data.interest}</td>
        <td>{data.valueEndOfYear}</td>
        <td>{data.annualInvestment}</td>
      </tr>
    </>
  );
}
