/*const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");
 
checkbox.addEventListener ("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
*/

const btnEnviar = grid grid-2.getElementById('btn-grid');

const validación = (e) => {
  e.preventDefault();
  const nombre = my-form.getElementById('Nombre');
  const email = my-form.getElementById('email');
  const apellido = my-form.getElementById('Apellido')
  if (nombre.value === "") {
    alert("Por favor, escribe tu nombre");
    nombre.focus();
    return false;
  }
  if (apellido.value === "") {
    alert("Por favor, escribe tu apellido");
    apellido.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

console.log ("Bienvenido/a")