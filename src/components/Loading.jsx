import gsap from "gsap"
import {useGSAP} from "@gsap/react"

export default function Loading() {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".loading-container", {opacity: 0.25, duration: 1, yoyo: true, repeat: -1, ease: "sine"})
  })
  return (
    <div className="loading-container">
      <div className="loading-sub-container">
        <h1>S</h1>
        <h1>L</h1>
      </div>
      <div className="loading-sub-container">
        <h1>M</h1>
        <h1>N</h1>
      </div>
    </div>    
  )
}