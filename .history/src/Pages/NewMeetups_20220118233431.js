import React from 'react'
import NewMeetupForm from '../components/NewMeetupForm'

function NewMeetupsPage() {

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-page-a58b4-default-rtdb.firebaseio.com/meetups.json');
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;
