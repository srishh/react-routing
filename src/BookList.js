import './BookList.css';
import React,{Component} from 'react';
import BookData from './BookData';
import Book from './Book';
import {Link} from 'react-router-dom';

 class BookList extends Component {
     constructor(props){
         super(props)
         this.state={
             BookData:BookData
         }
     }
     render() {
        return (
          <div className="books">
              
                
                {this.state.BookData.map((item, index) => {
                 
                    const {_id,title,isbn}=item;
                  return (
                <Link className="link" to={{pathname:`book-desc/${_id}/${title}`, state:item   }  } key={isbn}  >
                    <Book
                      data={item}
                    />
                </Link>
                
              
                  );
                })}
          
        
          </div>
        );
      }
  
    }

     
    


export default BookList;
