package at.msm.asobo.controllers;

import at.msm.asobo.entities.Event;
import at.msm.asobo.services.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/events")
public class EventController {

    private EventService eventService;


    public EventController(EventService eventService){
        this.eventService = eventService;

    }

    @GetMapping
    public ArrayList<Event> getAllEvents(){
        return this.eventService.getAllEvents();
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.addNewEvent(event);
    }

    @GetMapping("/{id}")
    public Event getEventByID(@PathVariable UUID id) {
        return eventService.findEventByID(id);
    }

    @DeleteMapping("/{id}")
    public Event deleteEventByID(@PathVariable UUID id) {
        return eventService.deleteEventByID(id);
    }

}
