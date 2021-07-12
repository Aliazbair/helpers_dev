import Link from "next/link";
import Image from "next/image";
import { Header } from "../components";
import Carousel from '../components/Carousel'
const HomePages = [
  {
    title: "Colors",
    url: "/color",
    description:
      "Websites and resources that help with choices related to colors",
    image: "/image/colors.jpg",
  },
  {
    title: "Fonts",
    url: "/fonts",
    description: "Websites that offer free fonts as well as font-based tools",
    image: "/image/fonts.jpg",
  },
  {
    title: "Icons",
    url: "/icon",
    description: "Resources for Icons including png, svg and more",
    image: "/image/icons.jpg",
  },
  {
    title: "UI",
    url: "/ui",
    description:
      "Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI",
    image: "/image/ui.jpg",
  },
  {
    title: "Images",
    url: "/image",
    description:
      "Websites that offer free stock photos of all kinds for your websites and apps",
    image: "/image/image.jpg",
  },
  {
    title: "Logos",
    url: "/logo",
    description: "Resources for Logos",
    image: "/image/logo.jpg",
  },
  {
    title: "Videos",
    url: "/video",
    description:
      "Websites that offer free stock videos of all kinds for your websites and apps",
    image: "/image/viedo.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Carousel/>
  
    <div className="container mt-5">
      {/* <Header title="home page" description="this is home page" /> */}
      <div className="row g-1">
        {HomePages.map((p, i) => (
          <>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div class="card h-100 text-white bg-info mb-3">
                <Image src={p.image} class="card-img-top" width="" height='' alt={p.title} />
                <div class="card-body">
                  <h5 class="card-title">{p.title}</h5>
                  <p class="card-text">{p.description}</p>
                </div>
                <div className="card-footer">
                  <Link href={p.url}>
                    <a
                     
                      className="btn btn-dark w-100"
                    >
                      <i className="bi bi-eye-fill"></i> View
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
    </>
  );

}
