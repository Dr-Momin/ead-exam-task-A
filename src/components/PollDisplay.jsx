import React from 'react';
import data from "../data/data.json"

const PollDisplay = () => {
    return (
        <>
            <h2>Poll</h2>
            <div>

                <h2>{data.question}</h2>


                <table border={"1"}>

                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Votes</th>
                        </tr>
                    </thead>

                    {data.choices.map((item) => (
                        <tr key={item.id}>
                            <td>{item.label}</td>
                            <td>{item.votes}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
};

export default PollDisplay;


// <li key={choice.id}>
//     {choice.label}: {choice.votes}
// </li>
