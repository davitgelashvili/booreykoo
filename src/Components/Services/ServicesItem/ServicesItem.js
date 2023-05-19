import Style from './../Services.module.scss'

const ServicesItem = ({item}) => {
    return (
        <div className={`${Style['services__list--item']}`}>
            <h2  className={`${Style['services__list--title']}`}>{item.title}</h2>
            <p className={`${Style['services__list--desc']}`}>{item.description}</p>
        </div>
    )
}

export default ServicesItem