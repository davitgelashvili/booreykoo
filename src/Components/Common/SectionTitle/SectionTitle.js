import Style from './SectionTitle.module.scss'

const SectionTitle = ({text}) => {
    return (
        <h1 className={Style.title}>
            {text}
        </h1>
    )
}

export default SectionTitle