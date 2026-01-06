"use client";

import { useState } from "react";
import { Send, Settings, Sparkles, Terminal, ChevronDown, ChevronRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface ChatResponse {
    reasoning_trace?: string;
    output?: string;
    error?: string;
}

export default function ChatPage() {
    // Hardcoded for testing as per user request
    const [modalUrl] = useState("https://michael007ie--qwen-fake-news-inference-cpu-modelinference-api.modal.run");
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [response, setResponse] = useState<ChatResponse | null>(null);
    const [isTraceOpen, setIsTraceOpen] = useState(true);

    const handleSubmit = async () => {
        if (!prompt) return;

        setIsLoading(true);
        setResponse(null);
        setProgress(0);

        // Simulate 25s progress
        const duration = 25000; // 25 seconds
        const intervalTime = 100;
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 95) { // Cap at 95% until actually done
                    return 95;
                }
                return next;
            });
        }, intervalTime);

        try {
            const res = await fetch(modalUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Updated payload structure to match the user's curl command
                body: JSON.stringify({
                    title: "User Prompt",
                    text: prompt
                }),
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            // Heuristic to map common fields to our expected structure
            // Heuristic to map common fields to our expected structure
            const trace = data.reasoning_trace || data.trace || data.cot || data.reasoning;
            const out = data.output || data.result || data.answer || data.text || data.classification || JSON.stringify(data, null, 2);

            clearInterval(timer);
            setProgress(100);

            // Small delay to let user see 100%
            setResponse({
                reasoning_trace: trace,
                output: out,
            });
            setIsLoading(false);

        } catch (err: any) {
            clearInterval(timer);
            setResponse({ error: err.message || "Failed to fetch response" });
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-indigo-500/30">
            {/* Top Bar / Configuration */}
            <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
                <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between gap-4 inline-flex">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                            <Sparkles className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h1 className="font-semibold text-lg tracking-tight">Blackwell</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-5xl px-4 py-6 pb-32 flex flex-col gap-6">

                {/* Empty State */}
                {!response && !isLoading && (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 opacity-50">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                            <Play className="w-8 h-8 text-neutral-700 ml-1" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-medium text-neutral-300">Welcome to Blackwell</h3>
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-20 space-y-8 animate-in fade-in duration-500">
                        <div className="w-full max-w-md space-y-4">
                            <div className="flex justify-between text-sm text-neutral-400">
                                <span>Reasoning...</span>
                                <span className="font-mono">{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                            <p className="text-center text-xs text-neutral-500 animate-pulse duration-[2000ms]">
                                Sent
                            </p>
                        </div>
                    </div>
                )}

                {/* Response Area */}
                {response && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {/* Error Banner */}
                        {response.error && (
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                                <p className="font-medium">Error Occurred</p>
                                <p className="text-sm opacity-80">{response.error}</p>
                            </div>
                        )}

                        {/* Reasoning Trace (COT) */}
                        {response.reasoning_trace && (
                            <Collapsible
                                open={isTraceOpen}
                                onOpenChange={setIsTraceOpen}
                                className="rounded-xl border border-indigo-500/20 bg-indigo-950/5 overflow-hidden transition-all duration-300"
                            >
                                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-white/5 transition-colors text-indigo-300 group">
                                    <div className="flex items-center gap-2">
                                        <ActivityIcon className="w-4 h-4" />
                                        <span className="font-medium tracking-wide text-sm uppercase">Reasoning Trace</span>
                                        <Badge variant="outline" className="ml-2 bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20">COT</Badge>
                                    </div>
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", !isTraceOpen && "-rotate-90")} />
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <Separator className="bg-indigo-500/10" />
                                    <div className="p-4 bg-black/20">
                                        <ScrollArea className="h-[300px] w-full rounded-md border border-neutral-800 bg-neutral-950 p-4">
                                            <pre className="text-xs md:text-sm font-mono text-neutral-400 whitespace-pre-wrap leading-relaxed">
                                                {response.reasoning_trace}
                                            </pre>
                                        </ScrollArea>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        )}

                        {/* Final Output */}
                        {response.output && (
                            <Card className="bg-neutral-900/30 border-neutral-800 overflow-hidden shadow-2xl">
                                <CardHeader className="border-b border-neutral-800/50 bg-neutral-900/50 py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                        <span className="text-sm font-medium text-neutral-300">Final Output</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="prose prose-invert prose-neutral max-w-none">
                                        <pre className="whitespace-pre-wrap font-sans text-neutral-200 text-base leading-7">
                                            {response.output}
                                        </pre>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}
            </main>

            {/* Bottom Input Area */}
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-800">
                <div className="container mx-auto max-w-4xl relative">
                    <div className="relative rounded-2xl bg-neutral-900 border border-neutral-800 shadow-lg focus-within:ring-2 focus-within:ring-indigo-500/30 focus-within:border-indigo-500/50 transition-all duration-300">
                        <Textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ask the model anything..."
                            className="min-h-[60px] max-h-[200px] w-full resize-none border-0 bg-transparent py-4 pl-4 pr-16 text-base focus-visible:ring-0 placeholder:text-neutral-600 text-neutral-200"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit();
                                }
                            }}
                        />
                        <div className="absolute bottom-2 right-2">
                            <Button
                                size="icon"
                                onClick={handleSubmit}
                                disabled={isLoading || !prompt}
                                className={cn("h-10 w-10 rounded-xl transition-all duration-200",
                                    prompt ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]" : "bg-neutral-800 text-neutral-500"
                                )}
                            >
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="text-center mt-2 space-y-2">
                        <p className="text-xs text-neutral-600">Press <kbd className="font-mono text-neutral-500">Enter</kbd> to send, <kbd className="font-mono text-neutral-500">Shift + Enter</kbd> for new line</p>
                        <p className="text-xs text-neutral-600">This AI is in beta testing. Please do not take outputs as fully the truth.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ActivityIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
