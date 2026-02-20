import { useState } from 'react'
import './App.css'
import DogBreeds from './components/dogAPI.tsx'
import type { Dog } from './types.ts'
import styled from 'styled-components'
import { useEffect } from 'react'


const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 6.7px silver solid;
`;

export default function App() {

  const [data, setData] = useState<Dog[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(
        "https://dogapi.dog/api/v2/breeds?page[size]=12");
      const { data }: { data: Dog[] } = await rawData.json();
      setData(data);
    }

    fetchData()
      .then(() => console.log("Data fetch was successful"))
      .catch((e: Error) => console.log("There was an error: " + e));
  }, []);

  return (
    <ParentDiv>
      <DogBreeds data={data} />
    </ParentDiv>
  )
}