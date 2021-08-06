import Accordion from "./components/Accordion";

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
			<Accordion items={items} />
		</div>
	);
};

export default App;
