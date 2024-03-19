import gsap from "gsap";
import {useGSAP} from "@gsap/react"
export default function Home() {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    // const tl = gsap.timeline()
    // tl.from(".home-para", {duration: 1, ease: "expo.in"})
    // tl.from(".home-main", {duration: 1, opacity: 0, ease: "expo.in"}, "+=.5")
  })
  return (
    <main className="home">
      <div>
        <p className="home-para">Hi, there. I&apos;m</p>
        <p className="home-main">MUHAMMAD<br/><span className="name-stroke">MUKHTAR</span><br/>SULEIMAN.<br/></p>      
      </div>
    </main>
  )
}