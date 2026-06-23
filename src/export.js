function exportCSV(metrics) {
 const rows = metrics.map( row => `${row.page},${row.visits}` );
 return rows.join("\n");
}

module.exports = exportCSV;
