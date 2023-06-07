// we are importing youtube logo form images folder since its present in diffrent folder we have wirte like- '../images/'and the name for the image is YTlogo  
import YTlogo from '../images/youtube_logo_icon_167938.png'
import videologo from '../images/video_plus_icon_136058.png'
import bell_logo from '../images/alarm_icon-icons.com_48364.png'
import '../styles/navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={YTlogo} alt="" width={130}/> 
            </div>
            <div className="searchBar">
                <input type="text" placeholder='Search' />
            </div>
            <div className="userOptions">
                <img src={videologo} alt="" width={35} />
                <img src={bell_logo} alt="" width={35}/>
                <div className="profile">
                <h4>FSE</h4>
                </div>
            </div>
        </div>
    )
}
export default Navbar;