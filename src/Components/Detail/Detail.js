import { useEffect, useState } from "react"
import { getApi } from "../../Https/Api"
import { useParams } from "react-router-dom"
import Style from './Detail.module.scss'
import SectionTitle from "../Common/SectionTitle/SectionTitle"

const Detail = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(()=>{
        getApi(`portfolio/${id}`)
            .then( res => setItem(res.data.data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className={Style['detail']}>
            {
            loading ? 'Loading' : (
                <>
                <div className={Style['detail--section']}>
                    <div className={Style['detail__title']}>
                        <SectionTitle text={item.title} />
                    </div>
                    <div className={Style['detail__desc']}>
                        {item.description}
                    </div>
                </div>
                <div className={Style['detail--section']}>
                    <img src={item.thumb.split('i.')[0] + `fastly.`+item.thumb.split('https://i.')[1] } alt="cover" className={Style['detail__cover']} />
                </div>
                </>
            )
            }
        </div>
    )
}

export default Detail