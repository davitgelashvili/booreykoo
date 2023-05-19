import Style from './UiButton.module.scss'

const UiButton = ({text, variant}) => {
    return (
        <button className={`${Style['button']} ${Style[`button--${variant}`]}`}>
            {text}
        </button>
    )
}

export default UiButton