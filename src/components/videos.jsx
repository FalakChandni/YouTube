import { useState } from "react";
import YT_Shorts from '../images/iconfinder-youtube-4416090_116650.png'
import '../styles/videos.css'
const Videos = () => {
    let [video, setVideo] = useState([
        {
            thumbnail: "https://i.ytimg.com/vi/11OWuPcElJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJfCxtjhUE_jxGLBzpJfEJIZviOQ",
            title: "Zihaal e Miskin (Video) Javed-Mohsin | Vishal Mishra, Shreya Ghoshal | Rohit Z, Nimrit A | Kunaal V",
            channel: "VYRLOriginals",
            views: "33M views",
            id:1
        },
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:2
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:3
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:4
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:5
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:6
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:7
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:8
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:9
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:10
        }
        ,
        {
            thumbnail: "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
            title: "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
            channel: "Vinyl Lofi",
            views: "5.5M views",
            id:11
        },
        {
            thumbnail: "https://i.ytimg.com/vi/11OWuPcElJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJfCxtjhUE_jxGLBzpJfEJIZviOQ",
            title: "Zihaal e Miskin (Video) Javed-Mohsin | Vishal Mishra, Shreya Ghoshal | Rohit Z, Nimrit A | Kunaal V",
            channel: "VYRLOriginals",
            views: "33M views",
            id:12
        }
        
    ])
    let removeVideo = (id, name) => {
        let result = video.filter((x) =>
        x.id !== id 
        )
        
        setVideo(result)
        alert(`The ${name} video got Removed`)
    }

    let [shorts, setShorts] = useState([
        {
            thumbnail: "https://i.ytimg.com/vi/FmmkwxDYkjA/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBrFBJKp8PivZTS7ZXC_KeTU4an5Q",
            title: "OLD IS GOLD🙏🚩// JAI SHRI RAM #shorts #hindu #sanatandharma",
            views: "6.4M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/JfNVQ9Ey-Pg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLA4oSEP90QwwLYAbZlIh_-WuidyXg",
            title: "❤️ IIT Bombay Classrooms Actual View 🥰 IIT Bombay Motivation🔥 #iitbombay #motivation #shorts",
            views: "2M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/JfNVQ9Ey-Pg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLA4oSEP90QwwLYAbZlIh_-WuidyXg",
            title: "❤️ IIT Bombay Classrooms Actual View 🥰 IIT Bombay Motivation🔥 #iitbombay #motivation #shorts",
            views: "2M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/JfNVQ9Ey-Pg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLA4oSEP90QwwLYAbZlIh_-WuidyXg",
            title: "❤️ IIT Bombay Classrooms Actual View 🥰 IIT Bombay Motivation🔥 #iitbombay #motivation #shorts",
            views: "2M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/JfNVQ9Ey-Pg/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLA4oSEP90QwwLYAbZlIh_-WuidyXg",
            title: "❤️ IIT Bombay Classrooms Actual View 🥰 IIT Bombay Motivation🔥 #iitbombay #motivation #shorts",
            views: "2M views"
        },

        {
            thumbnail: "https://i.ytimg.com/vi/FmmkwxDYkjA/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBrFBJKp8PivZTS7ZXC_KeTU4an5Q",
            title: "OLD IS GOLD🙏🚩// JAI SHRI RAM #shorts #hindu #sanatandharma",
            views: "6.4M views"
        }

    ])

    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videodata">
                {video.map((data) => {
                    return (
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="videodetails">
                                <h3>{data.title}</h3>
                                <p>{data.channel}</p>
                                <p>{data.views}</p>
                                <a onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className="short">
                <div className="icon">
                <img src={YT_Shorts} alt="" width={25} />
                <h1>Shorts</h1>
                </div>
                
                <div className="shortsdata">
                    {shorts.map((data) => {
                        return (
                            <div className="shorts">
                                <img src={data.thumbnail} alt="" />
                                <div className="shortsdetails">
                                    <h3>{data.title}</h3>
                                    <p>{data.views}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}

export default Videos;