/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./ErrorMessage";
import SeasonDisPlay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	constructor(props) {
		super(props);
		// This is our state initialization
		this.state = { lat: null, errorMessage: "" };
	}
	// We can ignore the constructor() method and use below statement:
	// state = {lat:null, errorMessage:""}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// Using setState to update the initial state
				this.setState({ lat: position.coords.latitude });
			},
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <ErrorMessage errorMessage={this.state.errorMessage} />;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisPlay lat={this.state.lat} />;
		}
		return <Spinner message="Please click 'Allow'" />;
	}

	// render() is a required method for React Class base component
	render() {
		return <div className="container">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
