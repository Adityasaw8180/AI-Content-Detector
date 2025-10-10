import React, { useState } from 'react';
import axios from 'axios';

// Main component renamed to CardBody
const CardBody = () => {
    // --- CSS Definition (Equivalent to app.css) ---
    const customStyles = `
        /* --- Global & Base Styles --- */
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
        }

        .app-container {
            min-height: 100vh;
            background-color: #111827; /* bg-gray-900 */
            color: #ffffff; /* text-white */
            padding: 1rem; /* p-4 */
            display: flex;
            flex-direction: column;
        }
        @media (min-width: 640px) {
            .app-container {
                padding: 2rem; /* sm:p-8 */
            }
        }

        /* --- Header Styles --- */
        .app-header {
            text-align: center;
            margin-bottom: 2.5rem; /* mb-10 */
            border-bottom: 1px solid rgba(45, 212, 191, 0.2); /* border-b border-teal-500/20 */
            padding-bottom: 1rem; /* pb-4 */
        }

        .header-title {
            font-size: 2.25rem; /* text-4xl */
            font-weight: 800; /* font-extrabold */
            color: #2dd4bf; /* text-teal-400 */
            letter-spacing: -0.025em; /* tracking-tight */
        }
        @media (min-width: 640px) {
            .header-title {
                font-size: 3rem; /* sm:text-5xl */
            }
        }

        .header-subtitle {
            margin-top: 0.5rem; /* mt-2 */
            font-size: 1rem; /* text-md */
            color: #9ca3af; /* text-gray-400 */
        }
        @media (min-width: 640px) {
            .header-subtitle {
                font-size: 1.125rem; /* sm:text-lg */
            }
        }

        /* --- Main Content Area --- */
        .main-content {
            flex-grow: 1;
            max-width: 56rem; /* max-w-4xl */
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }

        .main-title {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 700; /* font-bold */
            color: #e5e7eb; /* text-gray-200 */
            margin-bottom: 1.5rem; /* mb-6 */
        }

        /* --- Text Input Area --- */
        .text-input {
            width: 100%;
            padding: 1rem; /* p-4 */
            background-color: #1f2937; /* bg-gray-800 */
            border: 1px solid #374151; /* border border-gray-700 */
            border-radius: 0.5rem; /* rounded-lg */
            transition: all 0.2s ease;
            resize: none;
            height: 12rem; /* h-48 */
            margin-bottom: 1rem; /* mb-4 */
            color: #ffffff;
        }
        .text-input:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            border-color: #10b981; /* focus:border-teal-500 */
            box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.5); /* focus:ring-2 focus:ring-teal-500 */
        }

        /* --- Error Message Box --- */
        .error-message {
            background-color: rgba(127, 29, 29, 0.5); /* bg-red-900/50 */
            border: 1px solid #b91c1c; /* border border-red-700 */
            color: #fca5a5; /* text-red-300 */
            padding: 0.75rem; /* p-3 */
            border-radius: 0.5rem; /* rounded-lg */
            margin-bottom: 1rem; /* mb-4 */
            font-size: 0.875rem; /* text-sm */
        }

        /* --- Submit Button --- */
        .submit-button {
            width: 100%;
            padding-top: 0.75rem; /* py-3 */
            padding-bottom: 0.75rem; /* py-3 */
            border-radius: 0.5rem; /* rounded-lg */
            font-weight: 700; /* font-bold */
            font-size: 1.125rem; /* text-lg */
            transition: all 0.3s ease;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow-md */
            background-color: #0d9488; /* bg-teal-600 */
            color: white;
            border: none;
        }
        .submit-button:hover:not(.disabled) {
            background-color: #14b8a6; /* hover:bg-teal-500 */
            cursor: pointer;
        }
        .submit-button.disabled {
            background-color: #4b5563; /* bg-gray-700 */
            color: #9ca3af; /* text-gray-500 */
            cursor: not-allowed;
        }

        /* --- Analysis Breakdown Section --- */
        .analysis-title-section {
            font-size: 1.25rem; /* text-xl */
            font-weight: 700; /* font-bold */
            color: #e5e7eb; /* text-gray-200 */
            margin-top: 2.5rem; /* mt-10 */
            margin-bottom: 1.5rem; /* mb-6 */
            border-top: 1px solid rgba(45, 212, 191, 0.2); /* border-t border-teal-500/20 */
            padding-top: 1.5rem; /* pt-6 */
        }

        /* --- Grid Layouts & Cards (Remaining Styles) --- */
        .analysis-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 1024px) { 
            .analysis-grid {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        .interpretation-area {
            display: flex;
            flex-direction: column;
            gap: 1.5rem; 
        }
        @media (min-width: 1024px) {
            .interpretation-area {
                grid-column: span 2 / span 2; 
            }
        }

        .metrics-area {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem; 
        }
        @media (min-width: 640px) { 
            .metrics-area {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }
        @media (min-width: 1024px) { 
            .metrics-area {
                grid-template-columns: 1fr; 
            }
        }

        .card-base {
            background-color: #1f2937; 
            border-radius: 0.75rem; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); 
            border: 1px solid #374151; 
            padding: 1.5rem; 
        }

        .gauge-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .interpretation-title {
            font-size: 1.25rem; 
            font-weight: 600; 
            color: #2dd4bf; 
            margin-bottom: 1rem; 
        }
        .interpretation-output {
            color: #d1d5db; 
            line-height: 1.625; 
            font-size: 1rem; 
        }

        .metric-card {
            padding: 1rem; 
            border-radius: 0.75rem; 
            border: 1px solid #374151; 
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
            background-color: #1f2937; 
        }
        .metric-card-title {
            font-size: 0.75rem; 
            font-weight: 500; 
            text-transform: uppercase;
            color: #9ca3af; 
            margin-bottom: 0.25rem; 
        }
        .metric-card-value {
            font-size: 1.875rem; 
            font-weight: 800; 
            color: #ffffff; 
        }

        .loading-skeleton {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            background-color: #4b5563; 
            height: 2rem; 
            width: 50%; 
            border-radius: 0.375rem; 
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
        }

        .info-card {
            background-color: #111827; 
            border: 1px solid #1f2937; 
            padding: 1rem; 
            border-radius: 0.75rem; 
            color: #9ca3af; 
            font-size: 0.875rem; 
        }
        .info-card strong {
            color: #d1d5db;
        }
        @media (min-width: 640px) {
            .info-card.span-sm-2 {
                grid-column: span 2 / span 2; 
            }
        }
        
        /* NEW STYLES FOR TOP ABOUT SECTION */
        .about-section-wrapper {
    width: 100vw;           /* Full viewport width */
    margin-left: calc(50% - 50vw);  /* Pull edge-to-edge, even inside a centered parent */
    margin-right: calc(50% - 50vw);
    margin-bottom: 2rem;
    max-width: 100vw;
}

.about-section {
    min-height: 64px;      /* Lower the vertical space: 64px is ~4rem, you can reduce for thinner look */
    padding: 1rem 2rem;    /* Less vertical, more horizontal padding for a slim bar look */
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.14);
    border-radius: 0px;    /* Remove radius for a clean edge-to-edge style */
    background: #1a2430;
    border-top: 3px solid #2dd4bf;
    border-bottom: 3px solid #2dd4bf;
    border-left: none;
    border-right: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Tweak title spacing if needed */
.about-section h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    padding-bottom: 0.2rem;
    border-bottom: none;
}
.about-section p, .about-section ul {
    margin-bottom: 0.3rem;
    font-size: 1rem;
}

/* On very small screens, ensure no horizontal scrollbar by using padding instead of negative margins */
@media (max-width: 600px) {
    .about-section-wrapper {
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        max-width: 100%;
        padding-left: 0;
        padding-right: 0;
    }
    .about-section {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}
    
        /* FOOTER STYLES */
        .app-footer {
            margin-top: 3rem;
            max-width: 56rem;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
        }
        .footer-copyright {
            text-align: center;
            padding: 1rem 0;
            font-size: 0.875rem;
            color: #4b5563; /* text-gray-600 */
            border-top: 1px solid #1f2937; /* border-gray-800 */
        }
    `;
    // --- End CSS Definition ---

    // State variables
    const [text, setText] = useState('');
    const [analysis, setAnalysis] = useState({
        output: 'Enter text above to analyze its origin.',
        burstiness: 'N/A',
        perplexity: 'N/A',
        perplexityPerLine: 'N/A',
        confidence: 0, // Confidence score for the gauge
    });
    const [buttonText, setButtonText] = useState('ANALYZE TEXT');
    const [isLoading, setIsLoading] = useState(false);
    const [toneSimulation, setToneSimulation] = useState(false);
    const [error, setError] = useState('');

    // Function to calculate a mock confidence score based on Perplexity per Line (PPL)
    const calculateConfidence = (ppl) => {
        const pplValue = parseFloat(ppl);
        if (isNaN(pplValue)) return 0;

        // Simple linear interpolation between thresholds 60 (AI) and 80 (Human).
        if (pplValue >= 80) return 100;
        if (pplValue <= 60) return 0;

        // Scale 60-80 range to 0-100%
        const score = ((pplValue - 60) / (80 - 60)) * 100;
        return Math.round(score);
    };

    const handleAnalysis = async (e) => {
        e.preventDefault();

        if (text.trim().length < 100) {
            setError('Please input more text (minimum 100 characters) for analysis.');
            setAnalysis(prev => ({ ...prev, output: 'Awaiting Analysis...' }));
            return;
        }

        setError('');
        setIsLoading(true);
        setButtonText('ANALYZING...');
        setAnalysis({ // Reset analysis state while loading
            output: 'Awaiting Analysis...',
            burstiness: 'N/A',
            perplexity: 'N/A',
            perplexityPerLine: 'N/A',
            confidence: 0,
        });

        try {
            // NOTE: This API call targets a local server which will fail in this environment.
            // A mock response is used in the catch block to ensure the UI functions.
            const response = await axios.post("http://127.0.0.1:5000", { text });
            const data = response.data;

            if (data && data.results) {
                const ppl = data.results["Perplexity per line"];
                setAnalysis({
                    output: data.output || "Analysis complete.",
                    burstiness: data.results.Burstiness ? data.results.Burstiness.toFixed(2) : "N/A",
                    perplexity: data.results.Perplexity ? data.results.Perplexity.toFixed(0) : "N/A",
                    perplexityPerLine: ppl ? ppl.toFixed(2) : "N/A",
                    confidence: calculateConfidence(ppl),
                });
            } else {
                throw new Error("Invalid response from server.");
            }
        } catch (err) {
            console.error("Error during analysis (expected in sandbox):", err.message);

            // --- Mock Response for Sandbox Environment ---
            const mockPPL = text.length > 500 ? 95.23 : 55.45; // Simulates Human (High PPL) vs AI (Low PPL)
            const mockOutput = mockPPL > 80
                ? "The text exhibits characteristics typically found in human-written content. High perplexity and burstiness suggest varied sentence structure and vocabulary, which are common traits of natural human expression."
                : "The text exhibits characteristics typically found in AI-generated content. Low perplexity and burstiness suggest a high degree of predictability, homogeneity, and a formal, often uniform, style.";

            setAnalysis({
                output: mockOutput,
                burstiness: '0.42',
                perplexity: '120',
                perplexityPerLine: mockPPL.toFixed(2),
                confidence: calculateConfidence(mockPPL.toFixed(2)),
            });
            setError('Could not connect to the local server. Displaying mock analysis results.');
            // --- End Mock Response ---

        } finally {
            setIsLoading(false);
            setButtonText('ANALYZE TEXT');
        }
    };

    // Helper component for the Metric Cards
    const MetricCard = ({ title, value }) => (
        <div className="metric-card">
            <p className="metric-card-title">{title}</p>
            <div className="metric-card-value">
                {isLoading ? (
                    <div className="loading-skeleton"></div>
                ) : (
                    value
                )}
            </div>
        </div>
    );

    // Helper component for the Confidence Gauge
    const ConfidenceGauge = ({ score }) => {
        // Dynamic properties (must remain inline for reactivity)
        const radius = 70;
        const stroke = 13;
        const normScore = Math.max(0, Math.min(100, score));
        const cx = 80, cy = 80, semicircle = Math.PI, normalized = normScore / 100;
        const dashArray = radius * semicircle;
        const dashOffset = dashArray * (1 - normalized);
        const getColor = s => s < 30 ? "#ef4444" : s < 70 ? "#f59e0b" : "#10b981";

        return (
            <div className="flex flex-col items-center">
                <p className="text-lg font-semibold text-gray-400 mb-4 select-none">
                    CONFIDENCE SCORE (Human)
                </p>
                <svg width={160} height={90} viewBox="0 0 160 90">
                    {/* Track */}
                    <path
                        d="
          M 20 80
          A 60 60 0 0 1 140 80
        "
                        fill="none"
                        stroke="#374151"
                        strokeWidth={stroke}
                    />
                    {/* Progress */}
                    <path
                        d="
          M 20 80
          A 60 60 0 0 1 140 80
        "
                        fill="none"
                        stroke={getColor(score)}
                        strokeWidth={stroke}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        style={{ transition: "stroke-dashoffset 1s, stroke 1s" }}
                        strokeLinecap="round"
                    />
                    {/* Percentage Label */}
                    <text
                        x="80"
                        y="62"
                        textAnchor="middle"
                        fontSize="2rem"
                        fontWeight="bold"
                        fill="#4ee6d5"
                        dy=".3em"
                    >
                        {isLoading ? "..." : `${score}%`}
                    </text>
                </svg>
            </div>
        );

    };


    return (
        <div className="app-container">
            {/* The CSS content of app.css is embedded here for single-file compliance */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            <header className="app-header">
                <h1 className="header-title">AI DETECTOR</h1>
                <p className="header-subtitle">Powered by Advanced Language Models</p>
            </header>

            {/* MOVED & RESTYLED ABOUT SECTION END */}

            <main className="main-content">
                <h2 className="main-title">
                    Content Authenticity Check
                </h2>

                {/* Text Input Area */}
                <form onSubmit={handleAnalysis}>
                    <textarea
                        className="text-input"
                        placeholder="Paste the text you want to check for AI generation here... (Minimum 100 characters)"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        disabled={isLoading}
                    />

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={`submit-button ${isLoading || text.trim().length < 100 ? 'disabled' : ''}`}
                        disabled={isLoading || text.trim().length < 100}
                    >
                        {buttonText}
                    </button>
                </form>

                {/* Analysis Breakdown Section */}
                <h3 className="analysis-title-section">
                    Analysis Breakdown
                </h3>

                <div className="analysis-grid">
                    {/* Left Column: Confidence & Interpretation */}
                    <div className="interpretation-area">

                        {/* Confidence Score Card (Centered) */}
                        <div className="card-base gauge-card">
                            <ConfidenceGauge score={analysis.confidence} />
                        </div>

                        {/* Interpretation Card (Text Output) */}
                        <div className="card-base interpretation-card">
                            <h4 className="interpretation-title">Interpretation</h4>
                            <p className="interpretation-output">
                                {isLoading ? 'Processing...' : analysis.output}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Metrics */}
                    <div className="metrics-area">
                        <MetricCard
                            title="PERPLEXITY"
                            value={analysis.perplexity}
                        />
                        <MetricCard
                            title="BURSTINESS"
                            value={analysis.burstiness}
                        />
                        <MetricCard
                            title="PERPLEXITY PER LINE"
                            value={analysis.perplexityPerLine}
                        />

                        {/* Placeholder/Extra Info Card */}
                        <div className="info-card span-sm-2">
                            <p className="text-sm">
                                **Perplexity** measures how well a language model predicts a sample of text. **Lower scores** indicate text that is more predictable (often AI-generated). **Burstiness** reflects the variation in perplexity across the text.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            {/* FOOTER START (Only Copyright remains) */}
            <footer className="app-footer">
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} AI Detector. All rights reserved.
                </div>
            </footer>
            {/* FOOTER END */}
        </div>
    );
};

export default CardBody;