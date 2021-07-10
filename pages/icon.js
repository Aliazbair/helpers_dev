import { Header, Meta } from '../components';
import {Icons} from '../data/icon';
import Link from 'next/link'
const icons = () => {
    return (
      <div className="container">
        <Meta title="Icons" />
        <Header
          title="Icons"
          description="Resources for Icons including png, svg and more"
        />

        <div className="row g-2">
          {Icons.map((icon) => (
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 bg-dark text-light ">
                <div className="card-header">
                  <h3 className="card-title text-muted">{icon.title}</h3>
                </div>
                <div className="card-body ">
                  <p>{icon.description}</p>
                  <img src={icon.image} alt="" />
                </div>
                <div className="card-footer">
                  <Link href={icon.url}>
                    <a
                      target="_blank"
                      className="btn btn-outline-warning w-100"
                    >
                      Go to WebSite
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default icons;
