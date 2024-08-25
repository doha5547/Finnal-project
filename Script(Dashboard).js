document.addEventListener("DOMContentLoaded", function () {

  const dropdownButton1 = document.getElementById("dropdownMenuButton");
  const dropdownMenuList1 = document.getElementById("dropdownMenuList");
  const dropdownButton2 = document.getElementById("dropdownMenuButton2");
  const dropdownMenuList2 = document.getElementById("dropdownMenuList2");
  const dropdownButton3 = document.getElementById("dropdownMenuButton3");
  const dropdownMenuList3 = document.getElementById("dropdownMenuList3");
  const dropdownButton4 = document.getElementById("dropdownMenuButton4");
  const dropdownMenuList4 = document.getElementById("dropdownMenuList4");

  function updateDropdownText(button, menuList) {
    const selectedRadio = menuList.querySelector('input[type="radio"]:checked');
    button.textContent = selectedRadio
      ? selectedRadio.nextElementSibling.textContent
      : button.getAttribute("data-default-text");
  }

  function setupDropdowns() {
    dropdownMenuList1.addEventListener("change", () =>
      updateDropdownText(dropdownButton1, dropdownMenuList1)
    );
    dropdownMenuList2.addEventListener("change", () =>
      updateDropdownText(dropdownButton2, dropdownMenuList2)
    );
    dropdownMenuList3.addEventListener("change", () =>
      updateDropdownText(dropdownButton3, dropdownMenuList3)
    );
    dropdownMenuList4.addEventListener("change", () =>
      updateDropdownText(dropdownButton4, dropdownMenuList4)
    );
  }

  setupDropdowns();

  function fetchCourses() {
    fetch("/FinalProject (StudyTrack)/php/courses.php")
      .then((response) => response.json())
      .then((data) => {
        const dropdownMenuList1 = document.getElementById("dropdownMenuList");

        dropdownMenuList1.innerHTML = "";

        data.forEach((course) => {
          const uniqueId = `course_${course.code}`;

       
          const li1 = document.createElement("li");
          li1.innerHTML = `
                    <input type="radio" id="${uniqueId}" name="course_code1" value="${course.code}" required>
                    <label for="${uniqueId}" class="dropdown-item" data-code="${course.code}" data-hours="${course.hours}">${course.name}</label>
                `;
          li1.addEventListener("click", () => {
            document.getElementById("createCourseCode").value = course.code;
            document.getElementById("createCourseName").value = course.name;
            document.getElementById("createCourseHours").value = course.hours;
            dropdownButton1.textContent = course.name;
          });
          dropdownMenuList1.appendChild(li1);
        });
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }

  function fetchCoursesForEdit() {
    fetch("../FinalProject (StudyTrack)/php/read.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched for edit:", data); 
      })
      .catch((error) =>
        console.error("Error fetching courses for edit:", error)
      );
  }

  fetchCourses();
  fetchCoursesForEdit();

  fetchCourses();

  function setupGPASelection() {
    const gpaButtons2 = document.querySelectorAll(
      '#dropdownMenuList2 input[type="radio"]'
    );
    const gpaButtons4 = document.querySelectorAll(
      '#dropdownMenuList4 input[type="radio"]'
    );

    gpaButtons2.forEach((button) => {
      button.addEventListener("change", () => {
        const selectedGPA = button.value;
        document.getElementById("createGPA").value = selectedGPA;
        dropdownButton2.textContent = button.nextElementSibling.textContent;
      });
    });

    gpaButtons4.forEach((button) => {
      button.addEventListener("change", () => {
        const selectedGPA = button.value;
        document.getElementById("editGPA").value = selectedGPA;
        dropdownButton4.textContent = button.nextElementSibling.textContent;
      });
    });
  }

  setupGPASelection();

  function updateTable() {
    fetch("../FinalProject (StudyTrack)/php/read.php")
      .then((response) => response.json())
      .then((data) => {
        const tableBody = document.querySelector("#subjectsTable tbody");
        tableBody.innerHTML = "";

        data.forEach((subject) => {
          const row = document.createElement("tr");
          row.innerHTML = `

            <td>${subject.Code}</td>
            <td>${subject.Subject}</td>
            <td>${subject.Grade}</td>
            <td>${subject.Hours}</td>
          `;
          row.addEventListener("click", function () {
            EditData(
              subject.id,
              subject.Code,
              subject.Subject,
              subject.Grade,
              subject.Hours
            );
            const editModal = new bootstrap.Modal(
              document.getElementById("modalCenter_Edit")
            );
            editModal.show();
          });
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error loading subjects:", error));
  }

  function EditData(id, code, subject, grade, hours) {
    document.getElementById("editCourseId").value = id;
    document.getElementById("editCourseCode").value = code;
    document.getElementById("editCourseName").value = subject;
    document.getElementById("editCourseHours").value = hours;
    dropdownButton3.textContent = subject;
    document.getElementById("editGPA").value = grade;

    const gpaOptions = document.getElementsByName("GPA");
    gpaOptions.forEach((option) => {
      if (option.value === grade) {
        option.checked = true;
      }
    });
  }

  updateTable();

  function calculateGPA() {
    fetch("../FinalProject (StudyTrack)/php/read.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error("Error:", data.error);
        } else {
          let totalHours = 0;
          let successfulCourses = 0;
          let totalGradePoints = 0;

          data.forEach((course) => {
            if (course.Hours && course.Grade) {
              totalHours += course.Hours;

              if (course.Grade !== "F") {
                successfulCourses++;
              }

              let gradePoints = 0;
              switch (course.Grade) {
                case "A":
                  gradePoints = 4.0;
                  break;
                case "B":
                  gradePoints = 3.0;
                  break;
                case "C":
                  gradePoints = 2.5;
                  break;
                case "D":
                  gradePoints = 2.0;
                  break;
                case "F":
                  gradePoints = 0.0;
                  break;
                default:
                  console.warn(`Unexpected grade: ${course.Grade}`);
                  break;
              }
              totalGradePoints += gradePoints * course.Hours;
            } else {
              console.warn("Course data missing Hours or Grade");
            }
          });

          const gpa =
            totalHours > 0 ? (totalGradePoints / totalHours).toFixed(2) : 0.0;

          document.querySelector(".gpa").textContent = gpa;
          document.querySelector(".num-subjects").textContent = data.length;
          document.querySelector(".total-hours").textContent = totalHours;
          document.querySelector(".successful-courses").textContent =
            successfulCourses;
        }
      })
      .catch((error) => console.error("Error calculating GPA:", error));
  }

  calculateGPA();

  function handleDeleteCourse() {
    const removeButton = document.getElementById("deleteButton");

    removeButton.addEventListener("click", function () {
      const courseId = document.getElementById("editCourseId").value;

      if (!courseId) {
        alert("Please select a course to delete.");
        return;
      }

      if (confirm("Are you sure you want to delete this course?")) {
        fetch("./php/delete.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            course_id: courseId,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") {
              location.reload();
            } else {
              alert("Failed to delete course: " + data.message);
            }
          })
          .catch((error) => {
            console.error("Error deleting course:", error);
            alert("An error occurred while deleting the course.");
          });
      }
    });
  }

 
  fetchCoursesForEdit(); 
  handleDeleteCourse();

  const tableContainer = document.querySelector(".table-container");
  let isDragging = false;
  let startY;
  let isRowClicked = false; 

  function onMouseMove(event) {
    if (isDragging) {
   
      const deltaY = event.pageY - startY;
      tableContainer.scrollTop -= deltaY;

  
      startY = event.pageY;
    }
  }

  function onMouseUp() {
    if (isDragging) {
      isDragging = false;
      tableContainer.style.cursor = "grab"; 
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    } else if (isRowClicked) {
      console.log("Row clicked");
      isRowClicked = false; 
    }
  }

  tableContainer.addEventListener("mousedown", function (event) {
    isDragging = true;
    startY = event.pageY - tableContainer.scrollTop; 
    tableContainer.style.cursor = "grabbing"; 
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });


  document.querySelectorAll(".table tr").forEach((row) => {
    row.addEventListener("mousedown", function (event) {
      isRowClicked = !isDragging; 
      if (!isDragging) {
        event.preventDefault(); 
      }
    });
  });

  tableContainer.style.cursor = "grab"; 
});
