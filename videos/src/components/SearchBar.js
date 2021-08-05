import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.handleFormSubmit(this.state.term);
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form
					onSubmit={this.onFormSubmit}
					action=""
					className="ui form"
				>
					<div className="field">
						<label htmlFor="">Video Search</label>
						<input
							value={this.state.term}
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
							type="text"
						/>
					</div>
				</form>
				{/* <p>{this.state.term}</p> */}
			</div>
		);
	}
}
export default SearchBar;
