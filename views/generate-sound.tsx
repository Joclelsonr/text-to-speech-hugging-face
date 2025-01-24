"use client";

import { useState } from "react";
import { Loader } from "@/components/loader";
import { GenerateSoundForm } from "./components/generate-sound-form";
import { CreateSoundRequest } from "./schema";

export function GenerateSound() {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetAudio = async (request: CreateSoundRequest) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modelUrl: request.modelUrl,
          input: request.text,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio data.");
      }

      const data = await response.arrayBuffer();

      const blob = new Blob([data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching audio data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/3 p-4">
        <div className="ml-8 mr-8 mt-4 mb-4 text-xl">
          <h1>Transforme seus textos em Fala</h1>
        </div>
        <GenerateSoundForm handleGetAudio={handleGetAudio} />
      </div>

      <div className="w-full md:w-2/3 p-4 bg-gray-200 h-screen ">
        <div className="h-full flex justify-center items-center">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {audioUrl && (
                <audio controls>
                  <source id="audioSource" type="audio/flac" src={audioUrl!} />
                </audio>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
