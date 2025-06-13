import styled from "styled-components";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 14rem;
    border: 1px solid gray;
    border-radius: 0.875rem;
    border-bottom: 5px solid black;
    border-right: 5px solid black;
    img {
        width: 40rem;
    }
`;

export const Card = memo(({ pokemon }) => {
    console.log("card", pokemon.id);
    const [isImageLoading, setIsImageLoading] = useState(true);
    const navigate = useNavigate();
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {isImageLoading ? (
                <div className="w-[120px] h-[120px] leading-[120px] text-center"> loading . . .</div>
            ) : null}
            <img
                onLoad={() => setIsImageLoading(false)}
                src={pokemon.front}
                style={{ display: isImageLoading ? "none" : "block" }}
            ></img>
            <div>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id} />
            </div>
        </CardContainer>
    );
});
