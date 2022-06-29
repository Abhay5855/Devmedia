



import TweetNavbar from "./tweets__navbar/index";
import TweetUpload from "./tweet__upload/index";
import TweetPosts from "./tweet_posts/index";
import ImageModal from "../modals/index";


const Tweet = () => {


       

       return (

        <div>

            {/* navbar ->  navigate to home button */}

            <TweetNavbar />


            {/* Add tweet section */}

            <TweetUpload />


            {/* Display Tweets */}

            <TweetPosts />

            


            <ImageModal />
        </div>
       )
}


export default Tweet;