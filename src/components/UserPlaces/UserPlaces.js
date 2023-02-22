import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CurrentUserContext } from './../../context/CurrentUserContext';

import Place from "../Place/Place";
import './../Main/Main.css';
import './UserPlaces.css';

export default function UserPlaces({onImageClick, onCardDelete, onOpenNewPlace, onEditPlaceClick, selectedUser }) {

  const currentUserContext = useContext(CurrentUserContext);
  const currentUserId = currentUserContext.currentUser._id;

  const PLACES = [
    {
      _id: 'asdasd',
      title: 'Lugar 1 de Usuario 2 - Zoológico Animaya',
      description: 'Aunque no es un lugar que suelo visitar, siempre recordaré cuando visité este lugar con mi hija María. Un día maravilloso!',
      image: 'https://isla.merida.gob.mx/serviciosinternet/VisitMeridaMX/archivos/imagenes/15696027857945.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 20.983334109349528,
        lng: -89.68983813988827
      },
      owner: {
        _id: 'u2',
        name: 'Luisito',
      }
    }, 
    {
      _id: 'sdddd2',
      title: 'Una catarina in fraganti',
      description: 'Una catarina con las manos en el pulgón - digo, en la masa.',
      image: 'https://www.petdarling.com/wp-content/uploads/2022/02/que-comen-las-mariquitas.jpg',
      address: '28 #217 García Ginerés"',
      location: {
        lat: 29.24791920190492,
        lng: -103.30019620509987
      },
      owner: {
        _id: 'u1',
        name: 'Pedro',
      }
    },
    {
      _id: 'asdasdqq',
      title: 'Lugar 2 de Usuario 2 - Chalmuch',
      description: 'Chalmuch es una comisaría preciosa en Yucatán. Aquí tuve el honor de conocer a una de las personas más sabias que la vida me ha podido presentar.',
      image: 'https://mapio.net/images-p/22726971.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 20.973634521425783,
        lng:  -89.72954334459314
      },
      owner: {
        _id: 'u2',
        name: 'Luisito',
      }
    }, 
    {
      _id: 'Lugar de Usuario 3',
      title: 'Playa y sol',
      description: 'Esta playa es perfecta! Temperatura, ambiente, tranquilidad, todo!',
      image: 'https://a.cdn-hotels.com/gdcs/production162/d958/882ceff2-9352-468c-9254-11d60ffe3522.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      owner: {
        _id: 'u3',
        name: 'Luisito',
      }
    }, 
  ]     

  const storedSelectedUserName = localStorage.getItem('selectedUserName')

  const selectedUserId = useParams().userId;

  const selectedUserPlaces = PLACES.filter(place => place.owner._id === selectedUserId);

  return (
    <div className='main'>
        {/*Aquí, hacer que CON location.pathname el texto del banner desaparezca, en App.js*/}
      <div className='places__header'>
        {/*El botón solo se muestra si el usuario LOGGEDIN es el mismo que el seleccioando */}
      {
        selectedUserId === currentUserId 
            ? 
          <button className='places__create-button' onClick={onOpenNewPlace}>Agregar un lugar nuevo</button> 
            :         
          <div className='places__title'>{`Mira los lugares favoritos de ${storedSelectedUserName}`}</div>
      }
      </div>  
      <section className='grid'>
        {selectedUserPlaces.map(place => {
          return (
            <Place 
              key={place._id}
              myKey={place._id} 
              imageLink={place.image} 
              title={place.title}
              description={place.description}
              address={place.address}
              owner={place.owner}
              coordinates={place.location}
              onImageClick={onImageClick} 
              onCardDelete={onCardDelete}
              place={place}
              onEditPlaceClick={onEditPlaceClick}
            />
          );
        })}
        {/*Después, al hacer click en un user se muestran los lugares de ese user*/}
      </section>
    </div>
  );
};