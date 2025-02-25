package com.assignment.tournament_api.repository;

import com.assignment.tournament_api.model.TournamentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TournamentRepository extends JpaRepository<TournamentModel, Long> {
}