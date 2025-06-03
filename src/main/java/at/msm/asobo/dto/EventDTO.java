package at.msm.asobo.dto;

import at.msm.asobo.entities.Event;
import at.msm.asobo.entities.User;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class EventDTO {

    private UUID id;

    private String title;

    private String description;

    private String location;

    private LocalDateTime date;

    private LocalDateTime creationDate;

    private EventCreatorDTO creator;

    private List<String> participants;

    public EventDTO(Event event) {
        this.id = event.getId();
        this.title = event.getTitle();
        this.description = event.getDescription();
        this.location = event.getLocation();
        this.date = event.getDate();
        this.creationDate = event.getCreationDate();
        this.creator = new EventCreatorDTO(event.getCreator());

        this.participants = event.getParticipants()
                .stream()
                .map(User::getUsername)
                .toList();
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public EventCreatorDTO getCreator() {
        return creator;
    }

    public List<String> getParticipants() {
        return participants;
    }
}
