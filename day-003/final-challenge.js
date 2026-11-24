function calculateTrade(entryPrice, exitPrice, quantity, leverage, side) {
  // 1. Validate inputs
  const nums = [entryPrice, exitPrice, quantity, leverage];
  if (nums.some(n => !Number.isFinite(n) || n <= 0)) {
    return { error: "Invalid trade inputs" };
  }
  if (side !== "long" && side !== "short") {
    return { error: "Invalid trade inputs" };
  }

  // 2. Notional
  const notional = entryPrice * quantity;

  // 3. Initial margin
  const margin = notional / leverage;

  // 4. Gross PnL
  const pnl = side === "long"
    ? (exitPrice - entryPrice) * quantity
    : (entryPrice - exitPrice) * quantity;

  // 5. Gross ROE (as percentage)
  const roe = (pnl / margin) * 100;

  return { notional, margin, pnl, roe };
}   
console.log(calculateTrade(95000, 97000, 0.1, 10, "long"));
console.log(calculateTrade(3200, 3040, 2, 5, "short"));
console.log(calculateTrade(100, 90, 1, 2, "long"));
console.log(calculateTrade(100, 110, 1, 0, "long"));
console.log(calculateTrade(100, 110, 1, 5, "buy"));
