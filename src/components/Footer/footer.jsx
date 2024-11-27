import S from './footer.module.scss'
import facebookLogo from '../../assets/facebook-icon.png'
import twitterLogo from '../../assets/Twitter-Logo.png'
import youtubeLogo from '../../assets/youtube-icon.png'
import linkedinLogo from '../../assets/linkedin-icon.png'
import instagramLogo from '../../assets/instagram-icon.png'



export default function footer(){
    return(
        <footer>
           <section className={S.contato}>
            <h3>4002-8922</h3>
            <nav>
                <a href="https://www.facebook.com/" target='_blank'><img src={facebookLogo}alt="Facebook logo" /></a>
                <a href="https://x.com/" target='_blank'><img src={twitterLogo} /></a>
                <a href="https://www.youtube.com/" target='_blank'><img src={youtubeLogo} alt="Youtube logo" /></a>
                <a href="https://www.linkedin.com/in/dkarollinefalcao/" target='_blank'><img src={linkedinLogo} alt="Linkedin logo" /></a>
                <a href="https://www.instagram.com/" target='_blank'><img src={instagramLogo} alt="Instagram logo" /></a>
            </nav>
           </section>
           <section className={S.infoSite}>
                <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024</p>
           </section>
        </footer>
    )

}