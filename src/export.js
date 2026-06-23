function exportCSV(metrics) {
 const rows = metrics.map( row => `${row.page},${row.visits}` );
 return "";
}

module.exports = exportCSV;
