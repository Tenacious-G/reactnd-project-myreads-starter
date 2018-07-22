import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './components/Bookcase'
import Search from './components/Search'


class BooksApp extends React.Component {
  state = {
	books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }
 
  componentDidMount(){
	  BooksAPI.getAll().then((books) => {
	  this.setState({books: books})
		})
  }
  
  moveShelf = (book, shelf) => {
	  BooksAPI.update(book, shelf);
	  
	  BooksAPI.getAll().then((books) => {
	  this.setState({books: books})
	  })
  }
  
	render() {
		// console.log(this.state.books);
	return (
		<div className="app">
			<Bookcase 
				books = {this.state.books}
				moveShelf ={this.moveShelf}
			/>
		</div>
		)
	}
}
export default BooksApp
