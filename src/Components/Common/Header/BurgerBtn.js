import { useDispatch } from 'react-redux'
import Style from './Header.module.scss'
import { GlobalVariablesAction } from '../../../Store/GlobalVariables'
import { useLocation } from 'react-router-dom'
import iconWhite from './../../../assets/img/burger-white.svg'
import iconBlack from './../../../assets/img/burger-black.svg'

const BurgerBtn = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    if(location.pathname === '/'){
        return (
            <button 
                className={`${Style['header__burger']} ${Style['header--btn']}`} 
                onClick={() => dispatch(GlobalVariablesAction.changeSidebar(true))}
            >
                <img src={iconWhite} alt='icon' />
            </button>
        )
    }else {
        return (
            <button 
                className={`${Style['header__burger']} ${Style['header--btn']}`} 
                onClick={() => dispatch(GlobalVariablesAction.changeSidebar(true))}
            >
                <img src={iconBlack} alt='icon' />
            </button>
        )
    }
    

}

export default BurgerBtn