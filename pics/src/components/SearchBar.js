import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.handleSearch(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form
					onSubmit={this.onFormSubmit}
					className="ui form"
					action=""
				>
					<div className="field">
						<label htmlFor="search">Images Search</label>
						<input
							id="search"
							type="text"
							value={this.state.term}
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
						/>
					</div>
				</form>
				{/* <p>{this.state.term}</p> */}
			</div>
		);
	}
}

export default SearchBar;
