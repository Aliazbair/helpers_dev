import Link from 'next/link'
import {Header} from "../components";
const HomePages = [
  {
    title: "Colors",
    url: "/color",
    description:
      "Websites and resources that help with choices related to colors",
    image: "",
  },
  {
    title: "Fonts",
    url: "/fonts",
    description: "Websites that offer free fonts as well as font-based tools",
    image: "",
  },
  {
    title: "Icons",
    url: "/icon",
    description: "Resources for Icons including png, svg and more",
    image: "",
  },
  {
    title: "UI",
    url: "/ui",
    description:
      "Websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, etc. They are great for ideas for web components/UI",
    image: "",
  },
  {
    title: "Images",
    url: "/image",
    description:
      "Websites that offer free stock photos of all kinds for your websites and apps",
    image: "",
  },
  {
    title: "Logos",
    url: "/logo",
    description: "Resources for Logos",
    image: "",
  },
  {
    title: "Videos",
    url: "/video",
    description:
      "Websites that offer free stock videos of all kinds for your websites and apps",
    image: "",
  },
];


export default function Home() {
  return (
    <div className="container">
      <Header title="home page" description="this is home page" />
      <div className="row g-2">
      {HomePages.map((p, i) => (
        <>
            <div className="col-lg-5 col-md-4 col-sm-6">
              <div className="card">
                <div className="text-danger card-text px-2">
                  <h3>{p.title}</h3>
                </div>
                <div className="card-body">
                  <p>{p.description}</p>
                  <img src={p.image} alt="" />
                  <Link href={p.url}>
                    <a className="btn btn-outline-primary">View</a>
                  </Link>
                </div>
              </div>
            </div>
        </>
      ))}
      </div>
    </div>
  );
}


