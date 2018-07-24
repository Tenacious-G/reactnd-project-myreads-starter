import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'

class Search extends React.Component {
	state={
		query: '',
		searchedBooks: []
	}
	
	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.updateSearchedBooks(query);
	}
	
	updateSearchedBooks = (query) => {
		if (query){
		BooksAPI.search(query).then((searchedBooks) => {
			{/* catch exception, leave "searched" array empty*/}
			if(searchedBooks.error){
				this.setState({searchedBooks: []});
			} else
			this.setState({searchedBooks: searchedBooks});
		})
		} else{
			this.setState({searchedBooks: []});
		}
	}
	
render() {

    return (
	  <div className="search-books">
		<div className="search-books-bar">
		{/*go back to bookcase*/}
		<Link 
			to="/"
			className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close
		</Link>
		  <div className="search-books-input-wrapper">

		  <input 
			type="text"
			placeholder="Search by title or author"
			value = {this.state.query}
			onChange = {(event) => this.updateQuery(event.target.value)}
			/>
		  </div>
	    </div>
	    <div className="search-books-results">
	      <ol className="books-grid">
		  {
			this.state.searchedBooks.map(searchedBook => {
				let shelf = "none";
				{/*put book onto chosen shelf in the bookcase*/}
				this.props.books.map(book => (
					book.id === searchedBook.id ?
					shelf = book.shelf :
					shelf = "none"
			));
				return (
					<li key={searchedBook.id}>
					<Book 
						book = {searchedBook}
						moveShelf={this.props.moveShelf}
						currentShelf = {shelf}
					/>
				</li>
				);
			})
		  } 
		  
		  </ol>
	    </div>
      </div>
	)
  }
}

  
export default Search