package com.example.cht;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cht")
public class CHTController {

    @Autowired
    private CHTService chtService;

    // Get all activities
    @GetMapping("/activities")
    public List<CHT> getAllActivities() {
        return chtService.getAllActivities();
    }

    // Add a new activity
    @PostMapping("/activities")
    public void addActivity(@RequestBody CHT activity) {
        chtService.addActivity(activity);
    }
}
