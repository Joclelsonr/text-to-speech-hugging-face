# Geração de som de texto para fala com Next.js

Bem-vindo ao projeto **Geração de som de texto para fala** criado usando Next.js! Este projeto demonstra a geração de som usando modelos de rosto de abraço pré-treinados. Os usuários podem selecionar diferentes modelos de som de rosto de abraço e inserir texto para gerar o áudio correspondente. O áudio gerado pode ser reproduzido diretamente na interface da web.

## Visão geral

Este projeto mostra como alavancar modelos de IA pré-treinados junto com a API de inferência **Hugging Face** para converter texto de entrada em fala sintetizada. A interface do usuário fornece uma seleção de modelos de som para escolher e um campo de entrada para inserir o texto desejado. Uma vez enviado, o aplicativo busca o áudio gerado da API do modelo e o apresenta em um reprodutor de áudio.

## Notas

Este aplicativo depende muito da estabilidade dos modelos da Hugging Face Inference API. Observe que erros aleatórios ocasionais podem ocorrer.

## Como executar o projeto

### Pré-requisitos

- Node.js
- npm

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/Joclelsonr/text-to-speech-hugging-face.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd text-to-speech-hugging-face
   ```
3. Instalar dependências:
   ```sh
   npm install
   ```
4. Adicione o token de acesso Hugging Face ao seu arquivo `.env.local`:
   ```sh
   HUGGING_FACE_TOKEN=seu_token_de_acesso
   ```
   O token de acesso pode ser criado no site [Hugging Face](https://huggingface.co/settings/tokens).

### Executando o aplicativo

1. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
2. Abra seu navegador e visite `http://localhost:3000` para acessar o aplicativo.

## Uso

1. Abra o aplicativo no seu navegador após executá-lo.
2. No menu suspenso "Modelo de IA", selecione um modelo para gerar som.
3. Insira o texto desejado no campo de entrada "Texto".
4. Clique no botão "Enviar".
5. O áudio gerado aparecerá em um reprodutor de áudio abaixo.
