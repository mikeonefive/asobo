package at.msm.asobo.services;

import at.msm.asobo.dto.medium.MediumCreationDTO;
import at.msm.asobo.dto.medium.MediumDTO;
import at.msm.asobo.entities.Event;
import at.msm.asobo.entities.Medium;
import at.msm.asobo.exceptions.MediumNotFoundException;
import at.msm.asobo.mappers.MediumDTOMediumMapper;
import at.msm.asobo.repositories.MediumRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@SpringBootTest()
class MediumServiceTest {

    @Mock
    private MediumRepository mediumRepository;

    @Mock
    private EventService eventService;

    @Mock
    private MediumDTOMediumMapper mediumMapper;

    @InjectMocks
    private MediumService mediumService;

    private UUID eventId;
    private UUID mediumId;

    @BeforeEach
    void setUp() {
        eventId = UUID.randomUUID();
        mediumId = UUID.randomUUID();
    }

    @Test
    void testGetAllMediaByEventId() {
        List<Medium> media = List.of(new Medium());
        List<MediumDTO> mediaDTOs = List.of(new MediumDTO());

        when(mediumRepository.findMediaByEventId(eventId)).thenReturn(media);
        when(mediumMapper.mapMediaToMediaDTOList(media)).thenReturn(mediaDTOs);

        List<MediumDTO> result = mediumService.getAllMediaByEventId(eventId);

        assertEquals(mediaDTOs, result);
        verify(mediumRepository).findMediaByEventId(eventId);
        verify(mediumMapper).mapMediaToMediaDTOList(media);
    }

    @Test
    void testGetMediumByEventIdAndMediumId_Found() {
        Medium medium = new Medium();
        when(mediumRepository.findMediumByEventIdAndId(eventId, mediumId)).thenReturn(Optional.of(medium));

        Medium result = mediumService.getMediumByEventIdAndMediumId(eventId, mediumId);

        assertEquals(medium, result);
    }

    @Test
    void testGetMediumByEventIdAndMediumId_NotFound() {
        when(mediumRepository.findMediumByEventIdAndId(eventId, mediumId)).thenReturn(Optional.empty());

        assertThrows(MediumNotFoundException.class, () -> {
            mediumService.getMediumByEventIdAndMediumId(eventId, mediumId);
        });
    }

    @Test
    void testGetMediumDTOByEventIdAndMediumId() {
        Medium medium = new Medium();
        MediumDTO mediumDTO = new MediumDTO();

        when(mediumRepository.findMediumByEventIdAndId(eventId, mediumId)).thenReturn(Optional.of(medium));
        when(mediumMapper.mapMediumToMediumDTO(medium)).thenReturn(mediumDTO);

        MediumDTO result = mediumService.getMediumDTOByEventIdAndMediumId(eventId, mediumId);

        assertEquals(mediumDTO, result);
    }

    @Test
    void testAddMediumToEventById() {
        MediumCreationDTO creationDTO = new MediumCreationDTO();
        Medium newMedium = new Medium();
        Medium savedMedium = new Medium();
        MediumDTO resultDTO = new MediumDTO();
        Event event = new Event();

        when(eventService.getEventById(eventId)).thenReturn(event);
        when(mediumMapper.mapMediumCreationDTOToMedium(creationDTO)).thenReturn(newMedium);
        when(mediumRepository.save(newMedium)).thenReturn(savedMedium);
        when(mediumMapper.mapMediumToMediumDTO(savedMedium)).thenReturn(resultDTO);

        MediumDTO result = mediumService.addMediumToEventById(eventId, creationDTO);

        assertEquals(resultDTO, result);
        assertEquals(event, newMedium.getEvent());
        verify(mediumRepository).save(newMedium);
    }

    @Test
    void testDeleteMediumById() {
        Medium medium = new Medium();
        MediumDTO dto = new MediumDTO();

        when(mediumRepository.findMediumByEventIdAndId(eventId, mediumId)).thenReturn(Optional.of(medium));
        when(mediumMapper.mapMediumToMediumDTO(medium)).thenReturn(dto);

        MediumDTO result = mediumService.deleteMediumById(eventId, mediumId);

        assertEquals(dto, result);
        verify(mediumRepository).delete(medium);
    }
}
