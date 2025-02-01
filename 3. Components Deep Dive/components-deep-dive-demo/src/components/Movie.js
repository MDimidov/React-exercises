import { useEffect } from "react";

function Movie({
  id,
  title,
  year,
  plot,
  posterUrl,
  director,
  deleteMovieHandler,
  selectMovieHandler,
  selected,
}) {
  useEffect(() => {
    console.log(`Movie ${title} - mounted`);

    return () => {
        console.log(`Movie ${title} - unmounted`);
      };
  }, []);

  useEffect(() => {
    console.log(`Movie ${title} - updated`);
  }, [selected]);

  return (
    <article>
      <h3>
        {title}, {year}
      </h3>
      {selected && <h4>Selected</h4>}
      <main>
        <img src={posterUrl} alt={title} />
        <p>{plot}</p>
        <button onClick={() => deleteMovieHandler(id)}>Delete {title}</button>
        <button onClick={() => selectMovieHandler(id)}>Select {title}</button>
      </main>
      <footer>
        <p>director: {director}</p>
      </footer>
    </article>
  );
}

export default Movie;
