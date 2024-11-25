package com.example.SalesTracking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesTrackingRepository extends MongoRepository<SalesTracking, String> {
    // Additional query methods can be defined here if needed
}
