import { useRecoilState } from "recoil";
import { Modalstate } from "../../recoil/atoms/ModalAtom";
import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { Input } from "antd";
import { BsFillCameraFill } from "react-icons/bs";
import { useRef, useState } from "react";
import {db, storage} from "../../firebase";
import { addDoc , collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import {ref , getDownloadURL , uploadString} from "firebase/storage";

const { TextArea } = Input;
const ImageModal = () => {
  const [open, setOpen] = useRecoilState(Modalstate);

  const [selectedFile, setSelectedFile] = useState(null);

  const [description, setDescription] = useState("");

  const [loading , setLoading] = useState(false);

  const filePickerRef = useRef(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };

    reader.onerror = () => {
      alert("Error");
    };
  };

//Function to add image and post to the firebase

const UploadPost = async() => {
    
    if(loading) return;

    setLoading(true);

    const docRef = await addDoc(collection (db , "posts") , {

           timestamp : serverTimestamp(),
           caption : description,
    })


    console.log(docRef.id , "doc-id")

     const imageRef = ref(storage, `posts/${docRef.id}/image`);

      await uploadString(imageRef , selectedFile , "data_url")
      .then(async (snapshot) => {

           const downloadURL = await getDownloadURL(imageRef);

           await  updateDoc(doc(db , "posts" ,docRef.id) , {

                 image : downloadURL
           })
      })

       setOpen(false);
       setLoading(false);
       setSelectedFile(null);
       setDescription("");
}


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        onClose={setOpen}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-[800px] sm: min-h-screen pt-4 px-4 pb-4 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75  transition-opacity" />
          </Transition.Child>

          <span className="hidden  sm:inline-block  sm:h-screen">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:p-6">
              <div>
                {/* Camera icon */}

                {selectedFile ? (
                  <img
                    w-full
                    object-contain
                    cursor-pointer
                    src={selectedFile}
                    alt="img"
                    onClick={() => setSelectedFile(null)}
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#00BA7C] cursor-pointer"
                  >
                    <BsFillCameraFill className="aria-hidden" h-6 w-6 />
                  </div>
                )}

                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Upload a photo
                  </Dialog.Title>

                  <div>
                    <input
                      type="file"
                      ref={filePickerRef}
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div type="text">
                    <TextArea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{
                        background: "none",
                        borderRadius: "8px",
                        color: "#000",
                        fontSize: "1.2em",
                        fontWeight: "600",
                        width: "100%",
                        letterSpacing: "0.1em",
                        border: "none",
                        outline: "none",
                      }}
                      rows={4}
                      placeholder="What's happening ?"
                      maxLength={300}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={() => UploadPost()}
                  type="button"
                  //    disabled={@disabled}
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#00BA7C] text-base font-medium text-white focus:outline-none disabled:cursor-not-allowed disabled:bg-[#00BA7C] disabled:bg-opacity-70 focus:ring-red-500"
                >
                  {loading ? "...Uploading" :  "Upload Post"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ImageModal;
