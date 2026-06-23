function generateReport(metrics) {
 return metrics.map(row => `${row.page}: ${row.visits}`) .join("\n");
}

function totalVisits(metrics) {
 return metrics.reduce( (total, row) => total + row.visits, 0 );
}

module.exports = {
 generateReport,
 totalVisits
}
