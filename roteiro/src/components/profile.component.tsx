import React from 'react';
import styles from './App.scoped.css'; // Importando o CSS Module

// Definindo a interface para as propriedades do Profile
interface ProfileProps {
  name: string;
  imageUrl: string;
}

// Componente Profile
const Profile = ({ name, imageUrl }: ProfileProps) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

// Componente App
const App = () => {
  return (
    <div className={styles.container}> {/* Usando CSS Module aqui */}
      <h1 className={styles.title}>Hello, World!</h1>
      <Profile
        name="Katherine Johnson"
        imageUrl="https://i.imgur.com/MK3eW3Am.jpg"
      />
      <Profile
        name="Dorothy Vaughan"
        imageUrl="https://i.imgur.com/7vQD0fPs.jpg"
      />
      <Profile
        name="Mary Jackson"
        imageUrl="https://i.imgur.com/Z9SnKhp.jpg"
      />
    </div>
  );
}

export default App;
