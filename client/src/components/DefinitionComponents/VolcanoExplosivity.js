import React from 'react';
import Styles from './VolcanoExplosivity.css'

/**
 * For display of Volcano Expolsivity Column Definition.
 *
 * @module VolcanoExplosivity
 * @param props
 */
const VolcanoExplosivity = props => (
    <div>
      <table className={Styles.table}>
        <thead className={Styles.tableHead}>
          <th><b>VEI</b></th>
          <th><b>General Description</b></th>
          <th><b>Cloud Column Height (km)</b></th>
          <th><b>Volume (m<sup>3</sup>)</b></th>
          <th><b>Qualititative Description</b></th>
          <th><b>Classification</b></th>
          <th><b>How often</b></th>
          <th><b>Example</b></th>
        </thead>

        <tbody className={Styles.tableBody}>
          <tr>
            <td>0</td>
            <td>non-explosive</td>
            <td>&lt;0.1</td>
            <td>1x10<sup>4</sup></td>
            <td>Gentle</td>
            <td>Hawaiian</td>
            <td>daily</td>
            <td>Kilauea</td></tr><tr>
          </tr>
          <tr>
            <td>1</td>
            <td>Small</td>
            <td>0.1-1</td>
            <td>1x10<sup>6</sup></td>
            <td>Effusive</td>
            <td>Haw/Strombolian</td>
            <td>daily</td>
            <td>Stromboli</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Moderate</td>
            <td>1-5</td>
            <td>1x10<sup>7</sup></td>
            <td>Explosive</td>
            <td>Strom/Vulcanian</td>
            <td>weekly</td>
            <td>Galeras, 1992</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Moderate-Large</td>
            <td>3-15</td>
            <td>1x10<sup>8</sup></td>
            <td>Explosive</td>
            <td>Vulcanian</td>
            <td>yearly</td>
            <td>Ruiz, 1985</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Large</td>
            <td>10-25</td>
            <td>1x10<sup>9</sup></td>
            <td>Explosive</td>
            <td>Vulc/Plinian</td>
            <td>10's of years</td>
            <td>Galunggung, 1982</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Very Large</td>
            <td>&gt;25</td>
            <td>1x10<sup>10</sup></td>
            <td>Cataclysmic</td>
            <td>Plinian</td>
            <td>100's of years</td>
            <td>St. Helens, 1981</td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
            <td>&gt;25 km</td>
            <td>1x10<sup>11</sup></td>
            <td>paroxysmal</td>
            <td>Plin/Ultra-Plinian</td>
            <td>100's of years</td>
            <td>Krakatau, 1883</td>
          </tr>
          <tr>
            <td>7</td>
            <td></td>
            <td>&gt;25 km </td>
            <td>1x10<sup>12</sup></td>
            <td>colossal</td>
            <td>Ultra-Plinian</td>
            <td>1000's of years</td>
            <td>Tambora, 1815</td>
          </tr>
          <tr>
            <td>8</td>
            <td></td>
            <td>&gt;25 km
            </td><td>&gt;1x10<sup>12</sup></td>
            <td>colossal</td>
            <td>Ultra-Plinian</td>
            <td>10,000's of years</td>
            <td>Yellowstone, 2 Ma</td>
          </tr>
        </tbody>
      </table>

      <p>
        Newhall, C.G. and Self, S (1982). The volcanic explosivity index (VEI): an estimate of explosive magnitude for historical volcanism. <i>Jour Geophys Res (Oceans & Atmospheres), 87:1231-1238.</i>
      </p>
    </div>
);

export default VolcanoExplosivity;