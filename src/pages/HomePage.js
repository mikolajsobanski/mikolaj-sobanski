
import { Footer } from '../components/Footer'
import { Banner } from '../components/HomePage/Banner'
import { Contact } from '../components/HomePage/Contact'
import { Projects } from '../components/HomePage/Projects'
import { Skills } from '../components/HomePage/Skills'
import { Game } from '../components/HomePage/Game'
import { Game2 } from '../components/HomePage/Game2'
import { WorkAndEdu } from '../components/HomePage/WorkAndEdu'
import { NavBar } from '../components/Navbar'
import './css/homePage.css'


function HomePage(){

    return (
        <div className="mainDiv-homePage">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Game />
          <WorkAndEdu />
          <Game2 />
          <Contact />
          <Footer />
        </div>
    )
}

export default HomePage