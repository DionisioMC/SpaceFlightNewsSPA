import { useEffect, useState } from "react";

async function fetchData() {
    const news = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json');
    return news.json();
}

function News() {
    const [news, setNews] = useState();

    useEffect(() => {
        setNews(fetchData());
    }, []);

    return(
        <>
            <div className="body">
                <h2>News</h2>

                <div id="news">
                    {
                        news.forEach(data => {
                            return(
                                <>
                                    <p>{data.title}</p>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            
        </>
    )
}

export default News;