import { Link } from 'react-router-dom';
import { Container } from './AdditionalMovieInfo.styled';

const AdditionalMovieInfo = () => {
  return (
    <Container>
      <h3>Додаткова інформація</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </Container>
  );
};

export default AdditionalMovieInfo;
