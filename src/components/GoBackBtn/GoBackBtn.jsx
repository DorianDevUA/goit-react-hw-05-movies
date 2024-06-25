import { StyledLink } from './GoBackBtn.styled';

const GoBackBtn = ({ location }) => {
  return <StyledLink to={location}>← Go back</StyledLink>;
};

export default GoBackBtn;
