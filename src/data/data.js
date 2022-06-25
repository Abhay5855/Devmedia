


import { GoPerson  , GoHome} from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa"

export const sidebarData = [{

     route : '/home',
     label : 'Home',
     icon : <GoHome style={{ fontSize: "22px" }} />,
     active : true,

},

{

    route : '/explore',
label : 'Explore',
icon : <FaHashtag style={{ fontSize: "22px" }} />,

},
{

    route : '/bookmarks',
label : 'Bookmarks',
icon : <BiBookmark style={{ fontSize: "22px" }} />,

},
{

route : '/profile',
label : 'Profile',
icon : <GoPerson  style={{ fontSize: "22px" }} />

},

]

