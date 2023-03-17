const Footer = () => {
  return (
    <footer className="mt-8 flex h-24 w-full flex-col items-center justify-center gap-2 bg-[#FF5400] p-4">
      <h1>Connect with us</h1>
      <div className="flex justify-center gap-4 text-white">
        <a
          href="https://www.youtube.com/c/KoulTime"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          YouTube
        </a>
        <a
          href="https://www.instagram.com/koul_time/"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@koul_time"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          Tiktok
        </a>
        <a
          href="https://www.facebook.com/KoulTimeTV"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          Facebook
        </a>
        <a
          href="mailto:contact.koultime@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="transition-all hover:underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
