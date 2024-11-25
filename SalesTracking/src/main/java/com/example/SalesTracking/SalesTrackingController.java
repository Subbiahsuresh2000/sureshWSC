package com.example.SalesTracking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/salestracking")
public class SalesTrackingController {

    @Autowired
    private SalesTrackingService service;

    // Get all records
    @GetMapping
    public List<SalesTracking> getAllSalesTracking() {
        return service.getAllSalesTracking();
    }

    // Get a record by ID
    @GetMapping("/{id}")
    public Optional<SalesTracking> getSalesTrackingById(@PathVariable String id) {
        return service.getSalesTrackingById(id);
    }

    // Add a new record
    @PostMapping
    public SalesTracking addSalesTracking(@RequestBody SalesTracking salesTracking) {
        return service.addSalesTracking(salesTracking);
    }

    // Update an existing record
    @PutMapping("/{id}")
    public SalesTracking updateSalesTracking(@PathVariable String id, @RequestBody SalesTracking salesTracking) {
        return service.updateSalesTracking(id, salesTracking);
    }

    // Delete a record by ID
    @DeleteMapping("/{id}")
    public void deleteSalesTracking(@PathVariable String id) {
        service.deleteSalesTracking(id);
    }
}
