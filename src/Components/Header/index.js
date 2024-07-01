import { Link } from "react-router-dom";
import Logo from '../../assents/images/logo.svg'
import { Button } from "bootstrap";
const Header =()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>
                
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                {/* Use o Link do react-router-dom para envolver o SVG */}
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>
                            {/* <div className="col-sm-10 d-flex align-items-center part2">
                                <Button className='countryDrop'>

                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;