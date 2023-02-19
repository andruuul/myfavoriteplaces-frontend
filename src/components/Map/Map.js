import './Map.css';
import '../Popups/PopupWithForm/PopupWithForm.css'
import { OnWindowEvt } from '../../utils/utils';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map({ center, zoom, onClose, showMap, title }) {

  const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  OnWindowEvt('keydown', closeByEsc);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCabXOdGRLWX64P6ryu8_U2qpMa1Aifd0U'
  });

  if (!isLoaded) {console.log('loading maps')}

  return (
    <div className='map__popup'>
      { showMap &&     
        <>
          <GoogleMap zoom={zoom} center={center} mapContainerClassName='map-container'>
            <Marker position={center}></Marker>
          </GoogleMap>
          <p className='map__place-title'>{title} - <button className='map__exit-button' onClick={onClose}>Cerrar mapa</button></p>
        </>
      }
    </div>
  );
}
