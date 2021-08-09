import React, { useState, useEffect } from "react";

// import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
// import Search from "./components/Search";

// const items = [
// 	{
// 		title: "What is React?",
// 		content: "React is a LIBRARY",
// 	},
// 	{
// 		title: "Why is React?",
// 		content: "React is such",
// 	},
// 	{
// 		title: "How do you use React?",
// 		content: "React is all about components",
// 	},
// ];

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
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Dropdown Toggle
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null}
		</div>
	);
};

export default App;
