import React from 'react';

/**
 * For display of Volcano Agent column description
 *
 * @module VolcanoAgent
 * @param props
 */
const VolcanoAgent = props => (
    <div>
      <table>
        <thead>
          <th><b>Agent_Code</b></th>
          <th><b>Agent</b></th>
        </thead>

        <tbody>
          <tr>
            <td>A</td>
            <td>Avalanche (Debris and landslides)</td>
          </tr>
          <tr>
            <td>E</td>
            <td>Electrical (lightning)</td>
          </tr>
          <tr>
            <td>F</td>
            <td>Floods (&amp; Jokulhlaups)</td>
          </tr>
          <tr>
            <td>G</td>
            <td>Gas (emission from eruptive craters as well as fumarolic/solfataric activity)</td>
          </tr>
          <tr>
            <td>I</td>
            <td>Indirect deaths (disease, starvation, exposure, desolation)</td>
          </tr>
          <tr>
            <td>L</td>
            <td>Lava flows</td>
          </tr>
          <tr>
            <td>M</td>
            <td>Mudflows/Lahars</td>
          </tr>
          <tr>
            <td>m</td>
            <td>Secondary (post-eruption) mudflows</td>
          </tr>
          <tr>
            <td>P</td>
            <td>Pyroclastic flows, surges, &amp; direct blasts</td>
          </tr>
          <tr>
            <td>S</td>
            <td>Seismic, or volcanic earthquake (tectonic earthquake deaths excluded)</td>
          </tr>
          <tr>
            <td>T</td>
            <td>Tephra (ash, bombs, lapilli, steam blasts. Killing either by ballistic impact, or with finer-grained ash, by suffocation, collapse of ash-covered roogs, etc.</td>
          </tr>
          <tr>
            <td>W</td>
            <td>Waves or tsunami</td>
          </tr>
        </tbody>
      </table>
      <p>
        Simkin T, and Siebert L (1994). <i>Volcanoes of the World</i>, 2nd edition. Geoscience Press in association with the Smithsonian Institution Global Volcanism Program, Tucson AZ, 368 p.
      </p>
    </div>
);


export default VolcanoAgent;