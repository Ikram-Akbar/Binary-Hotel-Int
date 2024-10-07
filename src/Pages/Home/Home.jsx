import Banner from "../../Components/Banner/Banner";
import Events from "../../Components/Events/Events";
import NewsLetter from "../../Components/NewsLatter/NewsLatter";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";

const Home = () => {
    return (
        <div>
            <Banner />
            <Events />
            <SpecialOffers />
            <NewsLetter/>
        </div>
    );
};

export default Home;