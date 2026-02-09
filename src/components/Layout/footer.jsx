const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      <div className="container px-8 py-20">
        <div>
          <h1 className="font-montserrat text-3xl font-bold text-white uppercase md:text-4xl">
            Tamindo
          </h1>
          <p className="text-light/50 font-inter mt-6 mb-8 text-sm md:max-w-[50%] md:text-base">
            A story-driven interior design practice dedicated to creating spaces
            that reflect the soul of its inhabitants.
          </p>
          <a
            href="https://www.instagram.com/tamindo_project/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs font-bold tracking-[0.2rem] text-white uppercase hover:text-white/80"
          >
            Instagram
          </a>
        </div>

        <hr className="mt-25 text-white/30" />

        <div className="justify-between md:flex">
          <p className="text-light/40 font-inter mt-15 text-[0.6rem] font-semibold tracking-[0.2rem] uppercase">
            © {year} Tamindo Project. All rights reserved.
          </p>
          <div className="text-light/40 font-inter mt-10 flex items-center justify-center gap-8 text-[0.6rem] font-semibold tracking-[0.2rem] uppercase">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
