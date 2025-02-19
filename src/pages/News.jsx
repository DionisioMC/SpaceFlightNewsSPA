import { useEffect, useState } from "react";
import Article from "../components/Article";

function News() {
    const [news, setNews] = useState([]);
    

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json')
            .then(response => response.json())
            .then(data => setNews(data.results));
    }, []);

    return(
        <>
            <div className="body">
                <h2>News</h2>

                <div id="news">
                    {
                        news.map(data => {
                            return <Article article={data} key={data.id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default News;