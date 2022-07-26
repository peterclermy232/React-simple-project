import React from 'react'
import { useRef } from 'react'
import Card from './meetups/ui/Card'
import './NewMeetupForm.css'

function NewMeetupForm(props) {
   const titleInputRef = useRef();
   const imageInputRef = useRef();
   const addressInputRef = useRef();
   const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;


        const meetupData = {
            title: enteredTitle,
            image:enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };
        
        props.onAddMeetup(me)
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
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className="control">
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className="control">
                <label htmlFor="description">Description</label>
                <textarea id="description" required rows='5' ref={descriptionInputRef} ></textarea>
            </div>
            <div className="actions">
                <button>Add Meetup</button>
            </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
