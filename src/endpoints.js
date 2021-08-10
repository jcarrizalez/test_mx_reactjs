import { get, redux } from './services';

var res;
var url = process.env['REACT_APP_APIGIT'];

export default async function request(key_redux, params){

	let { username, repository } = params;
	try {
		//######## PEGADAS SIN ROUTER #####
		switch (key_redux) {
	        case 'repositories_username':
	        	res = await get(`${url}/users/${username}/repos`);
	        	redux.push(key_redux, res??[]);
	        	break;
	        case 'repository':
	        	res = await get(`${url}/repos/${username}/${repository}`);
	        	redux.push(key_redux, res??{});
	        	break;
	        default:
	        	break;
	    }
	}
	catch (error) {
	  console.error('PEGADAS SIN ROUTER', error);
	}
}