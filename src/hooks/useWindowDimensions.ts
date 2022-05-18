import { RefObject, useState, useEffect } from 'react';

interface IWindowDimensions {
  height: number;
  width: number;
}
function getWindowDimensions(ref: RefObject<HTMLElement>): IWindowDimensions {
  let width = window?.innerWidth;
  let height = window?.innerHeight;
  if (ref?.current) {
    width = ref.current.clientWidth;
    height = ref.current.clientHeight;
  }
  return {
    width,
    height
  };
}

export default function useWindowDimensions(ref: RefObject<HTMLElement>): IWindowDimensions {
  const [ windowDimensions, setWindowDimensions ] = useState<IWindowDimensions>( getWindowDimensions(ref) );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions( getWindowDimensions(ref) );
    }

    window.addEventListener( 'resize', handleResize );
    return () => window.removeEventListener( 'resize', handleResize );
  }, []);

  return windowDimensions;
}
