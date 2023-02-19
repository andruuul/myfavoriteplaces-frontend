import './Banner.css';

export default function Banner({loggedIn}) {

  return (
    loggedIn ?
      (
        <div className='banner'>
          ¡Observa los lugares favoritos de otras personas!
        </div>
      ) : (
        <>
          <div className='banner banner_not-logged-in'>
            ¿Cuáles son tus lugares favoritos?
          </div>
          <p className='banner__subtitle'>Comparte tus lugares favoritos y tus anécdotas con personas que aman viajar tanto como tú.</p>
        </>
      )
  )
};