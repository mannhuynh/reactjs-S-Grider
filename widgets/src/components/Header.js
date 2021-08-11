import React from "react";
import Link from "./Link";
const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link href="/" className="item">
				Accordion
			</Link>
			<Link href="/search" className="item">
				WikiSearch
			</Link>
			<Link href="/dropdown" className="item">
				Dropdown
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
			<Link href="/users" className="item">
				Users
			</Link>
		</div>
	);
};

export default Header;
