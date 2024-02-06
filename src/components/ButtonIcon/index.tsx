import './styles.css';
import { NavLink } from 'react-router-dom';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <div className="btn-container button">
        <button className="btn btn-primary">
          <h6>{text}</h6>
        </button>
      </div>
    </div>
  );
};

export default ButtonIcon;
