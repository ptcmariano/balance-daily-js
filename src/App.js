import React, {useState} from 'react';
import './App.css';
import BalanceTable from './tables/BalanceTable'
import AddBalanceForm from './forms/AddBalanceForm'

function App() {
  const balanceData = []

  const [balances,setBalances] = useState(balanceData)

  const addBalance = (balance) => {
    setBalances([...balances, balance])
  }
  return (
    <div className="App flex-row">
      <section className="flex-large">
        <h1>Add balance</h1>
        <AddBalanceForm addBalance={addBalance} />
      </section>
      <section className="flex-large">
        <h2>View balance by day</h2>
        <BalanceTable balances={balances} />
      </section>
    </div>
  );
}

export default App;
