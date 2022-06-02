import { useEffect, useState } from 'react';
import './../main.scss';

const Universities = (props) => {
  const [universities, setUniversities] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setUniversities('');
    if (props.searchValue.length > 0) {
      requestUniversities();
      async function requestUniversities() {
        const res = await fetch(
          `http://universities.hipolabs.com/search?country=${props.searchValue}`
        );

        const json = await res.json();

        if (json.length > 0) {
          setUniversities(json);
        } else {
          setError(true);
        }
      }
    }
  }, [props]);

  if (universities.length > 0) {
    return (
      <div className='body-main'>
        {universities.map((university, index) => {
          return (
            <div className='listCard' key={university.name + index}>
              {university.name}
            </div>
          );
        })}
      </div>
    );
  } else {
    if (error) {
      return <div>Enter an actual country dumbo!</div>;
    } else {
      return <div>Enter a country weirdo!</div>;
    }
  }
};

export default Universities;
