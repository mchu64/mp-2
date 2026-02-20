import styled from "styled-components";
import type { DBZcharacter } from "../types.ts";

const AllBreedsDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 2%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.6);
`;


const SingleCharDiv = styled.div<{saiyan: boolean }>`
  background-color: ${(props) => (props.saiyan ? "rgba(255, 251, 0, 0.6)" : "rgba(0, 0, 0, 0.4)")};
  width: 30%;
  max-width: 260px;
  padding: 2%;
  margin: 1%;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #0f172a;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  strong {
    color:rgb(216, 115, 0);
  }

  h1{
    font-size: calc(12px + 1.3vw);
    color:rgb(213, 121, 0);
    margin-bottom: 0.5rem;
  }

  p{
    font-size: calc(10px + 0.8vw);
    line-height: 1.2;
    margin: 0.25rem 0;
    color:rgb(141, 94, 0);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: 600px;
  }
`;

export default function DBZCharacters(props: { data: DBZcharacter[] }) {
    return (
      <>
      <AllBreedsDiv>
        {props.data.map((c: DBZcharacter) => (
            <SingleCharDiv saiyan={c.race === "Saiyan"} key={c.id}>
            <h1>{c.name}</h1>
            <p>{c.race}</p>
            <strong>{c.ki}</strong>
            <img src={c.image} alt={`image of ${c.name}`} />
            </SingleCharDiv>
        ))}
      </AllBreedsDiv>
      </>
    );
  }