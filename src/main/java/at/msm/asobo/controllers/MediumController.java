package at.msm.asobo.controllers;

import at.msm.asobo.dto.medium.MediumCreationDTO;
import at.msm.asobo.dto.medium.MediumDTO;
import at.msm.asobo.entities.Medium;
import at.msm.asobo.services.MediumService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/events/{eventID}/media")
public class MediumController {

   private final MediumService mediumService;

    public MediumController(MediumService mediumService) {
        this.mediumService = mediumService;
    }


    @GetMapping()
    public List<MediumDTO> getAllMedia(@PathVariable UUID eventID) {
        List<MediumDTO> media = mediumService.getAllMediaByEventId(eventID);
        return media;
    }


    @GetMapping("/{mediumID}")
    public MediumDTO getMediumById(@PathVariable UUID eventID, @PathVariable UUID mediumID) {
        Medium medium = this.mediumService.getMediumByEventIdAndMediumId(eventID, mediumID);
        return new MediumDTO(medium);
    }

    @PostMapping
    public MediumDTO addMediumToEventById(@PathVariable UUID eventID, @RequestBody @Valid MediumCreationDTO medium) {
        MediumDTO savedMedium = this.mediumService.addMediumToEventById(eventID, medium);
        return savedMedium;
    }


    @DeleteMapping("/{mediumID}")
    public MediumDTO deleteMediumById(@PathVariable UUID eventID, @PathVariable UUID mediumID) {
        MediumDTO deletedMedium = this.mediumService.deleteMediumById(eventID, mediumID);
        return deletedMedium;
    }
}
