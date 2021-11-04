import React, {useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Portuguese',
    value: 'pt',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Text</label>
          <input
            value={text}
            onChange={({target: {value}}) => setText(value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
