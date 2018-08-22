import React from 'react';
import Styles from './VolcanoStatusStyles.css';

/**
 * For display of Volcano Status column definition
 *
 * @module VolcanoStatus
 * @param props
 */
const VolcanoStatus = props => (
    <div>
      <table className={Styles.table}>
        <thead className={Styles.tableHead}>
          <th>Status</th>
          <th>Description</th>
        </thead>
        <tbody className={Styles.tableBody}>
          <tr>
            <td>1</td>
            <td>"Historical" - documented during or shortly after observation</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Dated eruptions based on a spectrum of techniques from "Hydrophonic" through "Radiocarbon" to "Anthropology", which is transitional to "Holocene"
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              Thermal features such as "Fumarolic"
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>"Uncertain"</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Thermal features preceded by the word "Pleistocene-"</td>
          </tr>

        </tbody>
      </table>
    </div>
);

export default VolcanoStatus;