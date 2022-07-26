import React from 'react'
import Card from './meetups/ui/Card'
import './NewMeetupForm.css'

function NewMeetupForm() {
    return (
        <Card>
            <form className="form">
                <div className="control">
                    <label>Meetup Title</label>
                    <input type="text" required id="titl"
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupForm