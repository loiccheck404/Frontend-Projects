document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("cookieConsent")) {
    document.getElementById("cookieConsent").style.display = "block";
  }
});

/*function closeCookieConsent() {
  document.getElementById("cookieConsent").style.display = "none";
  sessionStorage.setItem("cookieConsent", "true");
}
closeCookieConsent();*/
document.getElementById("acceptCookies").addEventListener("click", function () {
  sessionStorage.setItem("cookieConsent", "true");
  document.getElementById("cookieConsent").style.display = "none";
});

document.getElementById("closeCookie").addEventListener("click", function () {
  document.getElementById("cookieConsent").style.display = "none";
});
