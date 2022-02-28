import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



const AudioPlayerDiv = () => {
    return (
        <AudioPlayer
            autoPlay
            src="assets/audio/test-audio.mp3"
            onPlay={e => console.log("onPlay")}
        // other props here
        />
    )
}

export default AudioPlayerDiv;