import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/Shared/NavigationBar";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root;