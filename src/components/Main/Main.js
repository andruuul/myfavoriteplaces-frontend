//isLoggedIn
import User from "./../User/User";
import './Main.css';
import mountainsPath from '../../images/mountains.jpg'
import restaurantPath from '../../images/restaurant.jpg'
import forestPath from '../../images/forest.jpg'

export default function Main({loggedIn, users, onOpenEditProfile, onImageClick }) {
  
  users = [
    {
      _id: 'u1',
      name: 'Current User Name',
      image:
        'https://www.nosequeestudiar.net/site/assets/files/55126/biologo.539x0-is.jpg',
        places: [{a: 'a'}],
        description: 'Biólogo/fotógrafo. Especialista en insectos que habitan áreas tropicales'
    },
    {
      _id: 'u2',
      name: 'Usuario 2',
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',        
      places: [{a: 'a'}, {b: 'b'}],
      description: 'Turista a medio tiempo. Visitando el sureste Mexicano!'
    },
    {
      _id: 'u3',
      name: 'Andrea',
      image:
        'https://media.licdn.com/dms/image/C4E12AQEVO-ZAozxJ3Q/article-cover_image-shrink_600_2000/0/1534479718033?e=2147483647&v=beta&t=ehPjnCD2Nz7aFYN13mZVQ0hww3LG_5pFo_YGjh_6tMk',        
      places: [{a: 'a'}],
      description: 'Amo la cultura emprendedora, y la fotografía es uno de mis hobbies. Me encantan los lugares cerca del agua.'
    }
  ];

  return (
    loggedIn ?
    (<div className='main'>
      <section className='grid'>
        {users.map(user => {
          return (
            <User 
              key={user._id}
              myKey={user._id}
              uid={user._id}
              imageLink={user.image}
              name={user.name}
              placeCount={user.places.length}
              description={user.description}
              onEditProfile={onOpenEditProfile}
              onImageClick={onImageClick}
              user={user}
            />
          );
        })}

        {/*Después, al hacer click en un user se muestran los lugares de ese user*/}
      </section>
    </div> ) : (
      <div className='main'>
        <section className='main__gallery'>
          <div className='gallery__picture-container'>
            <img className='gallery__image' alt='A forest' src={forestPath} />
          </div>
          <div className='gallery__picture-container'>
            <img className='gallery__image' alt='A restaurant' src={restaurantPath} />
          </div>
          <div className='gallery__picture-container'>
            <img className='gallery__image' alt='Mountains' src={mountainsPath} />
          </div>
        </section>
      </div>
    )
  );
};