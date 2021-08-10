import axios from 'axios';
import reduxjs from 'redux-js';
import api_github  from './endpoints';

export async function get(url, params={}){

  //loader es para habilitar el component loader
  redux.push('loader', true);
  let data = null;
  try {
    const response = await axios.get(url, { params });
    data = response.data;
  } catch (ex) {
     let error = null;
      if (ex.request) {
        error = {message:'Error en Conexión', code:'404'};
      }
    else {
        error = {message:ex.message, code:'500'};
    }
    redux.push('errors', [error]);
    console.error(error);
  }
  redux.push('loader', false);
  return data;
}

export const redux = reduxjs;

export const api = api_github;


