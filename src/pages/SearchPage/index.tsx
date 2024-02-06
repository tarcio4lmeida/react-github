import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

import { useState } from 'react';
import axios from 'axios';
import { Profile } from 'types/profile';

type FormData = {
  name: string;
};

const SearchPage = () => {
  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h2>Encontre um perfil Github</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="name"
                className="search-input"
                placeholder="Usuário Github"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="button-container">
                <ButtonIcon text="Encontrar" />
              </div>
            </div>
          </form>
        </div>
      </div>

      {profile && (
        <div className="result-card">
          <div className="result-card-container">
            <div className="picture-container">
              <img src={profile.avatar_url} alt={profile.name} />
            </div>
            <div className="profile-details-container">
              <h3>Informações</h3>
              <div className="profile-details-item">
                <h4>Perfil: </h4>
                <h5><a href="url">{profile.url}</a></h5>
              </div>
              <div className="profile-details-item">
                <h4>Seguidores: </h4>
                <h5>{profile.followers}</h5>
              </div>
              <div className="profile-details-item">
                <h4>Localidade: </h4>
                <h5>{profile.location}</h5>
              </div>
              <div className="profile-details-item">
                <h4>Nome: </h4>
                <h5>{profile.name}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
