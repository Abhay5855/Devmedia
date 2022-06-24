import { Form, Input, InputNumber } from "antd";
import "./basicinfo.css";
const { TextArea } = Input;

const BasicInfo = ({ formData, setFormData }) => {
 



const onAgeChange = (value)  => {

  setFormData({...formData , age : value});
       
}

const onExperienceChange = (value) => {

  setFormData({...formData , experience : value});
}
 
  return (
    <>
      <div className="basicinfo__container">
        <Form>
          <p className='details__input'>Please enter user name</p>
          <Form.Item
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              value={formData.userName}
              onChange={(e) => setFormData({...formData , userName :e.target.value})}
              className="input"
              placeholder="Please enter username"
            />
          </Form.Item>
          <p className='details__input'>Please enter name</p>
          <Form.Item
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input value={formData.name}  onChange={(e) => setFormData({...formData , name :e.target.value})}  className="input" placeholder="Please enter name" />
          </Form.Item>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p className='details__input'>Experience</p>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your experience!" },
                ]}
              >
                <InputNumber
                  className="number__input"
                  value={formData.experience}
                  onChange={onExperienceChange}
                  min={0}
                  max={15}
                 
                  type="number"
                  placeholder="Exp"
                />
              </Form.Item>
            </div>
            <div>
              <p className='details__input'>Age</p>
              <Form.Item
                rules={[{ required: true, message: "Please input your age!" }]}
              >
                <InputNumber
                 onChange={onAgeChange}
                value={formData.age}
                  className="number__input"
                  min={0}
                  max={100}
                  
                  type="number"
                  placeholder="Age"
                />
              </Form.Item>
            </div>
          </div>
          <p className='details__input'>Description</p>
          <Form.Item>

          <TextArea value={formData.tech} onChange={(e) => setFormData({...formData , tech :e.target.value})}  placeholder="Description" />
       
           
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default BasicInfo;
