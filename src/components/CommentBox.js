import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
// import DATA from './data';
import style from './style';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
		this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}
	loadCommentsFromServer() {
		let url = 'http://localhost:3001/api/comments';
		axios.get(url)
			.then(res => {
				this.setState({data: res.data});
			})
	}
	handleCommentSubmit(comment) {
		let comments = this.state.data;
		 comment.id = Date.now();
		 let newComments = comments.concat([comment]);
		 this.setState({ data: newComments });
		 let url = 'http://localhost:3001/api/comments';
		axios.post(url, comment)
			// .then(res => {
			// 	this.setState({data: res});
			// })
			.catch(err => {
				console.error(err);
				this.setState({data: comments})
			})
	}
	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, 2000);
	}
	render() {
		return (
			<div style={ style.commentBox }>
			<h2>Comments:</h2>
			<CommentList data={this.state.data}/>
			<CommentForm onCommentSubmit = {this.handleCommentSubmit} />
			</div>
			)
		}
	}

export default CommentBox;