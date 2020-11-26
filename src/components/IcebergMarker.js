// npm install --save-dev @iconify/react @iconify-icons/openmoji
import { Icon } from '@iconify/react';
import icebergIcon from '@iconify-icons/openmoji/iceberg';


const CycloneMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}> 
            <Icon icon={icebergIcon} className="location-icon"/>
        </div>
    )
}

export default CycloneMarker
