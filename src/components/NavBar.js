import logo from '../logo.svg'

const NavBar = () => {
    return (
    <div className='NavBar-container'>
        <a href='#'>
        <img src={logo} className="NavBar-logo" alt="logo"/>
        </a>
        <h1>Nombre tienda</h1> 
        <div className='NavBar-navLinks'>
            <ul>
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Productos</a>
                </li>
                <li>
                    <a href='#'>Sobre nosotros</a>
                </li>
            </ul>
            <button className='NavBar-login'>login</button>
        </div>
        
    </div>
    );
};

export default NavBar;