import Logo from '../Common/Logo/Logo'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import UiButton from '../Ui/UiButton/UiButton'
import Style from './About.module.scss'

const logoStyle = {
    fill: '#161616',
    width: '391px',
    height: '79px'
}

const About = () => {
    return (
        <section className={`${Style['about']} ${Style['about--flex']}`}>
            <div className={`${Style['about__logo']}`}>
                <Logo style={logoStyle}/>
            </div>
            <div>
                <SectionTitle text={'About us'}/>
            </div>
            <div className={`${Style['about__text']}`}>
                <div className={`${Style['about__text--item']}`}>
                Booreykoo is a branding, web development, design, and marketing firm with more than fourteen years of industry experience, serving clients worldwide. Welcome to the future of design. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, delenit vel illum dolore delenit eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te delenit feugait nulla se molestie consequat, delenit vel illum dolore delenit eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te delenit feugait nulla elit esse delenit molestie cet facilisi 
                </div>
                <div className={`${Style['about__text--item']}`}>
                Booreykoo is a branding, web development, design, and marketing firm with more than fourteen years of industry experience, serving clients worldwide. Welcome to the future of design ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.

Molestie consequat, delenit  vel illum dolore delenit  eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te delenit  feugait nulla se molestie consequat, delenit  vel illum dolore delenit  eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit.    
                </div>
            </div>
            <div className={Style['about__footer']} >
                <UiButton text={'Contact Us'}/>
            </div>
        </section>
    )
}

export default About