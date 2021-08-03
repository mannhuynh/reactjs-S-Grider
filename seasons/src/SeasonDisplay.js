import "./SeasonDisplay.css";

const seasonConfig = {
	summer: { text: "Let's go to the beachhhhh!!!!", iconName: "sun" },
	winter: { text: "OMG! It is so cold}", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisPlay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	// const text = season === "summer" ? "Beach time!!!" : "Its too cold";
	// const iconName = season === "summer" ? "sun" : "snowflake";
	const { text, iconName } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName} icon massive icon-left`}></i>
			<h1>{text}</h1>
			<i className={`${iconName} icon massive icon-right`}></i>
		</div>
	);
};
export default SeasonDisPlay;
