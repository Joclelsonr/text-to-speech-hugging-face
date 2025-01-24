"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreateSoundRequest, FormSchema } from "../schema";
import { SOUND_MODELS, SoundModel } from "@/constants";
import { Loader2 } from "@/components/loader2";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GenerateSoundFormProps {
  handleGetAudio: (data: CreateSoundRequest) => void;
}

export function GenerateSoundForm({ handleGetAudio }: GenerateSoundFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<CreateSoundRequest>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: CreateSoundRequest) => {
    setIsLoading(true);

    const soundRequest: CreateSoundRequest = {
      modelUrl: data.modelUrl,
      text: data.text,
    };
    await handleGetAudio(soundRequest);

    setIsLoading(false);
  };

  return (
    <div className="ml-8 mr-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="modelUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo de Som</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma IA" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {SOUND_MODELS.map((model: SoundModel, index: number) => (
                      <SelectItem
                        key={`${model.name}-${index}`}
                        value={model.url}
                      >
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Este modelo irá gerar seu som.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    rows={6}
                    placeholder="Digite seu texto aqui..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  O texto usado para converter em som.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 /> : "Gerar Som"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
