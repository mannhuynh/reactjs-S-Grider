// import React from "react";
// import faker from "faker";

// import ApprovalCard from "./ApprovalCard";

const CommentDetail = (props) => {
	return (
		<div className="ui container comments">
			<div className="comment">
				<a href="/" className="avatar">
					<img src={props.avatar_src} alt="avatar" />
				</a>
				<div className="content">
					<a href="/" className="author">
						{props.author}
					</a>
					<div className="metadata">
						<span className="date">{props.timeAgo}</span>
					</div>
					<div className="text">{props.comment}</div>
				</div>
			</div>
			{/* <ApprovalCard /> */}
		</div>
	);
};

export default CommentDetail;
