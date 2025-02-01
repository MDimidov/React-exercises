import { useEffect } from "react";
import styles from './Movie.module.css';

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
  }, [title]);

  useEffect(() => {
    console.log(`Movie ${title} - updated`);
  }, [selected, title]);

  return (
    <article className={styles['movie-article']}>
      <h3>
        {title}, {year}
      </h3>
      {selected && <h4>Selected</h4>}
      <main>
        <img src={posterUrl} alt={title} />
        <p>{plot}</p>
        <button className={`${styles['btn-movie']} ${styles['btn-delete']}`} onClick={() => deleteMovieHandler(id)}>Delete {title}</button>
        <button className={styles['btn-movie']} onClick={() => selectMovieHandler(id)}>Select {title}</button>
      </main>
      <footer>
        <p>director: {director}</p>
      </footer>
    </article>
  );
}

export default Movie;
