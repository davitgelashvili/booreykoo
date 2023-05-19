import { useEffect, useState } from "react"
import {getApi} from './../../../Https/Api'
import { NavLink } from "react-router-dom"
import Style from './Menu.module.scss'

const Menu = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(()=>{
        getApi('menu').then( res => setData(res.data.data.items)).finally(() => setLoading(false))
    }, [])

    return (
        <ul className={Style['menu']}>
        {
            loading ? 'LOADING' : 
            data.map(item => {
                console.log(item)
                return (
                    <li key={item.label} className={Style['menu__item']}>
                        <NavLink 
                            to={item.href} 
                            className={({isActive})=> isActive ? `${Style['menu__link']} ${Style['menu__link--active']}` : `${Style['menu__link']}`}
                            onClick={(e) => item.href === 'contact' && e.preventDefault()}
                            >
                                {item.label}
                        </NavLink>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default Menu