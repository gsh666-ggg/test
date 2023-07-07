import routers from "../router/route";
import { Routes,Link,Route } from "react-router-dom";
import "../css/style.css"

function App() {
    return (
        <div>
            {/* {
                routers.map((item,index)=>{
                    console.log(item);

                     <Link to={item.path} key={index}>{item.name}</Link>
                })
            } */}
            <Routes>
                {
                    routers.map((item,index)=>{
                        return <Route path={item.path} element={<item.components/>} key={index}/>
                    })
                }    
            </Routes>
        </div>
    )
}

export default App; 