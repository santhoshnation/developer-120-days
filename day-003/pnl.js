const entryPrice = 3200;
const exitPrice = 3040;
const quantity = 2;
const leverage = 5;

const notional = entryPrice * quantity;
const margin = notional / leverage;
const pnl = (entryPrice - exitPrice) * quantity;
const roe = (pnl / margin) * 100;

console.log("ETH SHORT POSITION");
console.log("Notional:", notional);
console.log("Initial Margin:", margin);
console.log("Gross PnL:", pnl);
console.log("Gross ROE:", roe.toFixed(2) + "%");