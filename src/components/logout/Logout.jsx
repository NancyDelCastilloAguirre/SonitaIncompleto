import './logout.css'
import {useNavigate  } from "react-router-dom"

export default function Logout() {   
    const navigate = useNavigate ();

    const handleLogout = async () => {
        try {
          await localStorage.removeItem('token');
          navigate('/');
        } catch (error) {
          console.log("Error: ", error);
        }
      };

  return (
    <>
    <div className='boton'>
      <button className='modalbuttonRed' onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
    </>
  );
}

