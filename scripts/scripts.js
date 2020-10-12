alert("Estas ingresando a la pagina web de Jose Luis");
let name = prompt("Ingresa tu primer nombre");

if (name === "Alexis" || name === "alexis") {
  alert("Hola amigo de Jose Luis");
} else if (
  name === "Melany" ||
  name == "melany" ||
  name === "melani" ||
  name == "Melany"
) {
  let confirmacion = confirm('¿Eres Melany Fiorella de la Cruz Olivera?')
  if(confirmacion === true) {  
    alert("Hola Fiorella D'c kookie");
    let agregado = `<div>Clic <a href = "ella.html" class = "enlaceElla">aqui</a> para la pagina creada para ti<div>`;
    document.body.innerHTML = agregado;}
}
 else if (name === "Jose Luis") {
    alert("Hola, dueño");
}
 else {
    alert("Al parecer no te conozco");
}
