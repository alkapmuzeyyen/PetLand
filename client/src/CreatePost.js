import React, { Component, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import {
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from 'react-select'
import bg from './assets/post_bg.png';
import bg2 from './assets/post_bg2.jpeg';
import { config } from './config';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.log("Event is:");
    console.log(event);
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
    console.log(this.state.file);
  }
  returnFileName()
  {
    return this.state.file;
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img className="photo" src={this.state.file}/>
      </div>
    );
  }
}

const options = [
  { value: 'cat', label: 'Cat' },
  { value: 'dog', label: 'Dog' },
  { value: 'bird', label: 'Bird' }
]

function validateInfo(values){
  let errors ={}
  /*console.log(values.breed);
  console.log(values.name);
  console.log(values.location);
  console.log(values.extra_info);*/
  if (!values.breed === "Select"){
    errors.name = "Breed required"
  }
  if (values.name === ""){
    errors.email = "Name required"
  }

  if (values.age === ""){
    errors.phone = "Age required"
  }

  if (values.location === ""){
    errors.phone = "Location required"
  }

  if (values.vaccinated === "Select"){
    errors.phone = "Vaccination Status required"
  }

  return errors;
}

const CreatePost = () => {

  const [values, setValues] = useState({
    name: '',
    breed: '',
    location: '',
    age: '',
    p_image: '',
    extra_info: '',
    vaccinated: '',
    ts: ''
  });

  const [errors, setErrors] = useState('');
  const [backend_error, setbackendError] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    const {name, value} = e.target;
    console.log(name);
    console.log(value);
    setValues({
      ...values,
      [name] : value
    });
  };

  const handleChangeBreed = e => {
    console.log(e);
    values.breed = e.value;
    console.log(values.breed);
  }

  const handleChangeVaccin = e => {
    console.log(e);
    values.vaccinated = e.value;
    console.log(values.vaccinated);
  }

  const handleSubmit = e => {
    console.log("handleSubmit");
    console.log("Breed: ",values.breed);
    console.log("Name: ",values.name);
    console.log("Age: ",values.age);
    console.log("Location: ",values.location);
    console.log("Vaccinated: ",values.vaccinated);
    console.log("Extra_info: ",values.extra_info);
    e.preventDefault();
    setErrors(validateInfo(values))
    if (errors==={}){
      console.log("no error");

    }
    createPost();
  }

  const createPost = () => {
    console.log("in");
    console.log(Upload);
    //console.log( Upload.props.file);
    console.log( Upload.props);
    console.log( Upload.properties.file);
    console.log( Upload.properties.state.file);
    //Axios.post("http://localhost:8000/api/createPost",
    Axios.post(`${config.SERVER_URI}/api/createPost`,
    {
      name: values.name,
      breed: values.breed,
      location: values.location,
      age: values.age,
      p_image: Upload.props.file,
      extra_info: values.extra_info,
      vaccinated: values.vaccinated,
      ts: new Date().toLocaleString() + ""

    }).then(response => {
      if (!response){
        console.log("no error");
      }
      setIsSubmitted(true);
      history.push("/feed");
    }).catch(error => {
        console.log("error in");
        console.log(error.response);
        let err = error.response.data.errors[0].msg;
        console.log(err);
        if (err){
          console.log(err);
          setbackendError(err);
          setValues({
            name: '',
            breed: '',
            location: '',
            age: '',
            p_image: '',
            extra_info: '',
            vaccinated: '',
            ts: ''
          });
          err ='';
        }
        else{
          setbackendError('');
          history.push("/feed");
          setIsSubmitted(true);
      }});
  }
  return (
    <div style={{ backgroundImage: `url(https://st.depositphotos.com/2015673/4034/v/950/depositphotos_40343767-stock-illustration-forest-landscape.jpg)`, display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      
      <Card border="danger" bg={"light".toLowerCase()}
        text={"light" === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2" style={{ width: '60rem' }}>
        <Form className="form" onSubmit={handleSubmit}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title className="makeCenter" style={{fontSize:28}}>Let's find a home for our pet friends !!</Card.Title>
          <br/>
          <Row>
            <Col>
              <FormGroup>
              <Label className="createPostTitle makeCenter">Breed</Label>
              <Select options={options} value={values.breed}
                  onChange={handleChangeBreed}></Select>
              </FormGroup>
              <FormGroup>
                <Label className="createPostTitle makeCenter">Name</Label>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange= {handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label className="createPostTitle makeCenter">Age</Label>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  min="0"
                  max="30"
                  value={values.age}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label className="createPostTitle makeCenter">Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  value={values.location}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label className="createPostTitle makeCenter">Vaccination Status</Label>
                <Select options={[{ value: 'true', label: 'Vaccinated' },
                    { value: 'false', label: 'Not Vaccinated' }]} value={values.vaccinated}
                  onChange={handleChangeVaccin}></Select>
              </FormGroup>
              <FormGroup>
                <Label className="createPostTitle makeCenter">Extra Info</Label>
                <Input
                  type="text"
                  name="extra_info"
                  id="extra_info"
                  value={values.extra_info}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          
            <Col className="makeCenter">
              <Upload id="upload"></Upload>
            </Col>
          </Row>
          <Row >
            <Col md={{offset: 8 }}>
              <Button className="makeCenter" variant="danger" size="lg" onClick={()=> {history.push("/feed");}} style={{marginRight:10}}>CANCEL</Button>
              <Button className="makeCenter" variant="success" size="lg" type="submit">POST</Button>
            </Col>
          </Row>
        <Card.Text>
        </Card.Text>
          
        </Card.Body><myInput name="breed"/>
        </Form>
      </Card>
    </div>
  );
}

export default CreatePost
