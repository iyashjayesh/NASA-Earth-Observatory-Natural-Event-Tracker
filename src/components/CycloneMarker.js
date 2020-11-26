// npm install --save-dev @iconify/react @iconify-icons/noto
import { Icon, InlineIcon } from '@iconify/react';
import cycloneIcon from '@iconify-icons/noto/cyclone';

const CycloneMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}> 
            <Icon icon={cycloneIcon} className="location-icon"/>
        </div>
    )
}

export default CycloneMarker
