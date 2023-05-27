import './App.css';
import PollDisplay from "./components/PollDisplay.jsx";
import UserParticipation from "./components/UserParticipation.jsx";
import {useState} from "react";
import AnotherUserParticipation from "./components/AnotherUserParticipation.jsx";

function App() {

    const [voteCount, setVoteCount] = useState({
        javascript: 0,
        python: 0,
        java: 0,
        ["c#"]: 0
    });

    return (
    <>

        <PollDisplay />

        <UserParticipation
            voteCount={voteCount}
            setVoteCount={setVoteCount}
        />



    </>
  )
}

export default App


