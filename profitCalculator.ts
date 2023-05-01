import commaFormatted from "./commaFormatted";
const HUNDRED_PERCENT = 100;
const MONTH_PER_YEAR = 12;

function calculateProfit(
  initialAmount: number,
  profitPercent: number,
  duration: number
) {
  let result = initialAmount;

  for (let i = 1; i <= duration; i++) {
    const singleMonthProfit =
      (result * profitPercent) / HUNDRED_PERCENT / MONTH_PER_YEAR;
    result += singleMonthProfit;

    console.log(
      `${i > 9 ? i : "0" + i}:>> Profit: ${commaFormatted(
        Math.trunc(singleMonthProfit)
      )} - Total: ${commaFormatted(Math.trunc(result))}`
    );
  }
}
// ------------------
// Main
const initialAmount: number = 75_000_000;
const profitPercent: number = 21; // 0 - 100
const duration: number = 12; // months

calculateProfit(initialAmount, profitPercent, duration);
