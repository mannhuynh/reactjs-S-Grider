import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };
	onTermSubmit = async (searchTerm) => {
		const response = await youtube.get("/search", {
			params: {
				q: searchTerm,
			},
		});
		this.setState({ videos: response.data.items });
	};

	onVideoSelect = (video) => {
		console.log(video);
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: "15px" }}>
				<SearchBar handleFormSubmit={this.onTermSubmit} />
				<VideoList
					handleVideoSelect={this.onVideoSelect}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;
