import { Suspense, useEffect, useState } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData
} from "react-router-dom"
import { getProjects } from "../api";

export async function loader() {
  return defer({projects: getProjects()})
}

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      e.preventDefault();
      setWindowWidth(window.innerWidth);
    });
  }, [])
  const data = useLoaderData();
  return (
    <>
      <p>PROJECTS</p>
      <p>Stuff I&apos;ve done</p>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data.projects}>
          {projects => {
            const projectsMap = projects.map(project => {
              return (
                <div key={project.id}>
                  {windowWidth < 650 || project.id % 2 === 0
                  ?
                  <div>
                    <img src={project.imageUrl} alt={`Picture of ${project.name}`}/>
                    <div>
                      <h1>{project.name}</h1>
                      <p>{project.description}</p>
                      <Link to={project.link}><div>Check it out &rarr;</div></Link>
                    </div>
                  </div>
                  :
                  <div>
                    <div>
                      <h1>{project.name}</h1>
                      <p>{project.description}</p>
                      <Link to={project.link}><div>Check it out &rarr;</div></Link>
                    </div>
                    <img src={project.imageUrl} alt={`Picture of ${project.name}`}/>
                  </div>                  
                }
                </div>
              )
            })

            return (
              <>
                {projectsMap}
              </>
            )
          }}
        </Await>
      </Suspense>
    </>
  )
}