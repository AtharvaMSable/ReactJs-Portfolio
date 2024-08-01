'use client';
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import siper styles
import "swiper/css";
import "swiper/css/pagination"; 

// import required modules
import { Pagination } from "swiper/modules";

//  components
import ProjectCard from "@/components/ProjectCard";


const projectData = [
  {
    image: "/work/1.png",
    category: "P5JS",
    name: "Visualizing Paths",
    description:
      "Visualizes pathfinding from a starting point to an ending point using various algorithms.",
    link: "https://visualizing-paths.vercel.app/",
    github: "https://github.com/AtharvaMSable/Visualizing-Paths",
  },
  {
    image: "/work/2.png",
    category: "P5JS",
    name: "Snake Escape",
    description:
    "Developed a game in p5JS where players control the food to evade a snake using pathfinding algorithms.",
    link: "https://snake-escape.vercel.app/",
    github: "https://github.com/AtharvaMSable/Snake-Escape",
  },
  {
    image: "/work/3.png",
    category: "FrontEnd",
    name: "Portfolio Website",
    description:
    "Developed a portfolio website.",
    link: "https://dev-atharva.netlify.app/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Application",
    name: "Spotify Song/Playlist Downloader",
    description:
    "Simply Provide the URL of a Spotify Song or Playlist, and the application will download all the songs in the playlist to your desktop.",
    link: "/",
    github: "https://github.com/AtharvaMSable/Download-Spotify-Playlist",
  },
  // {
  //   image: "/work/1.png",
  //   category: "Next Js",
  //   name: "Nova Website",
  //   description:
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, liquam!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/2.png",
  //   category: "Next Js",
  //   name: "Eternal Wwebsite",
  //   description:
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, liquam!",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/3.png",
  //   category: "React Js",
  //   name: "Whome Website",
  //   description:
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, liquam!",
  //   link: "/",
  //   github: "/",
  // },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h2 className="section-title mb-4 ">Latest Projects</h2>
          <p className="subtitle mb-8" >
          Here are some of my projects that I have Successfully Completed
              </p>
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
        
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
              ); 
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
