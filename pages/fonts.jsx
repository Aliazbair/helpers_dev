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

      <div className='row g-2'>
        {Fonts.map((font, i) => (
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <div className="text-info card-text px-2">
                <h3>{font.title}</h3>
              </div>
              <div className="card-body">
                <p>{font.description}</p>
                <img src={font.image} alt="" />
              </div>
              <div className="card-footer">
                <Link href={font.url}>
                  <a target="_blank" className="btn btn-outline-primary w-100">
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

export default fonts
