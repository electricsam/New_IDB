import React from 'react';

import { oddEven } from '../../helperFunctions/helperFunctions';
import Styles from './tableStyle.css';
import { camelToPascal } from '../../helperFunctions/helperFunctions';

const Table = props => (
  <div className={Styles.container}>
    <table className={Styles.tab}>
      <tr className={Styles.head}>
        {props.headers.map((e, i) => (<th>{camelToPascal(e)}</th>))}
      </tr>

      <tbody className={Styles.tbody}>
        {props.users.map((e, i) => (
          <tr className={oddEven(i) === 'even' ? Styles.even : Styles.odd}>
            {props.headers.map((key, index) => {
              if (key === 'avatar') {
                return (
                  <td className={Styles.data}>
                    <img src={e[key]} />
                  </td>
                );
              }
              return (<td className={Styles.data}>{e[key]}</td>);
            })}
          </tr>
        ))}
      </tbody>

    </table>
  </div>

);

export default Table;
