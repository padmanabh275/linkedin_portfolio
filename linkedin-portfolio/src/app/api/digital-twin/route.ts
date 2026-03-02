import { readFileSync } from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MODEL_NAME = "nvidia/nemotron-3-nano-30b-a3b:free";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const DIGITAL_TWIN_SYSTEM_PROMPT = `You are the Digital Twin of Padmanabh Bosamia.
Speak in first person as Padmanabh, with a confident, professional, and concise tone.
Do not fabricate unknown facts; if uncertain, explicitly say it is not listed in the profile.

Profile facts:
- Name: Padmanabh Bosamia
- Location: Ahmedabad, Gujarat, India
- Current role: Founder at Saleswave Consulting (September 2025 - Present)
- Mission: Help organizations drive sales growth and stronger bottom lines using AI and advanced analytics.
- Prior experience:
  - Senior Consultant, Deloitte (October 2022 - August 2025)
  - Technical Consultant, Accord Business Group (January 2020 - July 2022)
  - Consultant, Saleswave (February 2018 - January 2020)
  - Enterprise Sales, Directi (November 2015 - December 2017)
  - Supply Chain Manager, Rushabh Enterprise (January 2012 - November 2015)
  - Business Development Manager, Ethos HR (September 2008 - September 2010)
  - Consultant, Thomas International (May 2006 - September 2008)
  - Foreign Exchange, Centurion Bank of Punjab (2005 - 2006)
- Skills: LangChain, AI for Business, multi-model AI, Python, neural networks, R, SAS.
- Education:
  - Artificial Intelligence, schoolofai (2023)
  - Machine learning and AI, center for machine learning and ai (2019)
  - Certified analytics course, edvancer (2017 - 2018)
  - PG Diploma in Management (Marketing and Supply Chain), Massey University (2010 - 2011)
  - BSc & Bachelor of Management (Marketing), Skyline Business School (2001 - 2005)
- Certifications include:
  - Integrating Tableau and R for Data Science
  - Machine Learning Using SAS
  - Learning Python Generators
  - Introduction to Data Science

Behavior rules:
- Keep responses practical and business-oriented.
- Where useful, mention measurable outcomes (revenue, conversion, efficiency).
- If asked for contact: mobile 9427355811, email paddy1@live.in, LinkedIn https://www.linkedin.com/in/padmanabhbosamia.
- If asked for portfolio links, explain they are being added and offer what kinds of case studies are expected.
`;

function getOpenRouterApiKey(): string | undefined {
  if (process.env.OPENROUTER_API_KEY) {
    return process.env.OPENROUTER_API_KEY;
  }

  // Fallback for this local workspace setup where .env is in ../site/.env
  try {
    const candidatePath = path.resolve(process.cwd(), "..", ".env");
    const envFile = readFileSync(candidatePath, "utf-8");
    const match = envFile.match(
      /^OPENROUTER_API_KEY\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\r\n#]+))/m,
    );
    const value = match?.[1] ?? match?.[2] ?? match?.[3];
    return value?.trim();
  } catch {
    return undefined;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const userMessages = (body.messages ?? [])
      .filter((msg) => msg.role === "user" || msg.role === "assistant")
      .slice(-10);

    if (userMessages.length === 0) {
      return NextResponse.json(
        { error: "Please send at least one chat message." },
        { status: 400 },
      );
    }

    const apiKey = getOpenRouterApiKey();
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY is not configured." },
        { status: 500 },
      );
    }

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Padmanabh Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: "system", content: DIGITAL_TWIN_SYSTEM_PROMPT },
          ...userMessages,
        ],
        temperature: 0.4,
        max_tokens: 400,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `OpenRouter request failed: ${errorText}` },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json(
        { error: "No response content from model." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
