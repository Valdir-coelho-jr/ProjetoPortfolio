// Get the element where the year will be displayed
const copyrightElement = document.getElementById("copyright");

// Get the current year
const anoAtual = new Date().getFullYear();

// Update the content inside the tag with the current year
copyrightElement.innerHTML = "Copyright &copy; " + anoAtual + " Valdir Coelho Junior | Todos os Direitos Reservados.";
