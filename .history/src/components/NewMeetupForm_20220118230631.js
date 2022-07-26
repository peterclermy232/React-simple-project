import React from 'react'
import { useRef } from 'react'
import Card from './meetups/ui/Card'
import './NewMeetupForm.css'

function NewMeetupForm() {
   const titleInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const entered

    }
    return (
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
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
                <textarea id="description" required rows='5'></textarea>
            </div>
            <div className="actions">
                <button>Add Meetup</button>
            </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
