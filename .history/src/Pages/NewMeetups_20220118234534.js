import React from 'react'
import {  } from 'react-router-dom'

import NewMeetupForm from '../components/NewMeetupForm'

function NewMeetupsPage() {
    const history = useHistory ();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-page-a58b4-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            ).then(()=>{
                history.replace('/');
            });
        }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupsPage;
