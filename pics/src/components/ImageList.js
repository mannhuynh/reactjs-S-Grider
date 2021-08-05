import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
	const images = props.sourceImages.map((image, id) => {
		return <ImageCard key={id} image={image} />;
	});
	return <div className="image-list">{images}</div>;
};

export default ImageList;
