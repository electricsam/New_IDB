import React from 'react';

const tableData = [
  ['I.', 'Not felt except by a very few under especially favorable circumstances.'],
  ['II.', 'Felt only by a few persons at rest, especially on upper floors of buildings. Delicately suspended objects may swing.'],
  ['III.', 'Felt quite noticeably indoors, especially on upper floors of buildings, but many people do not recognize it as an earthquake. Standing motor cars may rock slightly. Vibration like passing truck. Duration estimated.'],
  ['IV.', 'During the day felt indoors by many, outdoors by few. At night some awakened. Dishes, windows, and doors disturbed; walls make creaking sound. Sensation like heavy truck striking building. Standing motorcars rock noticeably.'],
  ['V.', 'Felt by nearly everyone; many awakened. Some dishes, windows, etc., broken; a few instances of cracked plaster; unstable objects overturned. Disturbance of trees, poles, and other tall objects sometimes noticed. Pendulum clocks may stop.'],
  ['VI.', 'Felt by all; many frightened and run outdoors. Some heavy furniture moved; a few instances of fallen plaster or damaged chimneys. Damage slight.'],
  ['VII.', 'Everybody runs outdoors. Damage negligible in buildings of good design and construction slight to moderate in well built ordinary structures; considerable in poorly built or badly designed structures. Some chimneys broken. Noticed by persons driving motor cars.'],
  ['VIII.', 'Damage slight in specially designed structures; considerable in ordinary substantial buildings, with partial collapse; great in poorly built structures. Panel walls thrown out of frame structures. Fall of chimneys, factory stacks, columns, monuments, walls. Heavy furniture overturned. Sand and mud ejected in small amounts. Changes in well water. Persons driving motor cars disturbed.'],
  ['IX.', 'Damage considerable in specially designed structures; well-designed frame structures thrown out of plumb; great in substantial buildings, with partial collapse. Buildings shifted off foundations. Ground cracked conspicuously. Underground pipes broken.'],
  ['X.', 'Some well-built wooden structures destroyed; most masonry and frame structures destroyed with foundations; ground badly cracked. Rails bent. Landslides considerable from river banks and steep slopes. Shifted sand and mud. Water splashed over banks.'],
  ['XI.', 'Few, if any (masonry), structures remain standing. Bridges destroyed. Broad fissures in ground. Underground pipelines completely out of service. Earth slumps and land slips in soft ground. Rails bent greatly.'],
  ['XII.', 'Damage total. Waves seen on ground surfaces. Lines of sight and level distorted. Objects thrown upward into the air.'],
];


const EqIntensity = props => (
    <div>
      <h4>Table 1. -- Modified Mercalli Intensity Scale of 1931</h4>
      <table>
        {tableData.map(e => <tr>{e.map(x => <td>{x}</td>)}</tr>)}
      </table>
    </div>
);

export default EqIntensity;



