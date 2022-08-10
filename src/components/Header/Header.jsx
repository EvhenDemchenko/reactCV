import header from './header.module.scss';

const Header = () => {

    return (
        <header>
            <div className={header.inner}>
                <h1 className={header.name}>
                    Evhen Demchencko
                </h1>
                <img width={80} height={80} className={header.meimg} src="/me.jpg" alt="me"/>
            </div>
            <div>
                <h3>FrontEnd Developer (Junior) (future) </h3>
                <p>Скоро буду искать работу... </p>
            </div>
        </header>
    )
}
export default Header;