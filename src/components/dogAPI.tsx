import styled from "styled-components";
import type { Dog } from "../types.ts";

const AllBreedsDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 2%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 1rem;
  background-color: #ffffff;
`;


const SingleBreedDiv = styled.div`
  width: 30%;
  min-width: 260px;
  padding: 2%;
  margin: 1%;
  text-align: center;

  background-color: #e3e3e3;
  border-style: solid;
  border-width: 1px;
  border-color: #0f172a;

  h1{
    font-size: calc(12px + 1.3vw);
    color: #0e4e11;
    margin-bottom: 0.5rem;
  }

  p{
    font-size: calc(10px + 0.8vw);
    line-height: 1.2;
    margin: 0.25rem 0;
    color: #000000;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    max-width: 600px;
  }
`;

export default function DogBreeds(props: { data: Dog[] }) {
    return (
      <AllBreedsDiv>
        {props.data.map((breed: Dog) => (
          <SingleBreedDiv key={breed.id}>
            <h1>{breed.attributes.name}</h1>
            <p>{breed.attributes.description}</p>
            <p>{breed.id}</p>
          </SingleBreedDiv>
        ))}
      </AllBreedsDiv>
    );
  }