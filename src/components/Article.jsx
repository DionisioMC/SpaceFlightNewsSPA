function Article({article}) {
    console.log(article);
    
    return(
        <>
            <div>
                <h3>{article.title}</h3>
                <img src={article.image_url} width="30%"/>
                {
                    article.authors.map(author => {
                        return(
                                <>
                                    <p>{author.name}</p>
                                </>
                        )
                    })
                }
                <p>Summary: {article.summary}</p>
                <p>You can read more about it <a href={article.url}>here</a></p>
            </div>
        </>
    )
}

export default Article