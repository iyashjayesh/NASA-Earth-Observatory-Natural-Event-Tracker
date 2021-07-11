// npm install --save-dev @iconify/react @iconify-icons/noto
import { Icon } from '@iconify/react';
import fireIcon from '@iconify-icons/noto/fire';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}> 
            <Icon icon={fireIcon} className="location-icon"/>
        </div>
    )
}

export default LocationMarker
