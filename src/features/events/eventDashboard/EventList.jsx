import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({ events, setFormOpen, selectEvent, deleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          setFormOpen={setFormOpen}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};

export default EventList;
