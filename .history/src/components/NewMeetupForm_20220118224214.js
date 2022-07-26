import React from 'react'
import Card from './meetups/ui/Card'
import './NewMeetupForm.css'

function NewMeetupForm() {
    return (
        <Card>
            <form className="form">
                <div className="control">
                    <label>Meetup Title</label>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupForm
