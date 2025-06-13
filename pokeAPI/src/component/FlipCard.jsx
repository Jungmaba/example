import React, { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
    transform-style: preserve-3d;
    width: 200px;
    height: 200px;
    position: relative;
    transition: 0.3s;
    transform: ${(props) => (props.fliped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
`;
const BackImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

const FlipCard = ({ front, back }) => {
    const [fliped, setFilped] = useState(false);
    return (
        <>
            <FlipImageContainer fliped={fliped}>
                <FrontImage src={front} />
                <BackImage src={back} />
            </FlipImageContainer>
            <button onClick={() => setFilped((prev) => !prev)}>flip</button>
        </>
    );
};

export default FlipCard;
