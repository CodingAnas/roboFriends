import React, { Component } from 'react'
import Cardlist from '../Components/CardList';
import Searchbox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import Errorboundary from '../Components/Errorboundary'
import './App.css'

class App extends Component 
{
	constructor()
	{
		super()
		this.state ={
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots:users}))
	}

	onSearch = (event) =>
	{
		this.setState({searchfield : event.target.value})
	}

	render()
	{
		const {robots, searchfield} = this.state;
		const filteredbots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ? 
		<h1 className="tc Head">LOADING!!!</h1> :
		(
			<div className="tc">
				<h1 className="Head">RoboFriends</h1>
				<Searchbox search={this.onSearch}/>
				<Scroll>
					<Errorboundary>
						<Cardlist robots={filteredbots}/>
					</Errorboundary>
				</Scroll>
			</div>
		);
	}
}

export default App;