function searchLocation(text, proximity) {
  const body = JSON.stringify({
    text,
    proximity,
  });
  return fetch('/locations/search', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default searchLocation;
