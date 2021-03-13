import styled from 'styled-components';

export const HeadOne = styled.h1`
    text-align: center;
    margin-top: 1rem;
    text-shadow: 1px 1px 1px rgb(187, 184, 2);
`;

export const CharacterGrid = styled.div`
    display: grid;
    margin-top: 3rem;
	grid-template-columns: repeat(4, 1fr);
    border: 1px solid #eeeeee;
    width: 70%;
    margin-left: 20rem;
`;

export const CharacterQuote = styled.h1`
    margin-left: 2rem;
	margin-top: 2rem;
	font-weight: bold;
	text-shadow: 2px 2px 2px #eee;
    font-size: 1.2rem;
`

export const Characterss = styled.h3`
	margin-top: 2rem;
	font-weight: bold;
	text-shadow: 2px 2px 2px #eee;
    font-size: 1.2rem;
    margin-left: 2rem;
`;

export const CharacterImage = styled.img`
    width: 30%;
`;

export const CharacterDirection = styled.h5`
    margin-top: 2rem;
    font-weight: bold;
`;