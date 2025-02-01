function Movie({
    id,
    title,
    year,
    plot,
    posterUrl,
    director,
    deleteMovieHandler,
}) {
    return (
<article>
    <h3>{title}, {year}</h3>
    <main>
        <img src={posterUrl} alt={title} />
        <p>{plot}</p>
        <button onClick={() => deleteMovieHandler(id)}>Delete {title}</button>
    </main>
    <footer>
        <p>director: {director}</p>
    </footer>
</article>
    );
}

export default Movie;