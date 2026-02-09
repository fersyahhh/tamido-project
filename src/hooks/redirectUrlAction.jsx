export function RedirectUrlAction() {
  function redirectToWA() {
    const phone = "6287885718594";
    window.open(`https://wa.me/${phone}`, "_blank");
  }

  return { redirectToWA };
}
