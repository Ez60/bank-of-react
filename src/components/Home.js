import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Home extends Component 
{
    
  render() 
  {
    return (
        <div>
          <h1>Bank of React</h1>
          <div>
            <Link to="/userProfile">User Profile</Link>
          </div>
          <div>
            <Link to="/Login">Log In</Link>
          </div>
          <div>
            <Link to="/Debits">Debits</Link>
          </div>
          <div>
            <Link to="/Credits">Credits</Link>
          </div>
          <div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
        </div>
    );
  }
}

export default Home;