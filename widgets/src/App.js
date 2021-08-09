// import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
	return (
		<div>
			{/* <Accordion items={items} /> */}
			<Search />
		</div>
	);
};

export default App;
