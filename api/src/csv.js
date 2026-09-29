// Same format as the csv-express package we used before: a header row, numbers
// (including numeric strings) unquoted, everything else quoted, CRLF line endings.
function escape(value) {
  if (value === null || value === undefined) return ''
  if (/^[-+]?\d+(\.\d+)?$/.test(value)) return Number(value)
  return `"${String(value).replace(/"/g, '""')}"`
}

export default function toCSV(rows) {
  if (rows.length === 0) return ''
  const columns = Object.keys(rows[0])
  const lines = [
    columns.join(','),
    ...rows.map(row => columns.map(column => escape(row[column])).join(',')),
  ]
  return lines.map(line => line + '\r\n').join('')
}
