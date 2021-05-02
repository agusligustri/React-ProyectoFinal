import React, { useContext } from 'react'
import logo from '../images/ecommerce.svg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
                <Link to="/"><img src='./logo.png' alt="" /></Link>
            </div>
            {!user && <div className='rightside d-flex'>
                <div><Link to="signup" className='navlink'>REGISTRARSE</Link></div>
                <div><Link to="login" className='navlink'>INICIAR SESIÓN</Link></div>
            </div>}
            {user && <div className='rightside d-flex'>
                <div><Link to="/" className='navlink'>Hola, {user}</Link></div>
                <div>
                    <Link to="cartproducts" className='navlink'>
                        <Icon icon={cart} />
                        <span className='no-of-products'>{totalQty}</span>
                    </Link>
                </div>
                
                <button className='logout-btn btn btn-primary' onClick={handleLogout}>Cerrar Sesion</button>
            </div>}
        </div>
    )
}
