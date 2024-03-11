import { Link } from "react-router-dom"
export default function Contact() {
  return (
    <main className="contact-container">
      <div className="contact-image-container">
        <img className="contact-image" src="images/contact-image.jpg" alt="A picture in black and white"/>
        {/* <p>An image I found on Pexels that I thought looked cool.</p>      */}
      </div>
      <div className="contact-sub-container">
        <p className="contact-heading">INQUIRIES</p>
        <br/>
        <Link to="mailto:muhammadmukhtarsuleiman@gmail.com"><p className="contact-body">muhammadmukhtarsuleiman@gmail.com</p></Link>
        <p className="contact-body">+234 905 478 8185</p>
        <br/>
        <br/>
        <p className="contact-heading">SOCIALS</p>
        <br/>
        <p className="contact-body">GITHUB</p>
        <p className="contact-body">X</p>
        <p className="contact-body">LINKEDIN</p>
        <p className="contact-body">INSTAGRAM</p>
      </div>
    </main>
  )
}