function ComparisonTable({ columns = [], rows = [] }) {
  if (!columns.length || !rows.length) {
    return null
  }

  return (
    <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/50">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-200/[0.85]">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.22em] text-cyan-100/70">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`} className="border-t border-white/10">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${columns[cellIndex]}-${rowIndex}`}
                    className={`px-5 py-4 align-top leading-7 ${
                      cellIndex === 0 ? "text-white" : "text-slate-300/[0.85]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonTable
