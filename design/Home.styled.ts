import styled from 'styled-components';


export const HeadOne = styled.h1`
    text-shadow: 1px 1px 1px rgb(187, 184, 2);
    font-size: 4rem;
`;

export const SubHead = styled.p`
    margin-top: 2rem;
    font-size: 1.8rem;
`;

export const CharacterButton = styled.button`
    background-color: rgb(187, 184, 2);
    border-radius: 10px;
    margin-top: 3rem;
    letter-spacing: 0.1rem;
`;

export const CharacterButtonLink = styled.a`
    color: #eee;
    text-shadow: 2px 2px 2px #333;
    text-decoration: none;
    font-size: 1.5rem;

    :hover {
        color: #eee;
        text-decoration: none;
    }
`;