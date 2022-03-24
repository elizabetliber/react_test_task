import {Layout} from 'antd';
import AppHome from './components/AppHome';
import {data} from "./data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <Layout style={{backgroundColor: "white"}}>
            <AppHome data={data}/>
        </Layout>
    )
}

export default App;

