import React from "react";

interface TableRow {
  [key: string]: string;
}

interface TableSectionProps {
  title: string;
  headers: string[];
  rows: TableRow[];
  note?: string;
}

const AppTable: React.FC<TableSectionProps> = ({
  title,
  headers,
  rows,
  note,
}) => {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border p-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="border p-2">
                  {row[header] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && <p className="mt-2 text-sm">{note}</p>}
    </div>
  );
};

export default AppTable;
