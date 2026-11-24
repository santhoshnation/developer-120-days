const maxLeverage = 10;
const maxNotional = 1000;
const availableMargin = 100;

const tradeLeverage = 0;
const tradeNotional = 500;

if (!Number.isFinite(tradeLeverage) || tradeLeverage <= 0) {
  console.log("REJECTED: Invalid leverage");
} else if (!Number.isFinite(tradeNotional) || tradeNotional <= 0) {
  console.log("REJECTED: Invalid notional");
} else {
  const requiredMargin = tradeNotional / tradeLeverage;

  if (tradeLeverage > maxLeverage) {
    console.log("REJECTED: Leverage too high");
  } else if (tradeNotional > maxNotional) {
    console.log("REJECTED: Position too large");
  } else if (requiredMargin > availableMargin) {
    console.log("REJECTED: Insufficient margin");
  } else {
    console.log("APPROVED: Basic risk checks passed");
  }

  console.log("Required Margin:", requiredMargin);
}