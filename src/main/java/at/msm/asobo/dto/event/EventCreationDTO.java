package at.msm.asobo.dto.event;

import at.msm.asobo.dto.medium.MediumDTO;
import at.msm.asobo.dto.comment.UserCommentDTO;
import at.msm.asobo.dto.user.UserDTO;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public class EventCreationDTO {
    private UUID id;

    @NotBlank(message = "Title is mandatory for event creation")
    private String title;

    @NotBlank(message = "Description is mandatory for event creation")
    private String description;

    private URI pictureURI;

    @NotBlank(message = "Location is mandatory for event creation")
    private String location;

    @NotNull(message = "Date is mandatory for event creation")
    private LocalDateTime date;

    private LocalDateTime creationDate;

    private LocalDateTime modificationDate;

    @NotNull(message = "Event creator is mandatory for event creation")
    private EventCreatorDTO creator;

    private List<UserDTO> participants;

    private List<UserCommentDTO> comments;

    private List<MediumDTO> media;

    public EventCreationDTO() {}

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
