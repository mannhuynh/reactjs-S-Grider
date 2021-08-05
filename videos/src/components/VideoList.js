import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
	// console.log(props.videos);
	const renderedList = props.videos.map((video, id) => {
		return (
			<div key={id}>
				<VideoItem
					handleVideoSelect={props.handleVideoSelect}
					video={video}
				/>
			</div>
		);
	});

	return <div className="ui relax devided list"> {renderedList}</div>;
};
export default VideoList;
