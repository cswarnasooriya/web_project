import './Hero.css';
import img1 from '../../Assets/hand_icon.png';
import img2 from '../../Assets/arrow.png';
import img3 from '../../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arivals Only</h2>
            <div className='text'>
                <div className="hand-icon">
                    <p>New</p>
                    <img src={img1} alt="Hand Icon" />
                </div>

                <p>Collections</p>
                <p>for Everyone !</p>
            </div>

            <div className="hero-latest-btn">
                <div>
                    Latest Collection
                </div>
                <img src={img2} alt="Latest" />


            </div>
        </div>

        <div className="hero-right">
            <img src={img3} alt="Hero_Image" />
        </div>

      
    </div>
  )
}

export default Hero
