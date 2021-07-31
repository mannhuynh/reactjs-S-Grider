// import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
	return (
		<div>
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4:45PM"
				comment="Nice blog post!"
				avatar_src={faker.image.avatar()}
			/>
			<CommentDetail
				author="Alex"
				timeAgo="Today at 2:00AM"
				comment="I like it"
				avatar_src={faker.image.avatar()}
			/>
			<CommentDetail
				author="Jane"
				timeAgo="Yesterday at 1:45AM"
				comment="Helloooo!"
				avatar_src={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
