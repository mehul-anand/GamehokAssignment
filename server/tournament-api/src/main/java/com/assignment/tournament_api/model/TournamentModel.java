package com.assignment.tournament_api.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "tournaments")
public class TournamentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String gameName;
    private LocalDate date;
    private BigDecimal prizePool;
    private String status;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    // Default constructor
    public TournamentModel() {
    }
    
    // Constructor with parameters
    public TournamentModel(String title, String gameName, LocalDate date, BigDecimal prizePool, String status, String description) {
        this.title = title;
        this.gameName = gameName;
        this.date = date;
        this.prizePool = prizePool;
        this.status = status;
        this.description = description;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getGameName() {
        return gameName;
    }
    
    public void setGameName(String gameName) {
        this.gameName = gameName;
    }
    
    public LocalDate getDate() {
        return date;
    }
    
    public void setDate(LocalDate date) {
        this.date = date;
    }
    
    public BigDecimal getPrizePool() {
        return prizePool;
    }
    
    public void setPrizePool(BigDecimal prizePool) {
        this.prizePool = prizePool;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
}