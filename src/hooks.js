import { useState, useEffect } from 'react';

export function useDateByTimezone(offsetSeconds) {
  const now = Date.now();

  const utc = now + new Date().getTimezoneOffset() * 60 * 1000;

  return new Date(utc + offsetSeconds * 1000);
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);

    listener();
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
