package com.example.SalesTracking;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "salestracking")
public class SalesTracking {

    @Id
    private String serialNo;
    private Date inputDate;
    private String companyLeadName;
    private String contactPersonName;
    private String leadEmail;
    private String phoneNo;
    private String addressDetails;
    private String city;
    private String area;
    private Date lastContactDate;
    private List<Date> followUpDates;
    private String sourceType;
    private String contactType;
    private String funnelType;
    private String action;
    private String repName;
    private String notes;

    // Constructors
    public SalesTracking() {}

    public SalesTracking(String serialNo, Date inputDate, String companyLeadName, String contactPersonName,
                         String leadEmail, String phoneNo, String addressDetails, String city, String area,
                         Date lastContactDate, List<Date> followUpDates, String sourceType, String contactType,
                         String funnelType, String action, String repName, String notes) {
        this.serialNo = serialNo;
        this.inputDate = inputDate;
        this.companyLeadName = companyLeadName;
        this.contactPersonName = contactPersonName;
        this.leadEmail = leadEmail;
        this.phoneNo = phoneNo;
        this.addressDetails = addressDetails;
        this.city = city;
        this.area = area;
        this.lastContactDate = lastContactDate;
        this.followUpDates = followUpDates;
        this.sourceType = sourceType;
        this.contactType = contactType;
        this.funnelType = funnelType;
        this.action = action;
        this.repName = repName;
        this.notes = notes;
    }

    // Getters and Setters
    // Auto-generate using your IDE or manually implement these for all fields
    public String getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(String serialNo) {
        this.serialNo = serialNo;
    }

    public Date getInputDate() {
        return inputDate;
    }

    public void setInputDate(Date inputDate) {
        this.inputDate = inputDate;
    }

    public String getCompanyLeadName() {
        return companyLeadName;
    }

    public void setCompanyLeadName(String companyLeadName) {
        this.companyLeadName = companyLeadName;
    }

    public String getContactPersonName() {
        return contactPersonName;
    }

    public void setContactPersonName(String contactPersonName) {
        this.contactPersonName = contactPersonName;
    }

    public String getLeadEmail() {
        return leadEmail;
    }

    public void setLeadEmail(String leadEmail) {
        this.leadEmail = leadEmail;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAddressDetails() {
        return addressDetails;
    }

    public void setAddressDetails(String addressDetails) {
        this.addressDetails = addressDetails;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Date getLastContactDate() {
        return lastContactDate;
    }

    public void setLastContactDate(Date lastContactDate) {
        this.lastContactDate = lastContactDate;
    }

    public List<Date> getFollowUpDates() {
        return followUpDates;
    }

    public void setFollowUpDates(List<Date> followUpDates) {
        this.followUpDates = followUpDates;
    }

    public String getSourceType() {
        return sourceType;
    }

    public void setSourceType(String sourceType) {
        this.sourceType = sourceType;
    }

    public String getContactType() {
        return contactType;
    }

    public void setContactType(String contactType) {
        this.contactType = contactType;
    }

    public String getFunnelType() {
        return funnelType;
    }

    public void setFunnelType(String funnelType) {
        this.funnelType = funnelType;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getRepName() {
        return repName;
    }

    public void setRepName(String repName) {
        this.repName = repName;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

