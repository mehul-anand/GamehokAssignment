import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Trophy } from "lucide-react";
import Link from "next/link";

export interface Tournament {
  id: number;
  title: string;
  gameName: string;
  date: string;
  prizePool: number;
  status: "Upcoming" | "Completed";
  description?: string;
}

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  const formattedDate = new Date(tournament.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Format prize pool with currency
  const formattedPrizePool = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(tournament.prizePool);

  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{tournament.title}</CardTitle>
          <Badge variant={tournament.status === "Upcoming" ? "default" : "secondary"}>
            {tournament.status}
          </Badge>
        </div>
        <CardDescription>{tournament.gameName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-sm">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-sm">
            <Trophy className="mr-2 h-4 w-4 opacity-70" />
            <span>Prize Pool: {formattedPrizePool}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/tournaments/${tournament.id}`} className="w-full">
          <Button variant="default" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;