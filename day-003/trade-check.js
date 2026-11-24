const entryPrice = 3200;
const exitPrice = 3200;
const quantity = 2;
const side = "long";

let pnl = 0;

if (side === "long") {
  pnl = (exitPrice - entryPrice) * quantity;
} else if (side === "short") {
  pnl = (entryPrice - exitPrice) * quantity;
} else {
  console.log("Invalid trade direction");
}

console.log("Gross PnL:", pnl);

if (pnl > 0) {
  console.log("Trade Result: PROFIT");
} else if (pnl < 0) {
  console.log("Trade Result: LOSS");
} else {
  console.log("Trade Result: BREAKEVEN");
}