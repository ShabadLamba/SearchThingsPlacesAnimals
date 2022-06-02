import { useEffect, useState } from 'react';

const Jokes = () => {
  const [jokes, setJokes] = useState('');

  useEffect(() => {
    requestJokes();
  }, [jokes]);

  async function requestJokes() {
    const res = await fetch(`official-joke-api.appspot.com/random_joke`);

    const json = await res.json();

    setJokes(json);
  }

  return <div>{jokes}</div>;
};

export default Jokes;
