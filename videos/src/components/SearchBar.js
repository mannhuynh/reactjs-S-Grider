import React from "react";

class SearchBar extends React.Component {
	state = { term: "Dippy_Pineapple" };

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
						<label htmlFor="search">
							<h2>Video Search</h2>
							<p>(Change the Below Search Term of Your Choice)</p>
						</label>
						<input
							id="search"
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
