document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("./php/check_user.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          fetch("./php/update_password.php", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.text())
            .then((text) => {
              document.getElementById("responseMessage").textContent = text;
            })
            .catch((error) => {
              console.error("Error:", error);
              document.getElementById("responseMessage").textContent =
                "Error updating password.";
            });
        } else {
          document.getElementById("responseMessage").textContent =
            "Username does not exist.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("responseMessage").textContent =
          "Error checking username.";
      });
  });
