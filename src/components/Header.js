import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} />NASA-Earth-Observatory-Natural-Event-Tracker (Project build by @iyashjayesh) </h1>
        </header>
    )
}

export default Header
