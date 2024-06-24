const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ profile_path, id, name, character }) => {
        const profileImg = profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : 'https://placehold.co/120x180';

        return (
          <li key={id}>
            <div>
              <img src={profileImg} alt={name} width={120} />
              <div>
                <h4>{name}</h4>
                <p>У ролі: {character}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
