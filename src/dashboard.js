const metrics = require("./metrics");
const {
  generateReport,
  totalVisits
} = require("./report");

console.log(generateReport(metrics));
console.log(metrics);

console.log();
console.log(
  `Total Visits: ${totalVisits(metrics)}`
);
console.log("Analytics Dashboard");
