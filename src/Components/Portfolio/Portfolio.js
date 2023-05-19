import { useEffect, useState } from "react"
import { getApi } from "../../Https/Api"
import Style from './Portfolio.module.scss'
import PortfolioItem from "./PortfolioItem/PortfolioItems"

const Portfolio = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getApi('portfolio')
            .then( res => setData(res.data.data.items))
            .finally(() => setLoading(false))
    }, [])

    return (
        <section className={`${Style['portfolio']}`}>
            {
                loading ? 'Loading' : 
                data.map(item => <PortfolioItem item={item} key={item.slug}/>)
            }
        </section>
    )
}

export default Portfolio