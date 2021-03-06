import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
	{
		label: "Vietnamese",
		value: "vi",
	},
	{
		label: "Afrikanns",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
];
// Google Translate key, only works on localhost:3000

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");
	return (
		<div className="ui container">
			<div className="ui form">
				<div className="field">
					<label htmlFor="">Enter Text</label>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</div>
			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
			<hr />

			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text} />
		</div>
	);
};
export default Translate;
