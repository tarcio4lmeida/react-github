import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <h2>Desafio Github API</h2>
          <h3>DevSuperior - Escola de programação</h3>
          <div className="button-container">
            <NavLink to="/search">
              <ButtonIcon text="Começar" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
