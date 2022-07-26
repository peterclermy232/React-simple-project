import React from 'react'
import { useState } from 'react'
import  MeetupList from '../components/meetups/MeetupList';













612&w=0&h=hfAmhGgTCJsyzgC8BpyhZZ7-fyZNtcw7-YnAoMw1olw=',






function AllMeetupsPage() {
    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([])

    fetch('https://react-page-a58b4-default-rtdb.firebaseio.com/meetups.json'
    ).then(response =>{
       return response.json();
    }).then(data => {
        setIsLoading(false);
        setLoadedMeetups(data);
    });

    if(isLoading){
        return (
            <section>
                <p>Loading....</p>
            </section>
        );
    }


    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={ loadedMeetups } />
        </section>
    )
}

export default AllMeetupsPage
