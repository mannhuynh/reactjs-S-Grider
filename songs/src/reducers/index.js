import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "No Scrubs", duration: "4:50" },
		{ title: "Macarina", duration: "2:30" },
		{ title: "All Stars", duration: "3:10" },
		{ title: "I want it that way", duration: "2:50" },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
