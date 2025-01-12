import './news.css'
import Card from '../components/Card';

function News({ cards }) {
    console.log(cards);
    return (
        <>
            <h1>Space Flight News</h1>
            {
                cards.results.map((card, index) => {
                    return <Card key={index} title={card.title} summary={card.summary} source={card.source}/>
                })
            }
        </>
    )
}

export default News;