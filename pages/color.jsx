import { Header, Meta } from "../components";
import { Colors } from "../data/colors";
import styles from "../styles/grid.module.css";
import Link from "next/link";
const color = () => {
  return (
    <div className="container ">
      <Meta title="Colors" />
      <Header
        title="Colors"
        description="Websites and resources that help with choices related to colors"
      />

      <div className="row g-2">
        {Colors.map((color) => (
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header">
                <h3 className="card-title text-muted">
                  <i className="p-2 bi bi-palette text-info"></i>
                  {color.title}
                </h3>
              </div>
              <div className="card-body">
                <p>{color.description}</p>
                <img src={color.image} alt="" />
              </div>
              <div className="card-footer">
                <Link href={color.url}>
                  <a target="_blank" className="btn btn-outline-warning w-100">
                    <i className="bi bi-globe"></i> Go to WebSite
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default color;
