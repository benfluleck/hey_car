/* eslint-disable no-undef */
import { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const OnlineStatusContext = createContext(true);

export const OnlineStatusProvider = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });
    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener('offline', () => {
        setOnlineStatus(false);
      });
      window.removeEventListener('online', () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>{children}</OnlineStatusContext.Provider>
  );
};

OnlineStatusProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useOnlineStatus = () => {
  const store = useContext(OnlineStatusContext);
  return store;
};
