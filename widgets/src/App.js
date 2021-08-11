import React, { useState, useEffect } from "react";
import FetchUsers from "./components/FetchUsers";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
	{
		title: "What is React?",
		content: "React is a LIBRARY",
	},
	{
		title: "Why is React?",
		content: "React is such",
	},
	{
		title: "How do you use React?",
		content: "React is all about components",
	},
];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "The Shade of Blue",
		value: "blue",
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/users">
				<FetchUsers />
			</Route>
		</div>
	);
};

export default App;
