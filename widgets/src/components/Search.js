import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Search() {
  const [term, setTerm] = useState(' ');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 600);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const searchWikipedia = async () => {
      const {
        data: {
          query: {search},
        },
      } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(search);
    };
    searchWikipedia();
  }, [debouncedTerm]);

  function handleChange(value) {
    setTerm(value);
  }

  const renderedResults = results.map(({title, snippet, pageid}) => {
    return (
      <div key={pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <span dangerouslySetInnerHTML={{__html: snippet}}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={({target: {value}}) => handleChange(value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}
