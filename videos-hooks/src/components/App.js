import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		onTermSubmit("Dippy_Pineapple");
	}, []);

	const onTermSubmit = async (searchTerm) => {
		const response = await youtube.get("/search", {
			params: {
				q: searchTerm,
			},
		});

		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar handleFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							handleVideoSelect={onVideoSelect}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
