import { Link } from 'react-router-dom';

const AdditionalMovieInfo = () => {
  return (
    <>
      <div>Додаткова інформація</div>
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
