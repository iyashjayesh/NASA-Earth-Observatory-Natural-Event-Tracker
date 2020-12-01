// npm install --save-dev @iconify/react @iconify-icons/flat-ui
import { Icon } from '@iconify/react';
import earthIcon from '@iconify-icons/flat-ui/earth';


const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={earthIcon} /> NASA-Earth-Observatory-Natural-Event-Tracker (Project build by <a href="https://www.linkedin.com/in/iyashjayesh/">@iyashjayesh</a>) </h1>
        </header>
    )
}

export default Header
