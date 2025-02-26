"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TournamentCard, { Tournament } from "@/components/TournamentCard";
import { Skeleton } from "@/components/ui/skeleton";
import { mockTournaments } from "@/db/mockDB";

export default function TournamentDashboard() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "Upcoming" | "Completed">("all");

  useEffect(() => {
    setLoading(true);
    
    const timeout = setTimeout(() => {
      setTournaments(mockTournaments);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  const filteredTournaments = tournaments.filter(tournament => 
    filter === "all" || tournament.status === filter
  );

  const handleFilterChange = (value: string) => {
    setFilter(value as "all" | "Upcoming" | "Completed");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl gradient-text">Tournament Dashboard</h1>
        <p className="text-gray-500">Browse upcoming and completed gaming tournaments</p>
      </div>

      <Tabs defaultValue="all" onValueChange={handleFilterChange} className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">All Tournaments</TabsTrigger>
          <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="Completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          {renderTournamentGrid(filteredTournaments, loading, error)}
        </TabsContent>
        
        <TabsContent value="Upcoming" className="mt-0">
          {renderTournamentGrid(filteredTournaments, loading, error)}
        </TabsContent>
        
        <TabsContent value="Completed" className="mt-0">
          {renderTournamentGrid(filteredTournaments, loading, error)}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function renderTournamentGrid(tournaments: Tournament[], loading: boolean, error: string | null) {
  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (tournaments.length === 0) {
    return <div className="text-center py-8">No tournaments found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournamentDetails) => (
        <TournamentCard key={tournamentDetails.id} tournament={tournamentDetails} />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="p-4 border-t">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}