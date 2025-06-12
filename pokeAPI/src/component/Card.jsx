import styled from "styled-components";
import React from "react";
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
    img {
        width: 40rem;
    }
`;

export const Card = ({ pokemon }) => {
    const navigate = useNavigate();
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            <img src={pokemon.front}></img>
            <div>
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id} />
            </div>
        </CardContainer>
    );
};
