import SvgLogo from './SvgLogo'

const Logo = ({style}) => {
    return (
        <figure>
            {<SvgLogo style={style}/>}
        </figure>
    )
}

export default Logo