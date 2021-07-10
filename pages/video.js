import { Header, Meta } from '../components'
import { Videos } from '../data/videos'
import Link from 'next/link'
const video = () => {
  return (
    <div className="container">
      <Meta title="Viedos" />
      <Header
        title="Videos"
        description="Websites that offer free stock videos of all kinds for your websites and apps"
      />

      <div className="row g-2">
        {Videos.map((video, i) => (
          <div key={i} className="col-lg-4 col-md-6">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header">
                <h3 className="card-title text-muted"><i className='p-2 bi bi-play-btn text-info'></i>{video.title}</h3>
              </div>
              <div className="card-body">
                <p>{video.description}</p>
                <img src={video.image} alt="" />
              </div>
              <div className="card-footer">
                <Link href={video.url}>
                  <a target="_blank" className="btn btn-outline-warning w-100">
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

export default video
