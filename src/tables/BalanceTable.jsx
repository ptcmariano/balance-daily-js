import React from 'react'

const BalanceTable = (props) => (
  <table className="TableCenter">
    <thead>
      <tr>
        <th>Account</th>
        <th>Balance</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        {props.balances.length > 0 ? (
            props.balances.map((balance) => (
                <tr key={balance.account}>
                    <td>{balance.account}</td>
                    <td>{balance.balance}</td>
                    <td>{balance.date}</td>
                </tr>
            ))
        ):(
            <tr>
                <td colSpan={3}>No balances</td>
            </tr>
        )}
    </tbody>
  </table>
)

export default BalanceTable