const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //No se estaba llamando correctamente a la clase name, debido a que no tenía el punto (.)
const $b = document.querySelector('.blog');//No se estaba llamando correctamente a la clase blog, debido a que tenía un #
const $l = document.querySelector('.location');

async function displayUser(username) { //esta funcion tiene un await, pero no tiene el "async"
 $n.textContent = 'cargando...';
 const response = await fetch(`${usersEndpoint}/${username}`);//Se declara response pero no se utiliza
const data = await response.json(); //usamos el response y el data del objeto llamado con el fetch, que queremos imprimir en consola
console.log(data);
$n.textContent = `${data.name}`; //Se imprimía el texto en la página por usar comillas simples y no backticks
$b.textContent = `${data.blog}`;
$l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}


displayUser('stolinski').catch(handleError);