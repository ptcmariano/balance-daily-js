import React from 'react'
import TextField from '@material-ui/core/TextField'

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
                    <td>
                      <TextField
                        name="date"
                        label="date"
                        type="date"
                        disabled
                        value={balance.date}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </td>
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