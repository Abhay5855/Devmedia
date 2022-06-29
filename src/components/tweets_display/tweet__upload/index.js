import styled from 'styled-components'
import { Input } from 'antd'
import { IoMdPhotos } from 'react-icons/io'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { message} from 'antd';
import { Modalstate } from '../../../recoil/atoms/ModalAtom'
import { db } from '../../../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const { TextArea } = Input
const TweetUpload = () => {
  const [open, setOpen] = useRecoilState(Modalstate)
  const [loading, setLoading] = useState(false)

  const [tweet, setTweet] = useState('')

  const UploadTweet = async () => {
    setLoading(true)

    await addDoc(collection(db, 'posts'), {
      timeStamp: serverTimestamp(),
      caption: tweet,
    })
    .then(() => message.success('Post Uploaded'));

    setLoading(false)
    setTweet('')
  }


  const disabled = !tweet;

  return (

    <>
    <Container>
      <TextBox>
        <Img
          src="https://pbs.twimg.com/profile_images/993786179802853376/OoRcUdjq_400x400.jpg"
          alt="img"
        />

        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <TextArea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            style={{
              background: '#28343E',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '1.2em',
              fontWeight: '700',
              width: '100%',
              border: 'none',
              outline: 'none',
            }}
            rows={4}
            placeholder="What's happening ?"
            maxLength={300}
          />

          <Add>
            <IconContainer onClick={() => setOpen(true)}>
              <IoMdPhotos
                style={{
                  fontSize: '22px',
                  color: '#00BA7C',
                  cursor: 'pointer',
                }}
              />
              <Text>Photo</Text>
            </IconContainer>

            <Tweet disabled={disabled} className="disabled:cursor-not-allowed disabled:bg-[#00BA7C] disabled:bg-opacity-50" onClick={(e) => UploadTweet()}>{loading ? 'Uploading' : 'Tweet'}</Tweet>
          </Add>
        </div>
      </TextBox>
    </Container>
    </>
  )
}

export default TweetUpload

const Container = styled.div`
  border-radius: 8px;
  background: #28343e;
  margin-top: 0.5em;
  width: 100%;
  height: auto;
`

const TextBox = styled.div`
  display: flex;
  padding: 1em;
`

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1em;
`

const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
`

const IconContainer = styled.div`
  padding: 0.5em 1.2em 0.5em 1.2em;
  border-radius: 999999px;
  border: 0.5px solid #71767b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Text = styled.h2`
  margin-left: 0.75em;
  color: #fff;
  font-size: 1.2em;
  font-weight: 400;
`

const Tweet = styled.button`
  width: 50%;
  color: #fff;
  background: #00ba7c;
  padding: 0.5em 1.2em 0.5em 1.2em;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
`
