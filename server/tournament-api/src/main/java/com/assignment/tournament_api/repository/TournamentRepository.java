package com.assignment.tournament_api.repository;
import com.assignment.tournament_api.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {
    // Additional query methods (if needed) can be defined here
}
