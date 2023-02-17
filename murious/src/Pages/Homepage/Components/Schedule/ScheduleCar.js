import "./ScheduleCar.css";
import {Col} from "react-bootstrap";

export const ScheduleCard = ({date, event1t, event1, event2t, event2, event3t, event3, event4t, event4}) => {
    return(
        <div>
            <div className="sc-details">
                <h4>{date}</h4>
                <div className="sc-event">
                    <div>
                        <span>{event1t}</span>
                        <p>{event1}</p>
                    </div>
                    <div>
                        <span>{event2t}</span>
                        <p>{event2}</p>
                    </div>
                    <div>
                        <span>{event3t}</span>
                        <p>{event3}</p>
                    </div>
                    <div>
                        <span>{event4t}</span>
                        <p>{event4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}