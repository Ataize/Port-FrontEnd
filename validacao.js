function validarDados() {
	window.event.preventDefault()

	if(document.form.nome.value == "") {
		alert("Campo é obrigatório")
		document.form.nome.focus()
	}
}
document.querySelector("form").addEventListener("submit", validarDados)