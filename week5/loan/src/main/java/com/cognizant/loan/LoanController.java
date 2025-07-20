package com.cognizant.loan; 

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController 
public class LoanController {

  
    @GetMapping("/loans/{number}")
    public Loan getLoanDetails(@PathVariable("number") String loanNumber) {
       
        return new Loan(loanNumber, "car", 400000.00, 3258.00, 18);
    }
}


class Loan {
    private String number;
    private String type;
    private double loanAmount;
    private double emi;
    private int tenure;

    public Loan(String number, String type, double loanAmount, double emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loanAmount = loanAmount;
        this.emi = emi;
        this.tenure = tenure;
    }

    // Getters
    public String getNumber() {
        return number;
    }

    public String getType() {
        return type;
    }

    public double getLoanAmount() {
        return loanAmount;
    }

    public double getEmi() {
        return emi;
    }

    public int getTenure() {
        return tenure;
    }

    // Setters 
    public void setNumber(String number) {
        this.number = number;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public void setEmi(double emi) {
        this.emi = emi;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }
}