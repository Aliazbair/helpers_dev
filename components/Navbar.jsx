import Link from "next/link";

const Linkes = [
  {
    name: "Home",
    url: "/",
    icon: "bi bi-house text-info",
  },
  {
    name: "Colors",
    url: "/color",
    icon: "bi bi-palette text-info",
  },
  {
    name: "Icons",
    url: "/icon",
    icon:'bi bi-book text-info'
  },
  {
    name: "Images",
    url: "/image",
    icon:'bi bi-image text-info'
  },
  {
    name: "Fonts",
    url: "/fonts",
    icon:'bi bi-fonts text-info'
  },
  {
    name: "Logo",
    url: "/logo",
    icon:'bi bi-badge-wc text-info'
  },
  {
    name: "UI",
    url: "/ui",
    icon:'bi bi-ui text-info'
  },
  {
    name: "Videos",
    url: "/video",
    icon:'bi bi-play-btn text-info'
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand "><i className='bi bi-info-square-fill'></i> Helpers</a>
          </Link>
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              {Linkes.map((link,i) => (
                <li key={i} className="nav-item">
                  <Link href={link.url}>
                  <a className="nav-link">
                   <i className={link.icon}></i> {link.name}
                  </a>

                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
