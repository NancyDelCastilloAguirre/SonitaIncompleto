import "./topbar.css"
import "./tabbar.css"
import {Link} from "react-router-dom"
import TabBar from "./TabBar";


export default function Topbar() {

  return (
    
    <><div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">SONA</span>
        </Link>
      </div>
      <div className="topbarRight">
      </div>
      <div>
      </div>
    </div><div className="topbarContainer2">
        <div className="tab-bar">
          <TabBar />
        </div>
      </div></>
    
    
  )
}
