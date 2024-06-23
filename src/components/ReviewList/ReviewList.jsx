const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <div>
              <h4>{author}</h4>
              <p>{content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewList;
