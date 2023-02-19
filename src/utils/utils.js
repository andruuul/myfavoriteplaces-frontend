import { useEffect } from 'react';

const OnWindowEvt = (evt, callback) => {
  useEffect(() => {
    window.addEventListener(evt, callback);
    return () => window.removeEventListener(evt, callback);
  }, [evt, callback]);
};

export { OnWindowEvt };