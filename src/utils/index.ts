export function shortenLargeNumber(num: number, digits: number) {
  const units = ["k", "M", "B", "T"];
  let decimal: number;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
}
