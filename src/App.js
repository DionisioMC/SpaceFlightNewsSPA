import './App.css';
import News from './pages/News';
import { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState("https://api.spaceflightnewsapi.net/v4/articles/?format=json")
  const [cards, setCards] = useState([]);

  useEffect(() => {
    try {
      async function getData() {
        const response = await fetch(url);
        const apiCards = await response.json();

        setCards(apiCards);
      }
      getData();
    } catch (err) {
      console.error(err);
    }
  }, [url])
  return (
    <>
      <News cards={cards}/>
    </>
  );
}

export default App;
