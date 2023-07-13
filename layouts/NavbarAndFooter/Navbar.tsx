export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
            <span className="navbar-brand "></span>
                <button className='navbar-toggler bg-black' type='button'
                    data-bs-toggle="collapse" data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false'
                    aria-label='Toggle Navigation'>

                    <span className='navbar-toggler-icon bg-gray'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link text-black' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-black' href='#'>Study programs</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-black' href='#'>Register</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav' ms-auto>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-dark' href="#">Student Portal Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
