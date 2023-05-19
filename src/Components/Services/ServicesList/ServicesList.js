import ServicesItem from './../ServicesItem/ServicesItem'
import Style from './../Services.module.scss'

const ServicesList = ({data, sidebarText}) => {
    return (
        <div className={`${Style['services__list']}`}>
            <div className={`${Style['services--out']}`}>
                <p>{sidebarText}</p>
            </div>
        {
            data.map( (item,key) => {
                return (
                    <ServicesItem key={key} item={item} />
                )
            })
        }
        </div>
    )
}

export default ServicesList