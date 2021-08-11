import React, { useState } from "react";

const SearchBar = ({ handleFormSubmit }) => {
	const [term, setTerm] = useState("Dippy_Pineapple");

	const onInputChange = (event) => {
		setTerm(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		handleFormSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onFormSubmit} action="" className="ui form">
				<div className="field">
					<label htmlFor="search">
						<h2>Video Search</h2>
						<p>(Change the Below Search Term of Your Choice)</p>
					</label>
					<input
						id="search"
						value={term}
						onChange={onInputChange}
						type="text"
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
