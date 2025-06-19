package at.msm.asobo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/events")
    public String showEventsPage() {
        return "events"; // maps to src/main/resources/templates/events.html (Thymeleaf)
    }

//    @GetMapping("/events/{id}")
//    public String showSingleEventPage() {
//        return "event"; // maps to event.html
//    }
}
