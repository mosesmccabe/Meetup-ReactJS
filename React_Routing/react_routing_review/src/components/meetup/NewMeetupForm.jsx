import {useRef} from 'react';

import Card from "../ui/Card";
import formStyle from "./NewMeetupForm.module.css";

function NewMeetupForm(props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const discInputRef = useRef();
 
    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = discInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData)
        
    }

    return (
        <Card>
            <form className={formStyle.form} onSubmit={submitHandler}>
                <div className={formStyle.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type='text' required id="title" ref={titleInputRef} />
                </div>
                <div className={formStyle.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type='url' required id="image" ref={imageInputRef} />
                </div>
                <div className={formStyle.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type='text' required id="address" ref={addressInputRef} />
                </div>
                <div className={formStyle.control}>
                    <label htmlFor="disc">Description</label>
                    <textarea required id="disc" rows="5" ref={discInputRef}></textarea>
                </div>
                <div className={formStyle.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;