import about11 from '../images/about11.png';

const Home = () =>{


    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 description">
                    <h1>I am Bamidele Olaoluwa <br></br>
                    A Frontend Developer</h1>
                    <p>Far far away, behind the word mountains, far from the countries vokalia and
                        consonantia, there live the blind texts.
                    </p>
                    <button className="btn btn-lg btn-success hire">Hire me</button>
                    <button className="btn btn-lg view">View Portfolio</button>
                </div>
                <div className="col-12 col-md-6 text-center">
                    
                    {/* <img src= {require('../images/about2.jpg')} width= "70%" alt='portfolio'/> */}
                    <img src= {about11} width= "120%" alt='portfolio'/>
                </div>
            </div>
        </div>
    )
}

export default Home;

