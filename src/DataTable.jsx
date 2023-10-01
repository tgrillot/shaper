export default function DataTable({ data }) {
    return (
      <table className="w-full rounded-lg">
        <thead className="text-left bg-cyan-950 text-white">
          <tr>
            <th className="p-2">Shape</th>
            <th className="p-2">Measurement</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>
        <tbody>
            {data.map((row) => {
                return (
                <tr key={row[0] + row[1]} className="border-b border-cyan-950">
                    <td className="p-2">
                        {row[0]}
                    </td>
                    <td className="p-2">
                        {row[1]}
                    </td>
                    <td className="p-2">
                        {row[2]}
                    </td>
                </tr>
            )})}
        </tbody>
      </table>
    )
  }