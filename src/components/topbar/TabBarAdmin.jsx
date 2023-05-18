import React from 'react';
import './tabbar.css';
import {Link} from "react-router-dom"
import { Home,Forum,Analytics,AccountCircle,PictureAsPdfOutlined } from "@mui/icons-material"
import Share from "../share/Share"

const TabBarAdmin = () => {
  return (
    <div className="tab-bar">
      <Link to="/homeadmin" className="tab-item"><Home sx={{ color: 'white' }}/></Link>
      <Link to="/chat" className="tab-item"><Forum sx={{ color: 'white' }}/></Link>
      <Link to="/bobadmin" className="tab-item"><PictureAsPdfOutlined sx={{ color: 'white' }}/></Link>
      <div className="tab-item"><Share/></div>
      <Link to="/estadisticas" className="tab-item"><Analytics sx={{ color: 'white' }}/></Link>
      <Link to="/profileadmin/" className="tab-item"><AccountCircle sx={{ color: 'white' }}/></Link>
      
    </div>
  );
};

export default TabBarAdmin;