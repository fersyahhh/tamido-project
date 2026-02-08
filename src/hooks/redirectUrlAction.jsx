export function RedirectUrlAction() {
  function redirectToIG() {
    const username = "tamindo_project";
    window.open(`https://www.instagram.com/${username}`, "_blank");
  }

  function redirectToWA() {
    const phone = "6287885718594";
    window.open(`https://wa.me/${phone}`, "_blank");
  }

  return { redirectToIG, redirectToWA };
}
