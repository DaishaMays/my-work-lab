import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(props) {

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  })



  function handleSubmit(){

  }

  function handleChange(e){
    setState({
      ...state,
      [e.terget.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files[0])
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        <Image src="https://www.henryford.com/-/media/henry-ford-blog/images/interior-banner-images/2016/09/workspace.jpg" /> My Work Lab
      </Header>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            name="username"
            placeholder="username"
            value={state.username}
            onChange={handleChange}
            required
          />
          <Form.Input
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <Form.Input
            name="password"
            type="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          <Form.Input
            name="passwordConf"
            type="password"
            placeholder="Confirm Password"
            value={state.passwordConf}
            onChange={handleChange}
            required
          />
          <Form.TextArea
            label="bio"
            name="bio"
            placeholder="Tell us more about your dogs..."
            onChange={handleChange}
          />
          <Form.Field>
            <Form.Input
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
            />
          </Form.Field>
          <Button type="submit" className="btn">
            Signup
          </Button>
        </Segment>
        {error ? <ErrorMessage error={error} /> : null}
      </Form>
    </Grid.Column>
  </Grid>
  );
}