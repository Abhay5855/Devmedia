



import TweetNavbar from "./tweets__navbar/index";
import TweetUpload from "./tweet__upload/index";

const Tweet = () => {

       return (

        <div>

            {/* navbar ->  navigate to home button */}

            <TweetNavbar />


            {/* Add tweet section */}

            <TweetUpload />


            {/* Display Tweets */}
        </div>
       )
}


export default Tweet;