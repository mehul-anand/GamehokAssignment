"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon, Trophy, ArrowLeft, Info, Award } from "lucide-react";
import { Tournament } from "@/components/TournamentCard";
import { mockTournaments } from "@/db/mockDB";


const getPrizeBreakdown = (prizePool: number) => {
    return [
        { place: "1st Place", amount: prizePool * 0.5 },
        { place: "2nd Place", amount: prizePool * 0.25 },
        { place: "3rd Place", amount: prizePool * 0.15 },
        { place: "4th Place", amount: prizePool * 0.1 },
    ];
};

const getTournamentRules = () => {
    return [
        "All teams must check in 30 minutes before their scheduled match time",
        "Standard competitive ruleset applies to all games",
        "Players must use their registered accounts",
        "Matches will be played on the latest patch",
        "Tournament admins have final decision authority on all disputes",
        "Unsportsmanlike behavior may result in disqualification"
    ];
};

export default function TournamentDetails() {
    const router = useRouter();
    const { tournamentId } = useParams() as { tournamentId: string };
    const id = Number(tournamentId)
    

    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/api/tournaments/${id}`)
          .then(res => res.json())
          .then(data => setTournament(data))
          .catch(err => setError("Failed to load tournament details"))
          .finally(() => setLoading(false));
    }, [tournamentId]);

    const handleBack = () => {
        router.push("/dashboard");
    };

    if (loading) {
        return (
            <div className="container mx-auto py-8 px-4">
                <Button variant="ghost" className="mb-6" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                </Button>
                <Skeleton className="h-10 w-2/3 mb-4" />
                <Skeleton className="h-6 w-1/3 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Skeleton className="h-64" />
                    <Skeleton className="h-64 md:col-span-2" />
                </div>
            </div>
        );
    }

    if (error || !tournament) {
        return (
            <div className="container mx-auto py-8 px-4">
                <Button variant="ghost" className="mb-6" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                </Button>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center py-8">
                            <p className="text-red-500">{error || "Tournament not found"}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const formattedDate = new Date(tournament.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedPrizePool = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(tournament.prizePool);

    const prizeBreakdown = getPrizeBreakdown(tournament.prizePool);

    const rules = getTournamentRules();

    return (
        <div className="container mx-auto py-8 px-4">
            <Button variant="ghost" className="mb-6" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </Button>

            <div className="mb-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h1 className="text-3xl font-bold gradient-text">{tournament.title}</h1>
                    <Badge variant={tournament.status === "Upcoming" ? "default" : "secondary"} className="text-sm">
                        {tournament.status}
                    </Badge>
                </div>
                <p className="text-xl text-gray-800 font-bold">{tournament.gameName}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Info className="mr-2 h-5 w-5" />
                            Tournament Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                                <span>{formattedDate}</span>
                            </div>
                            <div className="flex items-center">
                                <Trophy className="mr-2 h-5 w-5 text-gray-500" />
                                <span>Prize Pool: {formattedPrizePool}</span>
                            </div>
                            <div className="pt-3">
                                <p className="font-medium">Description:</p>
                                <p className="mt-1 text-gray-600">{tournament.description}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Award className="mr-2 h-5 w-5" />
                            Prize Breakdown
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-4">
                            {prizeBreakdown.map((prize, index) => (
                                <div key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
                                    <p className="font-medium">{prize.place}</p>
                                    <p className="text-right">
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                            minimumFractionDigits: 0
                                        }).format(prize.amount)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Tournament Rules</CardTitle>
                    <CardDescription>
                        All participants must follow these rules throughout the tournament
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        {rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}