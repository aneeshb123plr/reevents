import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent, createEvent } from '../eventAction';

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((evt) => evt.id === match.params.id)
  );
  const initalInputs = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initalInputs);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onHandlerSubmit = (e) => {
    e.preventDefault();
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            attendees: [],
            hostedBy: 'Bob',
            hostPhotoURL: '/assets/user.png',
          })
        );
    history.push('/events');
  };
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Form onSubmit={onHandlerSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={values.title}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venu"
            name="venue"
            value={values.venue}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={changeHandler}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="Cancel"
          as={Link}
          to="/events"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
