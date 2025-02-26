import { Tournament } from "@/components/TournamentCard";
export const mockTournaments: Tournament[] = [
    {
        id: 1,
        title: "Winter Clash 2025",
        gameName: "Valorant",
        date: "2025-03-10",
        prizePool: 5000.00,
        status: "Upcoming",
        description: "5v5, Best of 3, Open to all"
    },
    {
        id: 2,
        title: "Apex Legends Showdown",
        gameName: "Apex Legends",
        date: "2025-02-20",
        prizePool: 3000.00,
        status: "Completed",
        description: "Trios, $1000 per player"
    },
    {
        id: 3,
        title: "CS:GO Pro League",
        gameName: "CS:GO",
        date: "2025-04-01",
        prizePool: 10000.00,
        status: "Upcoming",
        description: "5v5, Bracket Style"
    },
    {
        id: 4,
        title: "Battle Royale Masters",
        gameName: "Fortnite",
        date: "2025-08-20",
        prizePool: 12000,
        status: "Completed",
        description: "Compete for glory"
    },
    {
        id: 5,
        title: "Fighting Game Championship",
        gameName: "Street Fighter 6",
        date: "2025-03-28",
        prizePool: 5000,
        status: "Upcoming",
        description: "Let's find out who the best fighter is..."
    },
];