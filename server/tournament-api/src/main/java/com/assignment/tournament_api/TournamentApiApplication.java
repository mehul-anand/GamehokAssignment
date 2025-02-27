package com.assignment.tournament_api;

// import com.assignment.tournament_api.model.Tournament;
// import com.assignment.tournament_api.repository.TournamentRepository;
// import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.context.annotation.Bean;

// import java.math.BigDecimal;
// import java.time.LocalDate;

@SpringBootApplication
public class TournamentApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(TournamentApiApplication.class, args);
    }

//     // This bean seeds the database with sample tournament data on startup.
//     @Bean
//     public CommandLineRunner dataLoader(TournamentRepository repository) {
//         return args -> {
//             repository.save(new Tournament(
//                     null, 
//                     "Winter Clash 2025", 
//                     "Valorant", 
//                     LocalDate.parse("2025-03-10"), 
//                     new BigDecimal("5000.00"), 
//                     "Upcoming", 
//                     "5v5, Best of 3, Open to all"
//             ));
//             repository.save(new Tournament(
//                     null, 
//                     "Apex Legends Showdown", 
//                     "Apex Legends", 
//                     LocalDate.parse("2025-02-20"), 
//                     new BigDecimal("3000.00"), 
//                     "Completed", 
//                     "Trios, $1000 per player"
//             ));
//             repository.save(new Tournament(
//                     null, 
//                     "CS:GO Pro League", 
//                     "CS:GO", 
//                     LocalDate.parse("2025-04-01"), 
//                     new BigDecimal("10000.00"), 
//                     "Upcoming", 
//                     "5v5, Bracket Style"
//             ));
//             repository.save(new Tournament(
//                     null, 
//                     "Battle Royale Masters", 
//                     "Fortnite", 
//                     LocalDate.parse("2025-08-20"), 
//                     new BigDecimal("12000.00"), 
//                     "Completed", 
//                     "Compete for glory"
//             ));
//             repository.save(new Tournament(
//                     null, 
//                     "Fighting Game Championship", 
//                     "Street Fighter 6", 
//                     LocalDate.parse("2025-03-28"), 
//                     new BigDecimal("5000.00"), 
//                     "Upcoming", 
//                     "Let's find out who the best fighter is..."
//             ));
//         };
//     }
}
