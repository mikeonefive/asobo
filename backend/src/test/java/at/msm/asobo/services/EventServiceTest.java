package at.msm.asobo.services;

import at.msm.asobo.dto.event.EventSummaryDTO;
import at.msm.asobo.entities.Event;
import at.msm.asobo.mappers.EventDTOEventMapper;
import at.msm.asobo.repositories.EventRepository;
import at.msm.asobo.security.JwtUtil;
import at.msm.asobo.services.events.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EventServiceTest {

    @Mock
    private EventRepository eventRepository;

    @Mock
    private EventDTOEventMapper eventDTOEventMapper;

    @Mock
    JwtUtil jwtUtil;

    @InjectMocks
    private EventService eventService;

    private UUID event1Id;
    private UUID event2Id;
    private Event event1;
    private Event event2;
    private EventSummaryDTO eventSummaryDTO1;
    private EventSummaryDTO eventSummaryDTO2;


    @BeforeEach
    void setup() {
        event1Id = UUID.randomUUID();
        event2Id = UUID.randomUUID();

        event1 = new Event();
        event1.setId(event1Id);
        event1.setTitle("Event 1");

        event2 = new Event();
        event2.setId(event2Id);
        event2.setTitle("Event 2");

        eventSummaryDTO1 = new EventSummaryDTO();
        eventSummaryDTO1.setId(event1Id);

        eventSummaryDTO2 = new EventSummaryDTO();
        eventSummaryDTO2.setId(event2Id);
    }

    @Test
    void getAllEvents_returnsMappedEventSummaries() {
        List<Event> events = List.of(event1, event2);

        List<EventSummaryDTO> mappedDtos = List.of(eventSummaryDTO1, eventSummaryDTO2);

        when(eventRepository.findAll()).thenReturn(events);
        when(eventDTOEventMapper.mapEventsToEventSummaryDTOs(events))
                .thenReturn(mappedDtos);

        List<EventSummaryDTO> result = eventService.getAllEvents();

        assertNotNull(result);
        assertThat(result).isEqualTo(mappedDtos);

        verify(eventRepository).findAll();
        verify(eventDTOEventMapper).mapEventsToEventSummaryDTOs(events);
        verifyNoMoreInteractions(eventRepository, eventDTOEventMapper);
    }
}