package at.msm.asobo.services;

import at.msm.asobo.entities.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;

@Service
public class EventService {
    private ArrayList<Event> events;

    public EventService(){
        this.events = new ArrayList<Event>();
    }


    public ArrayList<Event> getAllEvents(){
        return events;
    }


    public Event addNewEvent(Event event) {
        this.events.add(new Event(
                event.getName(),
                event.getDescription(),
                event.getDate(),
                event.getLocation()));
        return event;
    }


    public Event findEventByID(UUID id) {

        for (Event event : this.events) {
            if (event.getId().equals(id)) {
                return event;
            }
        }
        return null;
    }

    public Event deleteEventByID(UUID id) {
        for (Event event : this.events) {
            if (event.getId().equals(id)) {
                this.events.remove(event);
                return event;
            }
        }
        return null;
    }

}
