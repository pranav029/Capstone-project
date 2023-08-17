package com.stackroute.sportsarenadetailsservice.constants;

public enum GroundType {
    FOOTBALL,
    CRICKET,
    TENNIS,
    BADMINTON;

    public String getName(){
        switch (this){
            case TENNIS : return "TENNIS";
            case CRICKET: return "CRICKET";
            case FOOTBALL: return "FOOTBALL";
            case BADMINTON: return "BADMINTON";
        }
        return null;
    }

    public static Boolean isValidType(String type){
        if(GroundType.TENNIS.getName().equals(type))return true;
        if(GroundType.CRICKET.getName().equals(type))return true;
        if(GroundType.FOOTBALL.getName().equals(type))return true;
        return GroundType.BADMINTON.getName().equals(type);
    }
}
