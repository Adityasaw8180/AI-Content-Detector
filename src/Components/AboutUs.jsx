import React from "react";

export default function AboutUs() {
  const aboutUsStyles = `
    /* --- ENHANCEMENTS START HERE --- */

    /* 🎨 BRANDING COLORS & TYPOGRAPHY */
    :root {
      --primary-blue: #1E90FF; /* Dodger Blue - Brighter, more modern primary color */
      --secondary-green: #3CB371; /* Medium Sea Green - For accents */
      --text-dark: #1F2937; /* Darker, professional text */
      --text-light: #4B5563; /* Slightly lighter body text */
      --bg-light: #F9FAFB;
      --shadow-color: rgba(30, 144, 255, 0.2); /* Shadow with primary color tint */
    }

    /* 🌐 General Page Layout */
    .about-page-container {
      padding: 100px 20px 60px; /* Increased top padding */
      background: var(--bg-light); /* Single light background */
      min-height: 100vh;
      font-family: 'Inter', sans-serif;
      color: var(--text-dark);
      transition: background 0.5s; /* Smooth background transitions */
    }

    /* 🧠 Hero Section - Sharper Contrast */
    .about-hero-header {
      margin-bottom: 60px; /* Increased spacing */
      text-align: center;
    }

    .about-hero-header h1 {
      font-size: 3.5rem; /* Larger, more impactful heading */
      font-weight: 800; /* Bolder weight */
      color: var(--text-dark); 
      margin-bottom: 15px;
      letter-spacing: -1px; /* Tighter for large fonts */
    }

    .about-hero-header p {
      font-size: 1.35rem; /* Larger sub-heading */
      color: var(--text-light);
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
    }

    /* 📄 Content Section - Floating Card Look */
    .about-content {
      max-width: 900px; /* Wider content area */
      margin: 0 auto;
      text-align: left;
      line-height: 1.7;
      background: #ffffff;
      border-radius: 12px; /* Slightly reduced border-radius */
      padding: 50px 60px; /* Increased padding inside content */
      box-shadow: 0 10px 30px var(--shadow-color); /* Stronger, branded shadow */
      border: 1px solid #e0e7f7; /* Subtle border for definition */
    }
    
    .about-content h2 {
        font-size: 1.8rem;
        color: var(--primary-blue); /* Title color */
        margin-bottom: 25px;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--primary-blue); /* Underline style */
        display: inline-block; /* Only underline the text */
    }

    .about-content p {
      font-size: 1.05rem; /* Slightly larger body text */
      margin-bottom: 30px; /* Increased paragraph separation */
      color: var(--text-light);
    }

    .about-content strong {
      color: var(--primary-blue); /* Consistent primary color highlight */
      font-weight: 600;
    }

    /* 📋 List Styling - Feature Boxes */
    .feature-list {
      display: grid;
      grid-template-columns: 1fr 1fr; /* Two columns for features */
      gap: 20px;
      list-style: none;
      padding-left: 0;
      margin-top: 20px;
      margin-bottom: 40px; /* Increased bottom margin */
    }

    .feature-list li {
      background: #ffffff; /* White background for list items */
      border: 1px solid #e0e7f7;
      border-top: 4px solid var(--secondary-green); /* Use secondary color for emphasis */
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 0; /* Remove internal margin from the original list */
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    }
    
    .feature-list li strong {
        display: block;
        font-size: 1.15rem;
        margin-bottom: 5px;
        color: var(--primary-blue);
    }
    
    .feature-list li p {
        margin: 0;
        font-size: 0.95rem;
        color: var(--text-light);
    }

    .feature-list li:hover {
      transform: translateY(-5px); /* Stronger lift effect */
      box-shadow: 0 8px 25px var(--shadow-color);
      border-top-color: var(--primary-blue); /* Change accent color on hover */
    }

    /* 💡 Responsive Design */
    @media (max-width: 992px) {
      .about-content {
        padding: 40px;
      }
      .feature-list {
          grid-template-columns: 1fr; /* Stack features on smaller screens */
      }
    }

    @media (max-width: 576px) {
      .about-hero-header h1 {
        font-size: 2.8rem;
      }
       .about-hero-header p {
        font-size: 1.1rem;
      }
      .about-content {
        padding: 25px;
      }
    }

    /* ✨ Subtle Animations (Kept and slightly modified) */
    .about-page-container {
      animation: fadeIn 1s ease-out; /* Slower, smoother animation */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px); /* Larger starting offset */
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* --- ENHANCEMENTS END HERE --- */
  `;

  return (
    <div className="container">
      {/* Inject CSS directly into the page */}
      <style dangerouslySetInnerHTML={{ __html: aboutUsStyles }} />

      <section className="about-page-container">
        <div className="about-hero-header">
          <h1>
            About <span style={{ color: "var(--primary-blue)" }}>Generative AI Detection</span> 🔍
          </h1>
          <p>
            Welcome to the platform dedicated to <b>promoting transparency and ethical use of AI</b> by accurately analyzing content authenticity.
          </p>
        </div>

        <div className="about-content">
          <h2>Our Mission and Approach</h2>
          <p>
            Our core mission is to empower students, educators, and professionals with the tools needed to <b>identify AI-generated content</b> and maintain the integrity of academic and professional work. In a rapidly evolving digital landscape, trust and transparency are paramount.
          </p>
          
          <p>
            We leverage cutting-edge <b>Natural Language Processing (NLP)</b> and machine learning algorithms to achieve high accuracy. Our system doesn't just look for patterns; it analyzes the fundamental statistical properties of the text generation process.
          </p>

          <h2>Key Detection Features</h2>
          <ul className="feature-list">
            <li>
              <strong>Perplexity:</strong> 
              <p> Measures how predictable or random the text is. Lower perplexity often indicates text generated by an over-optimized model.
             Detects the <b>smoothness</b> and statistical likelihood of word choices.</p>
            </li>
            <li>
              <strong>Burstiness:</strong>
               <p> Measures the variation in sentence complexity and length. Human writing naturally has high variation; AI models tend to produce text with more uniform structure.
             Analyzes the <b>rhythm</b> and <b>style consistency</b> across the document.</p>
            </li>
          </ul>

          <p>
            We are dedicated to maintaining the <b>value of human creativity</b> in the digital era. For more information on our methodology, please contact our research team.
          </p>
        </div>
      </section>
    </div>
  );
}