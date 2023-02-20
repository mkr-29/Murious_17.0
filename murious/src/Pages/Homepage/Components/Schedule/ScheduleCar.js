import "./ScheduleCar.css";
import {Col} from "react-bootstrap";

export const ScheduleCard = ({date, event1t, event1, event2t, event2, event3t, event3, event4t, event4, event5t, event5, event6t, event6, event7t, event7, event8t, event8, event9t, event9}) => {
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
                    <div>
                        <span>{event5t}</span>
                        <p>{event5}</p>
                    </div>
                    <div>
                        <span>{event6t}</span>
                        <p>{event6}</p>
                    </div>
                    <div>
                        <span>{event7t}</span>
                        <p>{event7}</p>
                    </div>
                    <div>
                        <span>{event8t}</span>
                        <p>{event8}</p>
                    </div>
                    <div>
                        <span>{event9t}</span>
                        <p>{event9}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}