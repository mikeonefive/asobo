package at.msm.asobo.entities.media;

import at.msm.asobo.entities.Event;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
public class Gallery {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne
    private Event event;

    @OneToMany
    private List<Medium> media;

    public Gallery() {
    }

    public Gallery(UUID id, Event event, List<Medium> media) {
        this.id = id;
        this.event = event;
        this.media = media;
    }

    public Event getEvent() {
        return this.event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public List<Medium> getMedia() {
        return this.media;
    }

    public void setMedia(List<Medium> media) {
        this.media = media;
    }

}
