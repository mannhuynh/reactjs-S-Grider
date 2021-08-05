import React from "react";
import SearchBar from "./SearchBar";
import PassWord from "./Password";
import unsplash from "../api/unsplash";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (searchTerm) => {
		const response = await unsplash.get("/search/photos", {
			params: { query: searchTerm },
		});

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
