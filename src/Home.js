import './Home.css';
import React from 'react'
import {Link} from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
        <div className="heading"><h1>List of Books</h1></div>
        <div className="nav"><nav>
        
         {console.log(props)}
            <Link className="linkHome" to="/books">Books</Link>
        {props.isAuth ? <Link  className="linkHome" to="/logout">Logout</Link> : <Link  className="linkHome" to="/login">Login</Link>}
        </nav></div>
        
      
    </div>
  )
}

export default Home;

