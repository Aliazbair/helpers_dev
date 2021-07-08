import { Header, Meta } from '../components';
import {Icons} from '../data/icon';
import Link from 'next/link'
const icons = () => {
    return (
      <div className='container'>
        <Meta title="Icons" />
        <Header
          title="Icons"
          description="Resources for Icons including png, svg and more"
        />

        <div className='row g-2'>
          {Icons.map((icon) => (
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="text-info card-text px-2">
                  <h3>{icon.title}</h3>
                </div>
                <div className="card-body">
                  <p>{icon.description}</p>
                  <img src={icon.image} alt="" />
                </div>
                <div className="card-footer">
                  <Link href={icon.url}>
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

export default icons;
