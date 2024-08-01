'use client';
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent,TabsTrigger } from "@/components/ui/tabs";
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

// remove category duplicates
const uiqueCategories = [
  'All Projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uiqueCategories);
  const [category, setCategory] = useState('All Projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'All Projects'
    ? project
    :project.category === category;
  
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto " >
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          My Projects
        </h2>
        {/* tabs */}


        {/* ////////      very important className="xl:mb-48 mb-24"        ///////////*/}

        
        <Tabs defaultValue={category} className="xl:mb-48 mb-24" >
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none ' >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 " > 
          {filteredProjects.map((project, index) => {
            return (
              <TabsContent value={category} key={index} >
                <ProjectCard project={project} />
              </TabsContent>
            );
          })}
           </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects