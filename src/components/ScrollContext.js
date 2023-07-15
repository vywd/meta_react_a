import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext(0);

const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={scrollY}>
      {children}
    </ScrollContext.Provider>
  );
};

const useScroll = () => useContext(ScrollContext);

export { ScrollProvider, useScroll };