import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
	// console.log(props.video);
	return (
		<div
			onClick={() => props.handleVideoSelect(props.video)}
			className="item video-item"
		>
			<img
				src={props.video.snippet.thumbnails.medium.url}
				alt={props.video.snippet.title}
				className="ui image"
			/>
			<div className="content">
				<div className="header">{props.video.snippet.title}</div>
			</div>
		</div>
	);
};
export default VideoItem;
