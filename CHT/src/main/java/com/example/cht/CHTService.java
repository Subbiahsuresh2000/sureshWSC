package com.example.cht;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CHTService {
    private final List<CHT> activities = new ArrayList<>();

    // Method to get all activities
    public List<CHT> getAllActivities() {
        return activities;
    }

    // Method to add a new activity
    public void addActivity(CHT activity) {
        activities.add(activity);
    }
}
