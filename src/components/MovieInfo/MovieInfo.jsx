const MovieInfo = ({
  movie: { title, overview, vote_average, genres, poster_path },
}) => {
  const posterImg = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://placehold.co/240x360';

  return (
    <>
      <div>
        <img src={posterImg} alt={title} width={240} />
        <div>
          <h2>{title}</h2>
          <p>Movie rating: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
