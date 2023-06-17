import { useRef } from 'react';
import videoimg from '../images/youtubeadd-video.jpg'
import '../styles/addvideo.css'
import { useNavigate } from 'react-router-dom';

const AddVideo = () => {

    let navigate= useNavigate()//used to navigate to a particular path
    let thumbnail=useRef(null)
    let title =useRef(null)
    let channel=useRef(null)
    let views=useRef(null)

    let upload =(e)=>{
        e.preventDefault()
        let data={
           thumbnail: thumbnail.current.value,
           title:title.current.value,
           channel:channel.current.value,
           views:views.current.value
        }
        //fetch (url,{method:" "}) by default it used as to get data 
        //headers- type of data
       fetch('http://localhost:4000/videos',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
       })
       alert("vidoe uploaded succefully")
       navigate('/')
    }

    return (
        <div className="add">
            <div className="pic">
                <img src={videoimg} alt="" width={400} height={600} />
            </div>
            <div className="container">
                <div className="heading">
                    <h1>Welcome To Youtube ADD-VIDEOS</h1>
                    <p>Come on Add a Vidoe</p>
                </div>
                <div className="fill">
                    <form action="" onSubmit={upload}>
                    <br /><br />
                        <label htmlFor="">Thumbnail</label>
                        <input ref={thumbnail} type="url" placeholder='Enter Thumbnail url'/><br /><br />
                        <label htmlFor="">Title</label>
                        <input ref={title} type="text" placeholder='Enter Title'/><br /><br />
                        <label htmlFor="">Channel</label>
                        <input ref={channel} type="text" placeholder='Enter Channel name'/><br /><br />
                        <label htmlFor="">Views</label>
                        <input ref={views} type="text" placeholder='Enter Views'/>
                        <button>Add Video</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;