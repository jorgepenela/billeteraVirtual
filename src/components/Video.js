import ReactPlayer from "react-player";

const Video = (props) => {
    return (
        <>
            <section id="video">                
                <ReactPlayer url={props.url} playing={true} loop={true} controls={true} width="700px" height="700px"  style={ { margin : '0 auto'}} playsinline={true} muted={true} ></ReactPlayer>
            </section>
        </>
    );
}
 
export default Video;