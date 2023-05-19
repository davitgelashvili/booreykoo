import Style from './Sidebar.module.scss'
import Menu from "./Menu/Menu"
import { useDispatch } from 'react-redux'
import { GlobalVariablesAction } from '../../Store/GlobalVariables'

const Sidebar = () => {
    const dispatch = useDispatch()

    return (
        <div className={Style['sidebar']}>
            <button 
                className={Style['sidebar__btn']}
                onClick={() => dispatch(GlobalVariablesAction.changeSidebar(false))}
                >
                    close
            </button>
            <Menu />
        </div>
    )
}

export default Sidebar