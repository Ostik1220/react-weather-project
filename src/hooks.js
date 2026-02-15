export function useDateByTimezone(offsetSeconds) {
  const now = Date.now();

  const utc = now + new Date().getTimezoneOffset() * 60 * 1000;

  return new Date(utc + offsetSeconds * 1000);
}
