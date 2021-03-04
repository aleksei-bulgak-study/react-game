import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import audioFile from '../../assets/background.mp3';
import icon from '../../assets/sound.svg';

type AudioButtonProps = {
    className?: string;
};

const AudioButton: React.FC<AudioButtonProps> = ({ className }) => {
    const audio = useRef(new Audio(audioFile));
    const [enabled, setEnabled] = useState(false);

    const onClick = () => setEnabled((previous) => !previous);

    useEffect(() => {
        audio.current.loop = true;
        audio.current.autoplay = true;
        audio.current.volume = 0.1;
        if (enabled) {
            audio.current.play();
        } else {
            audio.current.pause();
        }
    }, [enabled]);

    return <button className={className} onClick={onClick}></button>;
};

export default styled(AudioButton)`
    position: absolute;
    bottom: 3rem;
    left: 0%;
    height: 3rem;
    width: 3rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.gameInfo.fontColor};
    mask-image: url(${() => icon});
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;

    &:hover {
        filter: brightness(120%);
    }

    @media (max-height: 900px) {
        top: 0;
        fill: white;
        background-color: white;
    }
`;
