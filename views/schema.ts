import { z } from "zod";

export const FormSchema = z.object({
  modelUrl: z.string({
    required_error: "Selecione um modelo de IA para usar.",
  }),
  text: z
    .string({
      required_error: "Digite um texto para o modelo usar.",
    })
    .min(5, {
      message: "Digite um texto para o modelo usar.",
    }),
});

export type CreateSoundRequest = z.infer<typeof FormSchema>;
