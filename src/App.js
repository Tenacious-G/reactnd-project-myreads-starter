import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './components/Bookcase'
import Search from './components/Search'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
	books: []
  }
 
  componentDidMount(){
	  BooksAPI.getAll().then((books) => {
	  this.setState({books: books})
		})
  }
  
  /*move book to selected shelf*/
  moveShelf = (book, shelf) => {
	  BooksAPI.update(book, shelf);
	  
	  BooksAPI.getAll().then((books) => {
	  this.setState({books: books})
	  })
  }
  
	render() {

	return (
		<div className="app">
		{/*show books selected as currently reading, want to read or read*/}
		<Route exact path="/" render={() => (		
			<Bookcase 
					books = {this.state.books}
					moveShelf ={this.moveShelf}
			/>
		)}
		/>
		{/*show all books*/}
		<Route exact path="/search" render={() => (		
			<Search 
				books = {this.state.books}
				moveShelf={this.moveShelf}
			/>
		)}
		/>
		
		</div>
	)
	}
}
export default BooksApp
