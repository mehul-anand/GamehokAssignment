package com.assignment.tournament_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "tournaments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(name = "game_name")
    private String gameName;

    private LocalDate date;

    @Column(name = "prize_pool", precision = 10, scale = 2)
    private BigDecimal prizePool;

    // Acceptable values: "Upcoming" or "Completed"
    private String status;

    @Column(columnDefinition = "TEXT")
    private String description;
}