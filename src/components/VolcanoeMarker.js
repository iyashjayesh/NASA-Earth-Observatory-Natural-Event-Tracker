// npm install --save-dev @iconify/react @iconify-icons/noto
import { Icon, InlineIcon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/noto/volcano';


const VolcanoeMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}> 
            <Icon icon={volcanoIcon} className="location-icon"/>
        </div>
    )
}

export default VolcanoeMarker
