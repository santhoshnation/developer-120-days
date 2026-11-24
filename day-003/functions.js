function checkTradeRisk(leverage, notional, availableMargin) {
  const maxLeverage = 10;
  const maxNotional = 1000;

  if (!Number.isFinite(leverage) || leverage <= 0) {
    return "REJECTED: Invalid leverage";
  }

  if (!Number.isFinite(notional) || notional <= 0) {
    return "REJECTED: Invalid notional";
  }

  if (!Number.isFinite(availableMargin) || availableMargin < 0) {
    return "REJECTED: Invalid available margin";
  }

  const requiredMargin = notional / leverage;

  if (leverage > maxLeverage) {
    return "REJECTED: Leverage too high";
  }

  if (notional > maxNotional) {
    return "REJECTED: Position too large";
  }

  if (requiredMargin > availableMargin) {
    return "REJECTED: Insufficient margin";
  }

  return "APPROVED: Basic risk checks passed";
}

console.log(checkTradeRisk(5, 500, 100));
console.log(checkTradeRisk(25, 500, 100));
console.log(checkTradeRisk(5, 1500, 100));
console.log(checkTradeRisk(5, 750, 100));
console.log(checkTradeRisk(0, 500, 100));
console.log(checkTradeRisk(10, 800, 50));