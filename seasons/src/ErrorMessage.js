const ErrorMessage = (props) => {
	return (
		<div className="ui active dimmer">
			<h1 style={{ color: "#f86262" }}>{props.errorMessage}</h1>
		</div>
	);
};
export default ErrorMessage;
