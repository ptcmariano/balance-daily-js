import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 260,
  },
}));

const AddBalanceForm = (props) => {

    const classes = useStyles()

    const todayDate = new Date().toISOString().slice(0,10)
    const initialFormState = {account:'',balance:0.0,date:todayDate}
    const [balance,setBalance] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target
      
        setBalance({ ...balance, [name]: value })
    }
    return (
        <form
            className={classes.container}
            onSubmit={event => {
                event.preventDefault()
                if (!balance.account || !balance.balance || !balance.date) return
            
                props.addBalance(balance)
                setBalance(initialFormState)
            }}
        >
          <TextField
            name="account"
            label="account"
            type="text"
            onChange={handleInputChange} value={balance.account}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="balance"
            label="balance"
            type="number"
            onChange={handleInputChange} value={balance.balance}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="date"
            label="date"
            type="date"
            onChange={handleInputChange} value={balance.date}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained"
            className={classes.textField}
            color="primary"
            type="submit">
          Add new Balance
          </Button>
        </form>
    )
}

export default AddBalanceForm