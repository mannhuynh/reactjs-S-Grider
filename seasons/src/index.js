/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisPlay from "./SeasonDisplay";

class App extends React.Component {
	constructor(props) {
		super(props);
		// This is our state initialization
		this.state = { lat: null, errorMessage: "" };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// Using setState to update the initial state
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}
	// render() is a required method for React Class base component
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}
		return <div>Loading...</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
