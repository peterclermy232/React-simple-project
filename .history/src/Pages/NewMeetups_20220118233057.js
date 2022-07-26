import React from 'react'
import NewMeetupForm from '../components/NewMeetupForm'

function NewMeetupsPage() {

    function addMeetupHandler(m){}

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={} />
        </section>
    )
}

export default NewMeetupsPage;
