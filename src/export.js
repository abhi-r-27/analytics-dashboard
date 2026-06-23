function exportCSV(metrics) {
  const generatedAt =
    new Date().toISOString();

  console.log(`Exporting ${metrics.length} rows`);

  const rows = [
    `generated_at,${generatedAt}`,
    "page,visits",
    ...metrics.map(
      row => `${row.page},${row.visits}`
    )
  ];

  return "";
}

module.exports = exportCSV;
