package at.msm.asobo.dto.medium;

import at.msm.asobo.dto.event.EventDTO;
import at.msm.asobo.entities.Medium;
import java.net.URI;

public class MediumCreationDTO {

    protected URI mediumURI;
    private EventDTO event;

    public MediumCreationDTO() {
    }

    public MediumCreationDTO(Medium medium) {
        this.mediumURI = medium.getMediumURI();
        this.event = new EventDTO(medium.getEvent());
    }

    public URI getMediumURI() {
        return this.mediumURI;
    }

    public EventDTO getEvent() {
        return this.event;
    }
}
