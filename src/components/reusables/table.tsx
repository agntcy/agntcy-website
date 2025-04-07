// components/Table.tsx
import React from "react";

interface TableProps {
  headers: string[];
  data: Array<{ [key: string]: string | number }>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="ml-56 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0">
      <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%", borderRadius: "20px" }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={{ border: "1px solid black", borderColor:"white", verticalAlign: "top", textAlign: "left", padding: "8px", color: "white", fontWeight: "bold", backgroundColor: "#187ADC", paddingTop: "12px", paddingBottom: "12px", paddingLeft: "12px", paddingRight: "12px" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} style={{ border: "1px solid black", borderColor:"white", padding: "8px", color: "white", backgroundColor: "#00142B", whiteSpace: "pre-line", verticalAlign: "top", paddingTop: "12px", paddingBottom: "12px", paddingLeft: "12px", paddingRight: "12px" }}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
