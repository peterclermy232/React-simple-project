import React from 'react'
import Card from './meetups/ui/Card'
import './NewMeetupForm.css'

function NewMeetupForm() {
    return (
        <Card>
            <form className="form">
                <div className="control">
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" />
                </div>
                <div className="control">
                    <label htmlFor="image">Meetup I</label>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
