export function ghPrefix() {
  return process.env.NODE_ENV === 'production' ? '/eventstorage.github.io' : '';
}
