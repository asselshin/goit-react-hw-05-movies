import { Link, Outlet } from 'react-router-dom';
import { imageURL } from 'movie-api';
import { useLocation } from 'react-router-dom';
import {
  ImageDiv,
  MainSection,
  ImageContainer,
  TextContainer,
  SecondarySection,
} from './MovieInfo.styled';

export default function MovieInfo({
  movie: {
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  },
}) {
  const location = useLocation();

  return (
    <div>
      <Link to={location.state?.from ?? '/movies'}>Go back</Link>
      <MainSection>
        <ImageContainer>
          <ImageDiv src={`${imageURL}/${poster_path}`} alt={original_title} />
        </ImageContainer>
        <TextContainer>
          <h1>
            {original_title} ({release_date.split('-')[0]})
          </h1>
          <p>User Score: {parseInt(vote_average * 10)}% </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genres => `${genres.name} `)} </p>
        </TextContainer>
      </MainSection>

      <SecondarySection>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </SecondarySection>
      <Outlet />
    </div>
  );
}
