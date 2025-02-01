function Movie({
    title,
    year,
    plot,
    posterURL,
    director
}) {
    return (
<article>
    <h3>{title}, {year}</h3>
    <main>
        <img src={posterURL} alt={title} />
        <p>{plot}</p>
    </main>
    <footer>
        <p>director: {director}</p>
    </footer>
</article>
    );
}

export default Movie;