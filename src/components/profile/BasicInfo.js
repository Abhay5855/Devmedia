import { Form, Input, InputNumber , Select} from "antd";
import "./basicinfo.css";
const { Option } = Select;

const BasicInfo = ({ formData, setFormData }) => {
 


  
const children = ['React Js' , 'Javascript' , 'Firebase' , 'Node JS' , 'MongoDb' , 'Java' ,'C++' , 'Python' , ];

// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

const handleChange = (value) => {
      
    setFormData({...formData , tech : value})

  
       
};

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
          <p>Please enter user name</p>
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
          <p>Please enter name</p>
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
              <p>Experience</p>
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
              <p>Age</p>
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
          <p>Choose tech stack</p>
          <Form.Item>
          <Select
    mode="tags"
    style={{
      width: '100%',
    }}
    placeholder="Choose stack"
    onChange={handleChange}
  >

    {
        children.map((item , idx) => {
              return (
                 
                <Option onChange={() => handleChange(item)}  key={item}></Option>

              )
        })
    }
    
  </Select>
           
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default BasicInfo;
