package at.msm.asobo.mapper;

import at.msm.asobo.dto.event.EventDTO;
import at.msm.asobo.entities.Event;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface EventDTOEventMapper {
    EventDTO mapEventToEventDTO(Event event);
    Event mapEventDTOToEvent(EventDTO eventDTO);

    List<EventDTO> mapEventsToEventDTOs(List<Event> events);
    List<Event> mapEventDTOsToEvents(List<EventDTO> eventDTOs);
}
