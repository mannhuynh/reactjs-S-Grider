import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	render() {
		return (
			<div className="ui segment">
				<form
					onSubmit={(e) => e.preventDefault()}
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
