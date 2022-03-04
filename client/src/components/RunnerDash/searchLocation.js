import axios from 'axios';

function searchLocation(text, proximity, type) {
  const body = {
    text,
    proximity,
    type,
    country: 'US',
  };
  return axios.post('/locations/search', body);
}

export default searchLocation;
