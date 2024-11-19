package com.example.cht;

public class CHT {
    private String callBeneficiary;
    private String feedbackMailToClient;
    private String callClient;
    private String concernFormSigned;

    // Constructors
    public CHT(String callBeneficiary, String feedbackMailToClient, String callClient, String concernFormSigned) {
        this.callBeneficiary = callBeneficiary;
        this.feedbackMailToClient = feedbackMailToClient;
        this.callClient = callClient;
        this.concernFormSigned = concernFormSigned;
    }

    // Getters and Setters
    public String getCallBeneficiary() {
        return callBeneficiary;
    }

    public void setCallBeneficiary(String callBeneficiary) {
        this.callBeneficiary = callBeneficiary;
    }

    public String getFeedbackMailToClient() {
        return feedbackMailToClient;
    }

    public void setFeedbackMailToClient(String feedbackMailToClient) {
        this.feedbackMailToClient = feedbackMailToClient;
    }

    public String getCallClient() {
        return callClient;
    }

    public void setCallClient(String callClient) {
        this.callClient = callClient;
    }

    public String getConcernFormSigned() {
        return concernFormSigned;
    }

    public void setConcernFormSigned(String concernFormSigned) {
        this.concernFormSigned = concernFormSigned;
    }
}
