function Card({ title, summary, source }) {
    return(
        <div>  
            <h2>{title}</h2>
            <p>{summary}</p>
            <p>source: {source}</p>
        </div>
    )
}

export default Card;