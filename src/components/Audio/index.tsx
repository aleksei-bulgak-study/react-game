import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import audioFile from '../../assets/background.mp3';

type AudioSoundProps = {
    className?: string;
};

const AudioSound: React.FC<AudioSoundProps> = ({ className }) => {
    const audio = useRef(new Audio(audioFile));
    const [enabled, setEnabled] = useState(false);

    const onClick = () => setEnabled((previous) => !previous);

    useEffect(() => {
        audio.current.loop = true;
        audio.current.autoplay = true;
        console.log(enabled);
        if (enabled) {
            audio.current.play();
        } else {
            audio.current.pause();
        }
    }, [enabled]);

    return (
        <button className={className} onClick={onClick}>
            Sound
        </button>
    );
};

export default styled(AudioSound)`
    position: absolute;
    bottom: 6%;
    left: 1%;
    height: 50px;
    width: 50px;
    border-radius: 20px;
    background-color: green;
    border: none;
    outline: none;
    cursor: pointer;
    color: black;
    transition: bottom 1s ease-in-out;
    
    &:hover {
        background-color: #004400;
    }

    @media (max-height: 750px) {
        bottom: 1px;
        font-size: 1rem;
        height: 60px;
        width: 60px;
    }
`;
