import { useEffect, useState } from "react";
import YT_Shorts from '../images/iconfinder-youtube-4416090_116650.png'
import '../styles/videos.css'
const Videos = () => {
    let [video, setVideo] = useState([])
    let [shorts, setShorts] = useState([])

    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(' http://localhost:4000/videos')
            let x = await response.json()
            setVideo(x)

            let response1 = await fetch(' http://localhost:4000/shorts')
            let x1 = await response1.json()
            setShorts(x1)
        }
        fetchdata()
    })

    let removeVideo = (id, name) => {
        //permanent delete
        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got deleted`)
        //temp delete
        // let result = video.filter((x) =>
        //     x.id !== id
        // )

        // setVideo(result)
        // alert(`The ${name} video got Removed`)
    }



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