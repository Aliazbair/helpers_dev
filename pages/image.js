import {Photos} from '../data/phtots';
import Link from 'next/link'
import {Header, Meta} from "../components";
const image = () => {
    return (
      <div className='container'>
        <Meta title="Images" />
        <Header
          title="Images"
          description="Websites that offer free stock photos of all kinds for your websites and apps"
        />

        <div className='row g-2'>
          {Photos.map((photo) => (
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <div className="text-info card-text px-2">
                  <h3>{photo.title}</h3>
                </div>
                <div className="card-body">
                  <p>{photo.description}</p>
                  <img src={photo.image} alt="" />
                </div>
                <div className="card-footer">
                  <Link href={photo.url}>
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

export default image;
