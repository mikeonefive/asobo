package at.msm.asobo.Thymeleaf;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ThymeleafPageController {
    @GetMapping
    public String home(Model model) {
        model.addAttribute("name", "Edmund Sackbauer");
        return "index";
    }

    @GetMapping("/{page}")
    public String renderPage(@PathVariable String page, Model model) {
        return page; // returns templates/{page}.html
    }
}
