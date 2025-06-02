package at.msm.asobo.entities.media;

import at.msm.asobo.entities.Event;
import jakarta.persistence.*;

import java.net.URI;
import java.util.UUID;

@Entity
public abstract class Medium {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    protected URI mediumURI;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    public Medium() {
    }

    public Medium(URI mediumURI){
        this.mediumURI=mediumURI;
    }

    public URI getMediumURI() {
        return mediumURI;
    }

    public void setMediumURI(URI mediumURI) {
        this.mediumURI = mediumURI;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getId() {
        return id;
    }

    public Event getEvent() {
        return this.event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
