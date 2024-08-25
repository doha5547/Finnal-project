
document.getElementById("newpassward").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("userForm").style.display = "block";
});

document.getElementById("show-signup").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("userForm").style.display = "none";
});

document.getElementById("show-login").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("userForm").style.display = "none";
});

document.getElementById("show-login2").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("userForm").style.display = "none";
});





/*-------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownMenuButton");
  const radios = document.querySelectorAll(
    '.dropdown-menu input[type="radio"]'
  );

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const selectedRadio = Array.from(radios).find((r) => r.checked);
      dropdownButton.textContent = selectedRadio
        ? selectedRadio.nextElementSibling.textContent
        : "Select Department";
    });
  });
});




 
