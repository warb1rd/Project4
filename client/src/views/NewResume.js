import React from 'react'
import { Form , Button } from 'semantic-ui-react'

const NewResume = () => (
    <Form className="Form-container">
        <Form.Group widths='equal'>
            <Form.Field label='NAME' control='input' />
            <Form.Field label='EMAIL' control='input' />
            <Form.Field label='PHONE' control='input' />
        </Form.Group>

        <Form.Field label='SUMMARY' control='textarea' rows='3' />
        <Form.Field label='TECHNICAL SKILLS' control='textarea' rows='1' />
        
        <Form.Group widths='equal'>
            <Form.Field label='PROJECTS' placeholder='Title' control='input' rows='1' />
            <Form.Field label='.' placeholder='Description' control='textarea' rows='2' />
        </Form.Group>

        <Form.Group widths='equal'>
            <Form.Field label='EXPERIENCE' placeholder='Company' control='input' rows='1' />
            <Form.Field label='.' placeholder='Title' control='input' rows='2' />
            <Form.Field label='.' placeholder='Date from' control='input' rows='2' />
            <Form.Field label='.' placeholder='Date to' control='input' rows='2' />
        </Form.Group>
        <Form.Field placeholder='Details' control='textarea' rows='2' />
        
        <Form.Group widths='equal'>
            <Form.Field label='EDUCATION' placeholder='Institution' control='input' rows='1' />
            <Form.Field label='.' placeholder='Degree' control='input' rows='2' />
            <Form.Field label='.' placeholder='Date' control='input' rows='2' />
        </Form.Group>
        
        <Form.Field label='SUBMIT' control='button'>
        HTML Button
        </Form.Field>

        <Form.Group grouped>
            <label>Do you want to make your resume searchable?</label>
            <Form.Field label='Make Public' control='input' type='checkbox' />
        </Form.Group>
  </Form>
)

export default NewResume