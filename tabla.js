fetch("productos.json")
  .then(response => response.json())
  .then(users => {
    let tableBody = "";
    users.forEach((user, index) => {
      tableBody += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
      </tr>`;
    });
    document.getElementById("tableBody_Users").innerHTML = tableBody;
  })
  .catch(error => console.error(error));


document.getElementById("input-search").addEventListener("input", onInputChange)
function onInputChange() {
  let inputText = document.getElementById("input-search").value.toString().toLowerCase();
  // console.log(inputText);
  let tableBody = document.getElementById("tableBody_Users");
  let tableRows = tableBody.getElementsByTagName("tr");
  // console.log(tableRows);
  for (let i = 0; i < tableRows.length; i++) {
    // console.log(tableRows[i].cells[1].textContent);
     let textoConsulta = tableRows[i].cells[1].textContent.toString().toLowerCase();
     if (textoConsulta.indexOf(inputText) === - 1) {
     tableRows[i].style.visibility = "collapse";
     } else{
    tableRows[i].style.visibility = "";
     }
  }

}

$(document).ready(function () {
  $('#tableBody_Users').DataTable();
});





  




