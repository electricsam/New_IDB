import React from 'react';

import Styles from "./TimeEruptionStyles.css";

const tableData = [
  {code: "D1", definition: "Last known eruption 1964 or later"},
  {code: "D2", definition: "Last known eruption 1900-1963"},
  {code: "D3", definition: "Last known eruption 1800-1899"},
  {code: "D4", definition: "Last known eruption 1700-1799"},
  {code: "D5", definition: "Last known eruption 1500-1699"},
  {code: "D6", definition: "Last known eruption A.D. 1-1499"},
  {code: "D7", definition: "Last known eruption B.C. (Holocene}"},
  {code: "U", definition: "Undated, but probable Holocene eruption"},
  {code: "Q", definition: "Quaternary eruption(s) with the only known Holocene activity being hydrothermal"},
  {code: "?", definition: "Uncertain Holocene eruption"}
];


const TimeEruption = props => (
    <div>
      <table className={Styles.table}>
        <thead className={Styles.tableHead}>
        <th>Code</th>
        <th>Defintion</th>
        </thead>
        <tbody className={Styles.tableBody}>
        {
          tableData.map(e => (
              <tr>
                <td>{e.code}</td>
                <td>{e.definition}</td>
              </tr>
          ))
        }
        </tbody>
      </table>
    </div>
);

export default TimeEruption;
