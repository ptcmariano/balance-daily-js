import React, { useState } from 'react'

const AddBalanceForm = (props) => {
    const todayDate = new Date().toISOString().slice(0,10)
    const initialFormState = {account:'',balance:0.0,date:todayDate}
    const [balance,setBalance] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
      
        setBalance({ ...balance, [name]: value })
    }
    return (
    <form
        onSubmit={event => {
            event.preventDefault()
            if (!balance.account || !balance.balance || !balance.date) return
        
            props.addBalance(balance)
            setBalance(initialFormState)
        }}
    >
      <label>account</label>
      <input type="text" name="account" onChange={handleInputChange} value={balance.account} />
      <label>balance</label>
      <input type="number" name="balance" onChange={handleInputChange} value={balance.balance} />
      <label>date</label>
      <input type="date" name="date" onChange={handleInputChange} value={balance.date} />
      <button>Add new Balance</button>
    </form>
  )
}

export default AddBalanceForm