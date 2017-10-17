import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from './style';
import axios from 'axios';

class AthleteCard extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		e.preventDefault();
		let vote = {skater_id: this.props.ids};
		let url = 'http://localhost:3001/votes';
		axios.post(url, vote)
			// .then(res => {
			// 	this.setState({data: res});
			// })
			.catch(err => {
				console.error(err);
			})
	}
	render() {
		return(		
			<div onClick={this.handleClick} style={ style.athleteCard}>
				<img style={ style.athleteImg} src={`${this.props.image}`} alt={`${this.props.name}'s profile`} />
				<h2 style={ style.athleteName}>{this.props.name}</h2>
			</div>
			);
	}
}

export default AthleteCard;