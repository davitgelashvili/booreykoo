import Logo from '../Common/Logo/Logo'
import UiButton from '../Ui/UiButton/UiButton'
import Style from './Main.module.scss'

const logoStyle = {
    fill: 'white',
    width: '460px',
    height: '93px'
}

const Main = () => {
    return (
        <main className={`${Style['main']} ${Style['main--flex']}`}>
            <div className={Style['main__logo']}>
                <Logo style={logoStyle}/>
            </div>
            <div className={Style['main__desc']}>
                <p>BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講</p>
                <p>putting everything aside to be yourself</p>
            </div>
            <div className={Style['main__footer']}>
                <UiButton text={'Contact Us'} variant={'dark'}/>
            </div>
        </main>
    )
}

export default Main