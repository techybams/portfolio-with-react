import services from '../images/service.jpg';

const Services = () =>{


    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 description">
                    <h1> Services </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                <div className="col-12 col-md-6 text-center mt-5">
                    
                    {/* <img src= {require('../images/about2.jpg')} width= "70%" alt='portfolio'/> */}
                    <img src= {services} width= "100%" alt='service'/>
                </div>
            </div>
        </div>
    )
}

export default Services;

