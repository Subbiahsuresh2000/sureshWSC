package com.example.SalesTracking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalesTrackingService {

    @Autowired
    private SalesTrackingRepository repository;

    // Get all records
    public List<SalesTracking> getAllSalesTracking() {
        return repository.findAll();
    }

    // Get record by ID
    public Optional<SalesTracking> getSalesTrackingById(String id) {
        return repository.findById(id);
    }

    // Add new record
    public SalesTracking addSalesTracking(SalesTracking salesTracking) {
        return repository.save(salesTracking);
    }

    // Update existing record
    public SalesTracking updateSalesTracking(String id, SalesTracking salesTracking) {
        Optional<SalesTracking> existingRecord = repository.findById(id);
        if (existingRecord.isPresent()) {
            SalesTracking updatedRecord = existingRecord.get();
            
            // Update all fields
            updatedRecord.setInputDate(salesTracking.getInputDate());
            updatedRecord.setCompanyLeadName(salesTracking.getCompanyLeadName());
            updatedRecord.setContactPersonName(salesTracking.getContactPersonName());
            updatedRecord.setLeadEmail(salesTracking.getLeadEmail());
            updatedRecord.setPhoneNo(salesTracking.getPhoneNo());
            updatedRecord.setAddressDetails(salesTracking.getAddressDetails());
            updatedRecord.setCity(salesTracking.getCity());
            updatedRecord.setArea(salesTracking.getArea());
            updatedRecord.setLastContactDate(salesTracking.getLastContactDate());
            updatedRecord.setFollowUpDates(salesTracking.getFollowUpDates());
            updatedRecord.setSourceType(salesTracking.getSourceType());
            updatedRecord.setContactType(salesTracking.getContactType());
            updatedRecord.setFunnelType(salesTracking.getFunnelType());
            updatedRecord.setAction(salesTracking.getAction());
            updatedRecord.setRepName(salesTracking.getRepName());
            updatedRecord.setNotes(salesTracking.getNotes());
            
            return repository.save(updatedRecord);
        } else {
            throw new RuntimeException("Sales tracking record not found with ID: " + id);
        }
    }

    // Delete record by ID
    public void deleteSalesTracking(String id) {
        repository.deleteById(id);
    }
}
