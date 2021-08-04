import SearchBar from "./SearchBar";
import PassWord from "./Password";
const App = () => {
	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<PassWord />
			<h2>Pictures Search App</h2>
			<SearchBar />
		</div>
	);
};

export default App;

// import React from "react";

// class App extends React.Component {
// 	render() {
// 		return <h1>APP</h1>;
// 	}
// }
