import React from 'react';
import { css } from 'aphrodite';
import styles from './styles';

const Red = props => <span style={{ color: 'red' }} {...props} />;

const TableComponent = ({ propDefinitions }) => { // eslint-disable-line
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => (
      <tr key={property} className={css(styles.propTr)}>
        <td className={css(styles.td)}>
          {property}
          {required ? <Red>*</Red> : null}
        </td>
        <td className={css(styles.td)} style={{ color: '#c41d7f' }}>{propType.name}</td>
        <td className={css(styles.td)} style={{ color: '#314659' }}>{defaultValue}</td>
        <td className={css(styles.td)} >{description}</td>
      </tr>
    ));

  return (
    <table className={css(styles.tableComponent)}>
      <thead>
        <tr className={css(styles.tr)}>
          <th className={css(styles.th)}>name</th>
          <th className={css(styles.th)}>type</th>
          <th className={css(styles.th)}>default</th>
          <th className={css(styles.th)}>description</th>
        </tr>
      </thead>
      <tbody className={css(styles.tableBody)}>{props}</tbody>
    </table>
  );
};

export default TableComponent;
