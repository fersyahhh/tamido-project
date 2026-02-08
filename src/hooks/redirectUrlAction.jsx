export function RedirectUrlAction() {
  const redirectToIG = () => {
    const username = "tamindo_project";
    const appUrl = `instagram://user?username=${username}`;
    const webUrl = `https://www.instagram.com/${username}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appUrl;

      setTimeout(() => {
        window.location.href = webUrl;
      }, 2000);
    } else {
      window.open(webUrl, "_blank");
    }
  };

  function redirectToWA() {
    const phone = "6287885718594";
    window.open(`https://wa.me/${phone}`, "_blank");
  }

  return { redirectToIG, redirectToWA };
}
