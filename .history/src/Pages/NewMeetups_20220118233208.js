import React from 'react'
import NewMeetupForm from '../components/NewMeetupForm'

function NewMeetupsPage() {

    function addMeetupHandler(meetupData){
        fetch('');
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;
