import tract from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={tract.transactionHistory}>
      <thead className={tract.tableHead}>
        <tr>
          <th className={tract.tableTh}>Type</th>
          <th className={tract.tableTh}>Amount</th>
          <th className={tract.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id}>
              <td className={tract.tableTd}>{type}</td>
              <td className={tract.tableTd}>{amount}</td>
              <td className={tract.tableTd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
