function searchLocation(text, proximity, type) {
  const body = JSON.stringify({
    text,
    proximity,
    type,
    country: 'US',
  });
  return fetch('/locations/search', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default searchLocation;
