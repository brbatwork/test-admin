import {
	GET_LIST,
	GET_ONE,
	CREATE,
	fetchUtils
} from 'react-admin';

// import { stringify } from 'query-string';

const API_URL = 'http://plw9abodn3.execute-api.us-east-2.amazonaws.com/prod';

const convertDataProviderRequestToHTTP = (type, resource, params) => {
	switch (type) {
		case GET_ONE:
			return { url: `${API_URL}/${resource}/${params.id}` };
		case GET_LIST:
			return { url: `${API_URL}/${resource}/`};
		case CREATE:
			return { url: `${API_URL}/${resource}/` };
		default:
				throw new Error(`Unsupported fetch action type ${type}`);
	}
};

const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
	const { headers, json } = response;

	switch (type) {
		case GET_LIST:
			return { data: json.map(x => x),
				total: parseInt(headers.get('content-range').split('/').pop(), 10)
			}
		// case CREATE:
		// 	return { data: { ...params.data, id: json.id}};
		default:
			return { data: json };
	}
};

export default (type, resource, params) => {
	const { fetchJson } = fetchUtils;

	const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
	return fetchJson(url, options)
		.then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};