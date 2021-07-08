import Link from "next/link";

const Linkes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Colors",
    url: "/color",
  },
  {
    name: "Icons",
    url: "/icon",
  },
  {
    name: "Images",
    url: "/image",
  },
  {
    name: "Fonts",
    url: "/fonts",
  },
  {
    name: "Logo",
    url: "/logo",
  },
  {
    name: "UI",
    url: "/ui",
  },
  {
    name: "Videos",
    url: "/video",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand ">Helpers</a>
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
                    {link.name}
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
