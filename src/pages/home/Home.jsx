import { Post } from "../../components/post/Post"
import { RightBox } from "../../components/rightBox/RightBox"
import "./home.css"


export const Home = () => {
  return (
    <div className="container">
        <div className="home-page">
            <div className="home-page-left"></div>
              <div className="posts">
                <Post top bottom/>
                <Post top bottom/>
                <Post top bottom/>
              </div>
            <div className="home-page-right"></div>
            <RightBox/>
        </div>
    </div>
  )
}
