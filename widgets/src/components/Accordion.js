import React, {useState} from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // const ref = useRef();

  // // useEffect(() => {
  // //   const onBodyClick = ({target}) => {
  // //     if (ref.current.contains(target)) {
  // //       return;
  // //     }
  // //     setActiveIndex(null);
  // //   };
  // //   document.body.addEventListener('click', onBodyClick, {capture: true});

  // //   return () => {
  // //     document.body.removeEventListener('click', onBodyClick, {capture: true});
  // //   };
  // // }, []);

  const onTitleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex && 'active';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
          id={index}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
