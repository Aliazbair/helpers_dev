import { Header, Meta } from '../components'
import { Fonts } from '../data/fonts'
import Link from 'next/link'

const fonts = () => {
  return (
    <div className="container">
      <Meta title="Fonts" />
      <Header
        title="Fonts"
        description="Websites that offer free fonts as well as font-based tools"
      />

      <div className="row g-2">
        {Fonts.map((font, i) => (
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 bg-dark text-light">
              <div className="card-header">
                <h3 className='card-title text-muted'><i className='p-2 bi bi-fonts text-info'></i>{font.title}</h3>
              </div>
             
              <div className="card-body">
                <p>{font.description}</p>
                <img src={font.image} alt="" />
              </div>
              <div className="card-footer">
                <Link href={font.url}>
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
}

export default fonts
