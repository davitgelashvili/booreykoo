import { NavLink } from 'react-router-dom'
import Style from './../Portfolio.module.scss'
import SectionTitle from '../../Common/SectionTitle/SectionTitle'

const PortfolioItem = ({item}) => {
    return (
        <div className={`${Style['portfolio__item-out']}`}>
            <NavLink to={`/${item.slug}`} className={`${Style['portfolio__item']}`}>
                <figure className={`${Style['portfolio__item--cover']}`}>
                    <img src={item.thumb.split('i.')[0] + `fastly.`+item.thumb.split('https://i.')[1] } alt="cover" className={`${Style['portfolio__item--img']}`} />
                </figure>
                <div className={`${Style['portfolio__item--text']}`}>
                    <div className={`${Style['portfolio__item--title']}`}>
                        <SectionTitle text={item.title}/>
                    </div>
                    <p className={`${Style['portfolio__item--desc']}`}>{item.description}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default PortfolioItem