function searchCourses() {
    const search= document.getElementById("search-input").value.toLowerCase();
    if (search) {
      alert("Vous avez recherché : " + search);
    } else {
      alert("Veuillez entrer un terme de recherche.");
    }
  }

function redirectToW3Schools(courseName) {
  let url = "";

  switch (courseName) {
      case "Python":
          url = "https://www.w3schools.com/python/";
          break;
      case "HTML5":
          url = "https://www.w3schools.com/html/";
          break;
      case "Java":
          url = "https://www.w3schools.com/java/";
          break;
      case "C":
          url = "https://www.w3schools.com/c/";
          break;
      case "JavaScript":
          url = "https://www.w3schools.com/js/";
          break;
      case "CSS":
          url = "https://www.w3schools.com/css/";
          break;
      default:
          url = "#";
  }

  window.location.href = url;
}


document.getElementById("python-btn").addEventListener("click", () => redirectToW3Schools("Python"));
document.getElementById("html-btn").addEventListener("click", () => redirectToW3Schools("HTML5"));
document.getElementById("java-btn").addEventListener("click", () => redirectToW3Schools("Java"));
document.getElementById("c-btn").addEventListener("click", () => redirectToW3Schools("C"));
document.getElementById("js-btn").addEventListener("click", () => redirectToW3Schools("JavaScript"));
document.getElementById("css-btn").addEventListener("click", () => redirectToW3Schools("CSS"));

  