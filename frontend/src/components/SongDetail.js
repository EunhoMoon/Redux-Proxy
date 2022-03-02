import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ selectedSong }) => {
	console.log(selectedSong);
	return (<>
		{!selectedSong ? (
			// 선택한 곡이 없을 때 화면
			<div>Please select a song!</div>
		) : (
			// 선택한 곡이 있을 때 화면
			<div>
				<h3>노래 상세</h3>
				<p>제목: {selectedSong.title}</p>
				<p>가수: {selectedSong.artist}</p>
			</div>
		)}
	</>
	)
}

const mapStateToProps = state => {
	return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)