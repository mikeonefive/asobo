package at.msm.asobo.dto.medium;

import at.msm.asobo.entities.Medium;
import java.net.URI;
import java.util.UUID;

public class MediumDTO {

    private UUID id;
    protected URI mediumURI;


    public MediumDTO() {
    }

    public MediumDTO(Medium medium) {
        this.id = medium.getId();
        this.mediumURI = medium.getMediumURI();
    }

    public UUID getId() {
        return this.id;
    }

    public URI getMediumURI() {
        return this.mediumURI;
    }

}
