import { Header, Meta } from '../components';
import {Logos} from '../data/logo';
import Link from 'next/link'
const logo = () => {
    return (
      <div className='container'>
        <Meta title="Logos" />
        <Header title="Logos" description="Resources for Logos" />

        <div className='row g-2'>
          {Logos.map((logo) => (
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="text-info card-text px-2">
                  <h3>{logo.title}</h3>
                </div>
                <div className="card-body">
                  <p>{logo.description}</p>
                  <img src={logo.image} alt="" />
                </div>
                <div className="card-footer">
                  <Link href={logo.url}>
                    <a
                      target="_blank"
                      className="btn btn-outline-primary w-100"
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

export default logo;
