import Style from './Services.module.scss'
import {getApi} from './../../Https/Api'
import { useEffect, useState } from 'react'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import UiButton from '../Ui/UiButton/UiButton'
import ServicesList from './ServicesList/ServicesList'

const Services = () => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [sidebarText, setSidebarText] = useState(null)
    const [data, setData] = useState([])

    useEffect(()=>{
        getApi('services').then( res => {
            setTitle(res.data.data.title)
            setDescription(res.data.data.description)
            setSidebarText(res.data.data.sidebar_text)
            setData(res.data.data.items)
        })
    }, [title])

    return (
        <section className={`${Style['services']}`}>
            <div className={`${Style['services--content']}`}>
                <SectionTitle text={title}/>
                <div className={`${Style['services__desc']}`}>
                    {description}
                </div>

                <ServicesList data={data} sidebarText={sidebarText}/>
            </div>
            <div className={`${Style['services__footer']}`}>
                <UiButton text={'Contact us'} variant={'light'}/>
            </div>
        </section>
    )
}

export default Services