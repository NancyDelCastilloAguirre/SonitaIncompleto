import "./topbarAdmin.css"
import { Search } from "@mui/icons-material"
import {Link} from "react-router-dom"
import TabBarAdmin from "../topbar/TabBarAdmin"

export default function TopbarAdmin() {
  return (
    <><div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/homeAdmin" style={{ textDecoration: "none" }}>
          <span className="logo">SONA</span><span className="logoAdmin">Admin</span>
        </Link>
      </div>
      <div className="topbarRight">
      </div>
    </div><div className="topbarContainer2">
        <div className="tab-bar">
          <TabBarAdmin />
        </div>
      </div></>
  )
}
