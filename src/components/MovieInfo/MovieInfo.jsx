import { Container, Details } from './MovieInfo.styled';

const MovieInfo = ({
  movie: { title, overview, vote_average, genres, poster_path },
}) => {
  const posterImg = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://placehold.co/240x360';

  return (
    <>
      <Container>
        <img src={posterImg} alt={title} width={240} height={360} />
        <Details>
          <h2>{title}</h2>
          <p>Movie rating: {Math.round(vote_average * 10)}%</p>
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
        </Details>
      </Container>
    </>
  );
};

export default MovieInfo;
