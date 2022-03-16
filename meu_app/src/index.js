import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function formatarNome(usuario){
  return usuario.firstname + ' ' + usuario.lastname;
}
const usuario = {
  firstname: 'may',
  lastname: 'marques',
  idade:'18'
};


const element = <h1>Olá, {formatarNome(usuario)}!</h1>;
ReactDOM.render(
  element,document.getElementById('root')
  );