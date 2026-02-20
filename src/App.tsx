import { useState } from 'react'
import './App.css'
import DBZcharacters from './components/DBZ.tsx'
import type { DBZcharacter } from './types.ts'
import styled from 'styled-components'
import { useEffect } from 'react'


const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
`;

export default function App() {

  const [data, setData] = useState<DBZcharacter[]>([]);

  useEffect(() => {
    //    test this  fetch("https://dragonball-api.com/api/characters")
    async function fetchData(): Promise<void> {
      const rawData = await fetch(
        "https://dragonball-api.com/api/characters?limit=12");
        const {items}: {items: DBZcharacter[]} = await rawData.json();
        setData(items);
    }

    fetchData()
      .then(() => console.log("Data fetch was successful"))
      .catch((e: Error) => console.log("There was an error: " + e));
  }, []);

  return (
    <ParentDiv>
      <DBZcharacters data={data} />
    </ParentDiv>
  )
}