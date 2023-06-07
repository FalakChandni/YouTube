import bannerimage from "../images/banner.jpg"

const Banner = () => {
    return ( 
        <div className="banner">
            <img src={bannerimage} alt="" width={1505} height={400}/>
        </div>
     );
}
 
export default Banner;