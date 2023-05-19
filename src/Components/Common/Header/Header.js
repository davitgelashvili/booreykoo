import { useLocation, useNavigate } from 'react-router-dom'
import BurgerBtn from './BurgerBtn'
import Style from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
    const location = useLocation()
    const [backBtn, setBackBtn] = useState(false)
    const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

    useEffect(()=>{
        if(
            location.pathname !== '/' && 
            location.pathname !== '/about' && 
            location.pathname !== '/services' && 
            location.pathname !== '/portfolio' && 
            location.pathname !== '/contact'
        ){
            setBackBtn(true)
        }else {
            setBackBtn(false)
        }
    }, [location])

    return (
        <header className={Style['header']}>
            {backBtn && (
            <button onClick={goBack} className={`${Style['header--btn']} ${Style['header__back']} `} >
                <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 9L2.21 9" stroke="#161616" stroke-width="2.8346" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M10 16L2 9" stroke="#161616" stroke-width="2.8346" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M2 9L10 2" stroke="#161616" stroke-width="2.8346" stroke-miterlimit="10" stroke-linecap="round"/>
                </svg>
            </button>
            )
            }
            <BurgerBtn />
        </header>
    )
}

export default Header