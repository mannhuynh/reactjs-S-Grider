import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import PassWord from "./Password";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (searchTerm) => {
		const response = await axios.get(
			"https://api.unsplash.com/search/photos",
			{
				params: { query: searchTerm },
				headers: {
					Authorization:
						"Client-ID itjGqY9pp4OtkmTwOOzzpXM8xrHUDUEjehGnuKYamfA",
				},
			}
		);
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<PassWord />
				<h2>Pictures Search App</h2>
				<SearchBar handleSearch={this.onSearchSubmit} />
				<p>{this.state.images.length}</p>
			</div>
		);
	}
}
export default App;
