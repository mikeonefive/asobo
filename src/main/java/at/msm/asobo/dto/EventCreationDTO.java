package at.msm.asobo.dto;

import at.msm.asobo.entities.Event;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class EventCreationDTO {
    private UUID id;

    private String title;

    private String description;

    private URI pictureURI;

    private String location;

    private LocalDateTime date;

    private LocalDateTime creationDate;

    private LocalDateTime modificationDate;

    private EventCreatorDTO creator;

    private List<UserDTO> participants;

    private List<UserCommentDTO> comments;

    private List<MediumDTO> media;

    public EventCreationDTO() {}

    public EventCreationDTO(Event event) {
        this.title = event.getTitle();
        this.creator = new EventCreatorDTO(event.getCreator());
        this.description = event.getDescription();
        this.location = event.getLocation();
        this.date = event.getDate();
        this.media = event.getMedia().stream().map(MediumDTO::new).toList();
        this.comments = event.getComments().stream().map(UserCommentDTO::new).toList();
        this.pictureURI = event.getPictureURI();
        this.participants = event.getParticipants().stream().map(UserDTO::new).toList();
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

    public URI getPictureURI() {
        return pictureURI;
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

    public LocalDateTime getModificationDate() {
        return modificationDate;
    }

    public EventCreatorDTO getCreator() {
        return creator;
    }

    public List<UserDTO> getParticipants() {
        return participants;
    }

    public List<UserCommentDTO> getComments() {
        return comments;
    }

    public List<MediumDTO> getMedia() {
        return media;
    }
}
