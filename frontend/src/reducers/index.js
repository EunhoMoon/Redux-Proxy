import { combineReducers } from 'redux'
const songsReducer = () => {
	
	return [
		{ title: "Next Level", artist: "aespa" },
		{ title: "소주 한잔", artist: "임창정" },
		{ title: "피, 땀, 눈물", artist: "BTS" },
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong : selectedSongReducer,
});