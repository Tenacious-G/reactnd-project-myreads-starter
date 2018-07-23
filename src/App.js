import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './components/Bookcase'
import Search from './components/Search'
// import Book from './Book'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'


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

	return (
		<div className="app">
		
		<Route exact path="/" render={() => (		
			<Bookcase 
					books = {this.state.books}
					moveShelf ={this.moveShelf}
			/>
			)}
		/>
		
		<Route exact path="/search" render={() => (		
			<Search 
				books = {this.state.books}
				moveShelf={this.moveShelf}
			/>
			)}
		/>
		{/*	<Search 
			moveShelf={this.moveShelf}
		/>*/}
		
		</div>
		)
	}
}
export default BooksApp
