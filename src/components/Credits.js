import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Credits extends Component 
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
    console.log(newItem);
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
    console.log(newItem);
    this.props.addCredit(newItem);
  }

   getDateAndTime = () => {
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
        <h1>Credits</h1>
        <div>
        <h2>Display Credit</h2>
        <table>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
            {this.props.credits.map(credit => {
                return <tr key={credit.id}>
                    <td>{credit.description}</td>
                    <td>{credit.amount}</td>
                    <td>{credit.date}</td>
                </tr>
                })}
        </table>
        <div>
            <h2>Amount Display</h2>
            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
        </div>
        <div>
          <h2>Add Credits</h2>
          <form onSubmit = {this.handleSubmit}>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
            </div>
            <div>
              <label htmlFor="amount">Amount: </label>
              <input type="number" name="amount" onChange={this.handleChange} value={this.state.amount}/>
            </div>
            <div>
              <label htmlFor="date">Date: {this.getDateAndTime()}</label>
            </div>
            <button>Add Credit</button>
          </form>
        </div>
          <footer>
              <div>
                  <nav>
                      <ul>
                          <Link to="/">Home  </Link>
                          <Link to="/Login">Log In  </Link>
                          <Link to="/UserProfile">User Profile  </Link>
                          <Link to="/Debits">Debits  </Link>
                      </ul>
                  </nav>
              </div>
          </footer>
      </div>
    )
  }
}

export default Credits;