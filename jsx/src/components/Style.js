const getButtonText = () => "Click on me please!!!";

const Style = () => {
	const styleObj = { backgroundColor: "red", border: "5px solid blue" };
	return (
		<div>
			<label
				className="label"
				htmlFor="name"
				style={{ border: "3px solid orangered ", marginRight: "5px" }}
			>
				Enter name:
			</label>
			<input
				type="text"
				id="name"
				style={{ border: "2px solid cyan", marginRight: "2px" }}
				placeholder="type something here"
			/>
			<button style={styleObj}> {getButtonText()} </button>
		</div>
	);
};
export default Style;
