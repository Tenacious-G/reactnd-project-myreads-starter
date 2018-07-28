import React, {Component} from 'react'
import Placeholder from '../icons/no-thumbnail-image.png'

class Book extends React.Component {

  render() {
	  {/*handle cases where there is no thumbnail*/}
	  let displayedThumbnail = this.props.book.imageLinks ?
	  this.props.book.imageLinks.thumbnail :
	  Placeholder;

	  
    return (
		<div className="book">
		  <div className="book-top">
		  {/*book covers do not appear unless width and height are stated here
			lucia_gm in #fend-p7-myreads Slack forum 15/07/18
			missing thumbnails handling : dominicom in #fend-p7-myreads Slack forum 25/07/18
			https://googledevndscholars.slack.com/archives/CA36ZFP4P/p1532526770000504?thread_ts=1532520106.000294&cid=CA36ZFP4P
			*/}
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayedThumbnail}")`  }}></div>
			<div className="book-shelf-changer">
			  <select
				onChange = {(event) => this.props.moveShelf(
					this.props.book, event.target.value)}
				value = {this.props.currentShelf}
			  >
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			  </select>
			</div>
		  </div>
		  <div className="book-title">{this.props.book.title}</div>
		  <div className="book-authors">{this.props.book.authors}</div>
		</div>

		)
  }
}
export default Book