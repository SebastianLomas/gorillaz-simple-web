import React from 'react';
import Header from './components/header'
import Hero from './components/hero'
import Card from './components/card'
import characters from './components/character'
import './App.css';

function App() {
  return (
    <article className="body">
      <Header></Header>
      <Hero></Hero>
      <Card
      id={characters[0].id}
       pic={characters[0].img}
       name={characters[0].name}
       lastName={characters[0].lastName}
       nickName={characters[0].nickName}
       age={characters[0].age}
       description={characters[0].description}
       url={characters[0].url}
      />
      <Card
      id={characters[1].id}
       pic={characters[1].img}
       name={characters[1].name}
       lastName={characters[1].lastName}
       nickName={characters[1].nickName}
       age={characters[1].age}
       description={characters[1].description}
       url={characters[1].url}
      />
      <Card
      id={characters[2].id}
       pic={characters[2].img}
       name={characters[2].name}
       lastName={characters[2].lastName}
       nickName={characters[2].nickName}
       age={characters[2].age}
       description={characters[2].description}
       url={characters[2].url}
      />
      <Card
      id={characters[3].id}
       pic={characters[3].img}
       name={characters[3].name}
       lastName={characters[3].lastName}
       nickName={characters[3].nickName}
       age={characters[3].age}
       description={characters[3].description}
       url={characters[3].url}
      />
    </article>
  );
}

export default App;
