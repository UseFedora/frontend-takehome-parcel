import { stripLow, escape } from 'validator';
import Constants from '../common/constants';

const _buildRequest = (query) => {
  const { HOST, PORT, ENDPOINT_PATH, QUERY_KEY } = Constants.GemsApi;
  const cleanQuery = _cleanUserInput(query);
  return `${HOST}:${PORT}${ENDPOINT_PATH}?${QUERY_KEY}=${cleanQuery}`;
};

const _cleanUserInput = (input) => escape(stripLow(input.trim(), false));

const _pluckFields = (data) => {
  return data.map((record) => {
    const {
      name,
      version,
      authors,
      downloads,
      info,
      licenses,
      project_uri,
      gem_uri,
      homepage_uri,
      documentation_uri,
    } = record;
    return {
      name,
      version,
      authors,
      downloads,
      info,
      licenses,
      project_uri,
      gem_uri,
      homepage_uri,
      documentation_uri,
    };
  });
};

const fetchGems = (search) => {
  return fetch(_buildRequest(search))
    .then((response) => response.json())
    .then((json) => {
      return _pluckFields(json);
    })
    .catch((error) => error);
}

export default {  
  fetchGems,
};
