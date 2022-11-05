window.addEventListener("DOMContentLoaded", verifyLogin);

// verifyLogin
function verifyLogin() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userType = JSON.parse(sessionStorage.getItem("userType"));
  if (user == null) {
    location.href = "../pages/signup.html";
  } else {
    if (userType == "tenant" && location.pathname == "/pages/landlord-home.html") {
      location.href = "../pages/tenant-home.html";
    } else if (userType == "landlord" && location.pathname == "/pages/tenant-home.html") {
      location.href = "../pages/landlord-home.html";
    }
  }
}
