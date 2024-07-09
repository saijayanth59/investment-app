import { calculateInvestmentResults } from "../util/investment";
import Row from "./Row";
export default function Results({ values }) {
  const result = calculateInvestmentResults({
    initialInvestment: values[0],
    annualInvestment: values[1],
    expectedReturn: values[2],
    duration: values[3],
  });
  console.log(result);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Interest(Year)</th>
            <th>Total</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((curr) => (
            <Row data={curr} />
          ))}
        </tbody>
      </table>
    </>
  );
}
