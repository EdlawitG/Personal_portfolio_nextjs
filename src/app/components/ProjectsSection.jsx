"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React E-commerce Website",
    description: "react ecommerce",
    image: "/images/projects/web1.PNG",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/EdlawitG/gdsc-aastu-frontend/tree/main/React_project/E-commerce/landing_page",
    previewUrl: "https://ecommerce-mu-liart.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Website",
    description: "blog",
    image: "/images/projects/web2.PNG",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/EdlawitG/react-project/tree/master/BlogWebsite/blogwebsite",
    previewUrl: "https://blogwebsite-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Food Recipe",
    description: "react food recipe",
    image: "/images/projects/web3.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdlawitG/react-project/tree/master/src",
    previewUrl: "https://recipe-green-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Site",
    description: "list of moive",
    image: "/images/projects/web4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdlawitG/MoiveSite_React_Redux_Toolkit",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Full Stack E-Health Website",
    description: "mern project",
    image: "/images/projects/web5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/EdlawitG/e-health_MERN",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Full Stack Cinema Ticketing",
    description: "mern project",
    image: "/images/projects/web6.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/coders-in-live/cinema-ticketing-system/tree/Edl/backend",
    previewUrl: "",
  },
  {
    id: 7,
    title: "UI design for Cinema Ticketing",
    description: "cinema ticketing",
    image: "/images/projects/ui1.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/qVJzWJZ772JbYNpJntoi7r/wireframe_CinemaTicketing?type=design&node-id=78-3&t=4pp60Fnjmxnptkem-0&scaling=scale-down&page-id=78%3A2&starting-point-node-id=78%3A3&show-proto-sidebar=1",
  },
  {
    id: 8,
    title: "UI design for EPR System for Mekedoina ",
    description: "adminpage",
    image: "/images/projects/ui2.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/vNWaFcMN0FGNBxIGi4Kr5G/High-Fidelity?type=design&node-id=373-3153&t=chtGmk2vz1mIKCKC-0&scaling=min-zoom&page-id=373%3A690",
  },
  {
    id: 8,
    title: "UI design for E-health ",
    description: "e-health",
    image: "/images/projects/web5.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/Gju8V9lMMeZztdoGrgnD3r/E-HealthCare?type=design&node-id=7-13&t=ISA3gzj9gNQvRjky-0&scaling=scale-down&page-id=0%3A1",
  },
  {
    id: 9,
    title: "UI design for E-commerce ",
    description: "ecommerce",
    image: "/images/projects/ui4.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/hv3yON7C983MHmpN3vmYjq/Ecommerce?type=design&node-id=1-2&t=ISA3gzj9gNQvRjky-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    id: 10,
    title: "Mobile UI for E-commerce with lottery ",
    description: "ecommerce with lottery",
    image: "/images/projects/ui5.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/mlf6QTLMKYGv56nqRqZWbV/E-commerce-with-Lottery?type=design&node-id=100-20&t=KyI9R4S63enfA5xK-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=100%3A20&show-proto-sidebar=1",
  },
  {
    id: 11,
    title: "Mobile UI for Kidase(Ethiopian Orthodox Bible) ",
    description: "UI for sirate kidase",
    image: "/images/projects/ui6.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/jpsecRoGsCm8EonRcIytPV/Kidase?type=design&node-id=43-3&t=ISA3gzj9gNQvRjky-0&scaling=min-zoom&page-id=43%3A2&starting-point-node-id=43%3A3",
  },
  {
    id: 11,
    title: "Mobile UI for Coffee App ",
    description: "coffeeapp",
    image: "/images/projects/ui8.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/c7zNuX3FnZ5SEmlJQirh26/Coffee-Shop?type=design&node-id=1-2&t=ISA3gzj9gNQvRjky-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    id: 12,
    title: "Landing Page UI for ShegaDates ",
    description: "shega dates",
    image: "/images/projects/ui9.png",
    tag: ["All", "UI/UX"],
    gitUrl:"",
    previewUrl:
      "https://www.figma.com/proto/v7qCDlRRmv7MKdvfVVs4T4/ShegaDate?type=design&node-id=3-2&t=AIqfYsWB08Zf1uxT-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
