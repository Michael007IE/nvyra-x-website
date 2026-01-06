"use client";

import { useState, useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";
// Using only safe icons or text if icons fail
// import { Upload, FileImage, Loader2, AlertCircle, CheckCircle2 } from "lucide-react"; 

interface DetectionResult {
    is_ai_generated: boolean;
    confidence: number;
    generator: string;
}

export default function ImageDetectorPage() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<DetectionResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setResult(null);
            setError(null);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith('image/')) {
            setFile(droppedFile);
            setPreview(URL.createObjectURL(droppedFile));
            setResult(null);
            setError(null);
        }
    };

    const handleSubmit = async () => {
        if (!file) return;

        setLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/detect-image", {
                method: "POST",
                body: formData,
            });

            const userContentType = response.headers.get("content-type");
            if (!userContentType || !userContentType.includes("application/json")) {
                const text = await response.text();
                console.error("Non-JSON response:", text);
                throw new Error("Server returned an invalid response. Please try again.");
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || errorData.detail || "Failed to analyze image");
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans flex flex-col items-center py-20 px-4 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-extralight tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                    Nvyra Vision
                </h1>
                <p className="text-lg text-neutral-400 font-light max-w-xl mx-auto">
                    Advanced AI forgery detection. Upload an image to analyze its authenticity with cryptographic precision.
                </p>
            </div>

            <div className="w-full max-w-xl relative z-10">
                <div
                    className={`
                        relative group rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl transition-all duration-300 overflow-hidden
                        ${isDragging ? 'border-blue-500/50 bg-blue-500/10' : 'hover:border-neutral-700'}
                    `}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="p-8 md:p-12 text-center">
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                        {preview ? (
                            <div className="relative">
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-neutral-800 bg-black/50 shadow-2xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <button
                                    onClick={() => {
                                        setFile(null);
                                        setPreview(null);
                                        setResult(null);
                                    }}
                                    className="absolute -top-3 -right-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white rounded-full p-1.5 transition-colors border border-black"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => document.getElementById('file-upload')?.click()}
                                className="cursor-pointer py-12 flex flex-col items-center justify-center space-y-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-neutral-800/50 flex items-center justify-center border border-neutral-700 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-neutral-200 font-medium text-lg">Click to Upload</p>
                                    <p className="text-neutral-500 text-sm">or drag and drop an image</p>
                                </div>
                            </div>
                        )}

                        <div className="mt-8">
                            <button
                                onClick={handleSubmit}
                                disabled={!file || loading}
                                className={`
                                    w-full py-4 rounded-xl font-medium text-lg transition-all duration-300 relative overflow-hidden group
                                    ${!file
                                        ? 'bg-neutral-900 text-neutral-600 cursor-not-allowed border border-neutral-800'
                                        : 'bg-white text-black hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                                    }
                                `}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    "Analyze Authenticity"
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                {error && (
                    <div className="mt-6 p-4 rounded-xl bg-red-950/20 border border-red-900/50 text-red-200 text-center text-sm backdrop-blur-sm animate-in fade-in slide-in-from-top-2">
                        {error}
                    </div>
                )}

                {result && (
                    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className={`
                            relative overflow-hidden rounded-3xl p-1
                            bg-gradient-to-b ${result.is_ai_generated ? 'from-red-500/50 to-red-900/10' : 'from-emerald-500/50 to-emerald-900/10'}
                        `}>
                            <div className="bg-black/90 backdrop-blur-3xl rounded-[22px] p-8 text-center relative z-10 h-full">
                                <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>

                                <div className={`inline-flex items-center justify-center p-3 rounded-full mb-6 ${result.is_ai_generated ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                    {result.is_ai_generated ? (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    ) : (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    )}
                                </div>

                                <h2 className="text-3xl font-bold mb-2 text-white">
                                    {result.is_ai_generated ? "AI Generated" : "Authentic Media"}
                                </h2>
                                <p className="text-neutral-400 mb-8 font-light">
                                    {result.is_ai_generated ? `Signature matches ${result.generator} generation patterns.` : "No synthetic artifacts detected."}
                                </p>

                                <div className="max-w-xs mx-auto space-y-4">
                                    <div className="flex justify-between text-sm text-neutral-300">
                                        <span>Confidence</span>
                                        <span className="font-mono">{Math.round(result.confidence * 100)}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ${result.is_ai_generated ? 'bg-red-500' : 'bg-emerald-500'}`}
                                            style={{ width: `${result.confidence * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 text-center relative z-10">
                <p className="text-xs text-neutral-600">This AI is in beta testing. Please do not take outputs as the definite truth.</p>
            </div>
        </div>
    );
}
