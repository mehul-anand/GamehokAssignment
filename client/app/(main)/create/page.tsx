"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateTournamentPage() {
  const [formData, setFormData] = useState({
    title: "",
    gameName: "",
    date: "",
    prizePool: "",
    status: "Upcoming",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_TOURNAMENT_API}/api/tournaments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          prizePool: Number(formData.prizePool),
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to create tournament");
      }
      await res.json();
      setMessage("Tournament created successfully!");
      setFormData({
        title: "",
        gameName: "",
        date: "",
        prizePool: "",
        status: "Upcoming",
        description: "",
      });
    } catch (error: unknown) {
      console.error("Error:", error);
      if (error instanceof Error) {
          setMessage("Error: " + error.message);
      } else {
          setMessage("An unknown error occurred.");
      }
  }  
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 gradient-text">Create Tournament</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="flex flex-col">
          <Label htmlFor="title" className="mb-1">
            Tournament Title
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter tournament title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="gameName" className="mb-1">
            Game Name
          </Label>
          <Input
            id="gameName"
            name="gameName"
            type="text"
            placeholder="Enter game name"
            value={formData.gameName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="date" className="mb-1">
            Date
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="prizePool" className="mb-1">
            Prize Pool ($)
          </Label>
          <Input
            id="prizePool"
            name="prizePool"
            type="number"
            placeholder="Enter prize pool"
            value={formData.prizePool}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="status" className="mb-1">
            Status
          </Label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded p-2"
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex flex-col">
          <Label htmlFor="description" className="mb-1">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter tournament description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Create Tournament
        </Button>
      </form>

      {message && <p className="mt-4 text-center text-lg">{message}</p>}
    </div>
  );
}
