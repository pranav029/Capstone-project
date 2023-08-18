package com.stackroute.notificationservice.Domain;

public class Notification {
    private String recipientId;
    private String ownerID;
    private String senderId;
    private String msgToRecipient;
    private String msgToSender;

    public String getRecipientId() {
        return recipientId;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "recipientId='" + recipientId + '\'' +
                ", ownerID='" + ownerID + '\'' +
                ", senderId='" + senderId + '\'' +
                ", msgToRecipient='" + msgToRecipient + '\'' +
                ", msgToSender='" + msgToSender + '\'' +
                '}';
    }

    public Notification() {
    }

    public Notification(String recipientId, String ownerID, String senderId, String msgToRecipient, String msgToSender) {
        this.recipientId = recipientId;
        this.ownerID = ownerID;
        this.senderId = senderId;
        this.msgToRecipient = msgToRecipient;
        this.msgToSender = msgToSender;
    }

    public void setRecipientId(String recipientId) {
        this.recipientId = recipientId;
    }

    public String getOwnerID() {
        return ownerID;
    }

    public void setOwnerID(String ownerID) {
        this.ownerID = ownerID;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getMsgToRecipient() {
        return msgToRecipient;
    }

    public void setMsgToRecipient(String msgToRecipient) {
        this.msgToRecipient = msgToRecipient;
    }

    public String getMsgToSender() {
        return msgToSender;
    }

    public void setMsgToSender(String msgToSender) {
        this.msgToSender = msgToSender;
    }
}
