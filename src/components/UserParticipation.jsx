import React, {useEffect, useState} from 'react';
import data from "../data/data.json"
import AnotherUserParticipation from "./AnotherUserParticipation.jsx";
import ThankYouMessage from "./ThankYouMessage.jsx";

const UserParticipation = (props) => {

    const [language, setLanguage] = useState();
    const [setSubmit, setSetSubmit] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(language);
        console.log(props.voteCount);

        setSetSubmit(true);
    }

    const handleChange = (e) => {
        const {value} = e.target;
        const val = value.toLowerCase();


        setLanguage(value);

            props.setVoteCount((prevState) => {
                return{
                    ...prevState,
                    [val]: props.voteCount[val]+1
                }
            })



    }

    return (
        <>
            <h2>User Participation</h2>
            <div>

                <label htmlFor="">{data.question}</label>
                <form action="" onSubmit={handleSubmit}>
                    {
                        data.choices.map((item, index) => (
                            <>
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name={`language`}
                                        id={`option-${index}`}
                                        value={item.label}
                                        onChange={handleChange}

                                    />
                                    <label htmlFor={`option-${index}`}>{item.label}</label>
                                    <br/>
                                </div>


                            </>
                        ))
                    }



                    <button type={"submit"}>Submit</button>



                    <br/><br/>

                    <AnotherUserParticipation />


                </form>


                {
                    setSubmit && <>
                        <ThankYouMessage />
                    </>
                }



            </div>
        </>
    );
};

export default UserParticipation;
