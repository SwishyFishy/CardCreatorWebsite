import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";

export default function Layout()
{
    return(
        <div className="component-layout">
            <Header/>
            <div>
                <CardPane/>
                <DesignPane/>
            </div>
            <Footer/>
        </div>
    );
}