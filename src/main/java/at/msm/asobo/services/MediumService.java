package at.msm.asobo.services;

import at.msm.asobo.dto.medium.MediumCreationDTO;
import at.msm.asobo.dto.medium.MediumDTO;
import at.msm.asobo.entities.Event;
import at.msm.asobo.entities.Medium;
import at.msm.asobo.exceptions.EventNotFoundException;
import at.msm.asobo.exceptions.MediumNotFoundException;
import at.msm.asobo.repositories.EventRepository;
import at.msm.asobo.repositories.MediumRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class MediumService {


    private final MediumRepository mediumRepository;
    private final EventRepository eventRepository;


    public MediumService(MediumRepository mediumRepository, EventRepository eventRepository) {
        this.mediumRepository = mediumRepository;
        this.eventRepository = eventRepository;
    }


    public List<MediumDTO> getAllMediaByEventId(UUID eventId) {
        List<Medium> media = this.mediumRepository.findMediaByEventId(eventId);
        return media.stream().map(MediumDTO::new).toList();
    }


    public Medium getMediumByEventIdAndMediumId(UUID eventID, UUID id) {
        Medium foundMedium = this.mediumRepository.findMediumByEventIdAndId(eventID, id)
                                    .orElseThrow(() -> new MediumNotFoundException(id));
        return foundMedium;
    }


    public MediumDTO addMediumToEventById(UUID eventID, MediumCreationDTO creationDTO) {
        Event event = eventRepository.findById(eventID)
                .orElseThrow(() -> new EventNotFoundException(eventID));
        Medium newMedium = new Medium(creationDTO);
        newMedium.setEvent(event);

        Medium savedMedium = this.mediumRepository.save(newMedium);
        return new MediumDTO(savedMedium);
    }


    public MediumDTO deleteMediumById(UUID eventID, UUID id) {
        Medium medium = this.getMediumByEventIdAndMediumId(eventID, id);
        mediumRepository.delete(medium);
        return new MediumDTO(medium);
    }

    // TODO update Media???
}
