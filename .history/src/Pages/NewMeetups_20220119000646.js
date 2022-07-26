import React from 'react'
import { useNavigate } from 'react-router-dom'

import NewMeetupForm from '../components/NewMeetupForm'

function NewMeetupsPage() {
    const navigate = useNavigate();

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
                na.replace('/');
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
