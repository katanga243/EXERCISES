import { useRef, useEffect } from 'react';

// Under React.StrictMode in development, effects run twice on mount. We use a ref
// (hasMounted) as a flag that persists across renders WITHOUT triggering a
// re-render, so the message is printed only the FIRST time the component mounts.
function MountLogger() {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      console.log('MountLogger mounted for the first time');
    }
  }, []);

  return <p>Check the console: the mount message prints only once.</p>;
}

export default MountLogger;
