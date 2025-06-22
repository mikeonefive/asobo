package at.msm.asobo.dto.medium;

import java.net.URI;
import java.util.UUID;

public class MediumDTO {

    private UUID id;
    private UUID eventId;
    protected String mediumURI;

    public MediumDTO() {
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getEventId() {
        return eventId;
    }

    public void setEventId(UUID eventId) {
        this.eventId = eventId;
    }

    public void setMediumURI(String mediumURI) {
        this.mediumURI = mediumURI;
    }

    public UUID getId() {
        return this.id;
    }

    public String getMediumURI() {
        return this.mediumURI;
    }
}


