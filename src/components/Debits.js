import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Debits extends Component 
{

  constructor() 
  {
    super();
    this.state = {
      item: {
        description: '',
        amount: 0,
        date: ''
      }
    }
  }

  handleChange = (e) => {
    const updatedItem = {...this.state.item};
    const inputValue = e.target.value;
    const inputField = e.target.name;
    updatedItem[inputField] = inputValue;
    this.setState({
      item: updatedItem
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {...this.state.item};
    if (newItem.description === '')
    {
      prompt('Enter a description');
      return;
    }
    if (newItem.amount === 0) 
    {
      prompt('Invalid amount');
      return;
    }
    newItem.date = this.getDateAndTime();
    this.props.addDebit(newItem);
  }

  getDateAndTime = () =>  {
    var currDate = new Date();
    var date = (currDate.getMonth() + 1) + '-' + currDate.getDate() + '-' + currDate.getFullYear();
    var time = currDate.getHours() + ':' + currDate.getMinutes() + ':' + currDate.getSeconds();
    var dateAndTime = date + " " + time;
    return dateAndTime;  
  }

  render() 
  {
    return (
      <div>
        <h1>Debits</h1>
        <div>
        <h2>Display Debit</h2>
        <table>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
            {this.props.debits.map(debt => {
              return <tr key={debt.id}>
                  <td>{debt.description}</td>
                  <td>{debt.amount}</td>
                  <td>{debt.date}</td>
                </tr>
            })}
        </table>
        </div>
        <div>
          <h2>Amount Display</h2>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
        <div>
          <div>
          <h2>Add Debits</h2>
          <form onSubmit = {this.handleSubmit}>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
            </div>
            <div>
              <label htmlFor="amount">Amount: </label>
              <input type="number" name="amount" onChange={this.handleChange} value={this.state.amount}/>
            </div>
            <div>
              <label htmlFor="date">Date: {this.getDateAndTime()}</label>
            </div>
            <button>Add Debit</button>
          </form>
          </div>
        </div>
        <footer>
              <div>
                  <nav>
                      <ul>
                          <Link to="/">Home  </Link>
                          <Link to="/Login">Log In  </Link>
                          <Link to="/UserProfile">User Profile  </Link>
                          <Link to="/Credits">Credits  </Link>
                      </ul>
                  </nav>
              </div>
          </footer>
      </div>
    )
  }
}

export default Debits;