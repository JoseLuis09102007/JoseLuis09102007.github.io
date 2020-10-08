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
  alert("Hola Esposa de Jungkook 😂😂");
  let agregado = `<div>Clic <a href = "ella.html">aqui</a> para continuar<div>`;
  document.body.innerHTML = agregado;
} else if (name === "Jose Luis") {
  alert("Hola, dueño");
} else {
  alert("Al parecer no te conozco");
}
