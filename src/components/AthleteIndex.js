import React, { Component } from 'react';
import AthleteCard  from './AthleteCard';
import athletes from '../data/athletes';
import {Row} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import style from './style';
import axios from 'axios';


class AthleteIndex extends Component {
	constructor(props) {
		super(props);
		this.state = { user: null };
		this.loadUser = this.loadUser.bind(this);
	}
	loadUser(){
		let url = 'http://localhost:3001/user';
		axios.get(url)
			.then(res => {
				this.setState({user: res.data});
			})
	}
	render () {
		let athleteNodes = this.props.data.map(athlete => {
			return (
				<Col xs={12} md={4} key={athlete.id}>
				<AthleteCard name={athlete.name} image={athlete.image} ids={athlete.id} key={athlete.id}>
				</AthleteCard>
				</Col>
				)
			})
		return(
			<div className="home">
			<div style={style.headerContainer}>
			<h2 style={style.athleteIndexHeader}>Click to vote</h2>
			</div>
			<Grid>
			<Row>
			{athleteNodes}
			</Row>
			</Grid>
			</div>
			);
	}
}

export default AthleteIndex;