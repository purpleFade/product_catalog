import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      data-cy="backButton"
      type="button"
      className="BackButton"
      onClick={() => navigate('../')}
    >
      <div className="icon icon--left" />
      Back
    </button>
  );
};
