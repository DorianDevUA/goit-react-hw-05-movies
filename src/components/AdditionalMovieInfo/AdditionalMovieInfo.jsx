import { Link } from 'react-router-dom';

const AdditionalMovieInfo = () => {
  return (
    <>
      <h3>Додаткова інформація</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default AdditionalMovieInfo;
