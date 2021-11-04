import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
  const [translation, setTranslation] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedText(text);
    }, 600);

    return () => {
      clearTimeout(id);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const {data} = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslation(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <div className="ui header">{translation}</div>
    </div>
  );
};

export default Convert;
