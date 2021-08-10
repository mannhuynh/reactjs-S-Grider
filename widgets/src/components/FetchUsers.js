import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const FetchUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const { data } = await axios.get(URL);

			setUsers(data);
		};

		getUsers();
	}, []);

	const renderedUsers = users.map((user) => {
		return <li key={user.id}>{user.name}</li>;
	});

	return (
		<div className="ui container" style={{ marginTop: "50px" }}>
			<h2 className="ui header">User List:</h2>
			<ul>{renderedUsers}</ul>
		</div>
	);
};

export default FetchUsers;
