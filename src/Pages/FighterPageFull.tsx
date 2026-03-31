import FighterLink from "../Components/FighterLink";
import { FighterLinkList } from "../Components/FighterLinkList";
import Header  from "../Components/Header";
//import VideoBg from "../assets/FireFullFighter.mp4"


function FighterPageFull() {
    return (

        <div className="pageContainer">       


            <video autoPlay muted loop playsInline className="fireBg-full">
                <source src="https://res.cloudinary.com/dhaocx3rp/video/upload/v1774845124/214404_dgfn11.mp4" type="video/mp4" />
            </video> 

            <div className="content">
                <Header />
                
                <h1 className="SFF-Fighters">SFF Fighters:</h1>

                <div className="imageGallery-full">
                    {FighterLinkList.map((fighter, index) => (
                        <FighterLink
                            id={fighter.id}
                            key={index}
                            image={fighter.image}
                            altText={fighter.alt}
                        />
                    ))}
                </div>
            </div>

        </div>


    );
    
}

export default FighterPageFull;