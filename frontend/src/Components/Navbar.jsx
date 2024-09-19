import { link } from 'react-router-dom'
const Navbar = () => {

    return(
        <header>
            <div className="container">
                <link to='/' >
                <h1>Workout Buddy</h1>
                </link>
            </div>
        </header>
    )
}

export default Navbar;