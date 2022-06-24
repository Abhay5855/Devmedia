



import {Form , Input } from "antd";



const CareerInfo = ({ formData, setFormData }) => {


    return (
       <>

<div className='basicinfo__container'>

<Form>
<p>Please enter github URL</p>
    <Form.Item
   rules={[{ required: true, message: 'Please input your github link!' }]}>
        <Input value={formData.github} onChange={(e) => setFormData({...formData , github :e.target.value})} className='input'  placeholder="Please enter Github link" />
    </Form.Item>
    <p>Please enter Linkedin URL</p>
    <Form.Item   rules={[{ required: true, message: 'Please input your linkedin link!' }]}>
        <Input value={formData.linkedin} onChange={(e) => setFormData({...formData , linkedin :e.target.value})}  className='input'  placeholder="Please enter linkedin URL" />
    </Form.Item>

    <p>Enter your Portfolio URL</p>
    <Form.Item >
        <Input value={formData.portfolio} onChange={(e) => setFormData({...formData , portfolio :e.target.value})}  className='input'  placeholder="Please enter portfolio URL" />
    </Form.Item>

    <p>Enter your Blogs URL(optional)</p>
    <Form.Item >
        <Input value={formData.blog} onChange={(e) => setFormData({...formData , blog :e.target.value})}  className='input'  placeholder="Please enter Blog URL" />
    </Form.Item>
    

    
</Form>


</div>
          

          
       
       </>
    )
}

export default  CareerInfo;