



import TweetNavbar from "./tweets__navbar/index";
import TweetUpload from "./tweet__upload/index";
import ImageModal from "../modals/index";


const Tweet = () => {


       

       return (

        <div>

            {/* navbar ->  navigate to home button */}

            <TweetNavbar />


            {/* Add tweet section */}

            <TweetUpload />


            {/* Display Tweets */}


            <ImageModal />
        </div>
       )
}


export default Tweet;