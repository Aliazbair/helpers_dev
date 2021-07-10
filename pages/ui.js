import { Header,Meta } from '../components';
import {Ui} from '../data/Ui';
import Link from 'next/link'
const ui = () => {
    return (
      <div className="container">
        <Meta title="UI" />
        <Header
          title="UI"
          description="Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI"
        />

        <div className="row g-2">
          {Ui.map((ui, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="card h-100 bg-dark text-light">
                <div className="card-header">
                  <h3 className="card-title text-muted">{ui.title}</h3>
                </div>
                <div className="card-body">
                  <p>{ui.description}</p>
                  <img src={ui.image} alt="" />
                </div>
                <div className="card-footer">
                  <Link href={ui.url}>
                    <a
                      target="_blank"
                      className="btn btn-outline-warning w-100"
                    >
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
}

export default ui
