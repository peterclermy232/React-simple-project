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
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" />
                </div>
                <div className="control">
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id="address" />
            </div>
            <div className="control">
                <label htmlFor="description">Description</label>
                
            </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
