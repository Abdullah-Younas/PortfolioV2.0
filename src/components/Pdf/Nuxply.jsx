import React from 'react';
import { Document, Page, Text, Link } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Nuxply = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Nuxply</Text>
      <Text style={styles.author}>AI-Powered Job Matching SaaS</Text>
      <Link src="https://nuxply.com/" style={styles.projectLink}>View Project →</Link>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        Nuxply is a fully functional SaaS product built entirely solo that automates the job search process using artificial intelligence. The platform reads a user's CV, extracts their skills and experience, then scans thousands of job listings every morning to find roles where the candidate matches 70% or more of the requirements. Every matching job comes with a personalized cover letter written specifically for that role and company, ready for the user to review and apply with a single click. The entire pipeline from job discovery to cover letter generation runs automatically without any manual intervention from users.
      </Text>

      <Text style={styles.text}>
        The product was conceived after observing how most job seekers waste significant time applying to roles they are underqualified for, writing generic cover letters that recruiters immediately discard, and manually searching job boards that surface irrelevant listings. Nuxply solves all three problems simultaneously by enforcing a strict skill-match threshold, generating genuinely personalized application materials, and running the entire search process autonomously on a daily schedule. Users set up their profile once and check their dashboard each morning for fresh matches with cover letters already prepared.
      </Text>

      <Text style={styles.text}>
        The project went from idea to live product with real paying users in a matter of weeks, built entirely by a single developer. It handles user authentication, subscription billing, AI-powered job matching, automated cover letter generation, webhook-based payment processing, database security policies, and scheduled background jobs — all running in production. The experience of building Nuxply from scratch provided hands-on exposure to every layer of a modern SaaS product, from frontend design to backend automation to payment integration.
      </Text>

      <Text style={styles.subtitle}>
        Technical Architecture
      </Text>

      <Text style={styles.text}>
        The frontend is built with React and Vite, styled entirely with inline CSS and CSS variables for a custom dark green aesthetic that avoids generic UI frameworks. The application uses React Router for client-side navigation across multiple pages including a landing page, dashboard, applications tracker, profile editor, pricing page, and legal pages. Authentication is handled through Supabase Auth with Google OAuth, automatically creating user profiles in the database on first login via a ProtectedRoute component that wraps all authenticated pages.
      </Text>

      <Text style={styles.text}>
        Supabase provides the entire backend infrastructure including the PostgreSQL database, authentication, and file storage. The database contains two primary tables: users, which stores profile information, subscription plan, credit balances, and job preferences, and applications, which logs every job match with the associated cover letter, match score, company name, and job URL. Row Level Security policies ensure users can only access their own data from the frontend, while the automation pipeline uses the service role key to bypass these restrictions for legitimate server-side operations.
      </Text>

      <Text style={styles.text}>
        The daily automation pipeline is built in Make.com and runs every morning on a scheduled trigger. It fetches all active users from Supabase, iterates through each user, calls the JSearch API to find fresh job listings matching the user's job title preference, deduplicates against previously seen companies, scores each job against the user's skills using Claude AI, filters to matches above the threshold, generates a personalized cover letter for each qualifying match using Claude, logs the application to Supabase, decrements the user's credit balance, and sends a summary email via Gmail. The entire pipeline handles error cases, respects daily limits per plan, and processes multiple users in parallel.
      </Text>

      <Text style={styles.text}>
        Claude AI by Anthropic powers two distinct steps in the pipeline. The skill matching step uses Claude Haiku with a tightly constrained prompt to return a single numerical score representing how well a candidate's skills match a job's requirements, incorporating rules about seniority levels, geographic restrictions, and experience thresholds. The cover letter generation step uses a separate Claude call with a detailed prompt that produces human-sounding, role-specific letters that reference the actual company and position rather than using generic templates. Both steps are proxied through Vercel serverless functions to avoid exposing API keys on the frontend.
      </Text>

      <Text style={styles.text}>
        Payments are processed through Lemon Squeezy, which handles subscription billing, tax calculation, and payment processing as a merchant of record. When a user completes a purchase, Lemon Squeezy fires a webhook to a Vercel serverless function that verifies the signature, parses the event type, and updates the user's plan or credit balance in Supabase accordingly. The webhook handler distinguishes between subscription events that update plan tier and one-time purchase events that add top-up credits to the user's balance. Credits reset monthly via a pg_cron scheduled function running directly in the Supabase PostgreSQL instance.
      </Text>

      <Text style={styles.subtitle}>
        Key Features
      </Text>

      <Text style={styles.text}>
        CV Upload with AI Extraction allows users to upload their PDF resume directly in the profile page. The CV is stored in Supabase Storage and simultaneously sent to Claude AI through a serverless proxy, which extracts skills, experience summary, and current job title from the document and auto-fills the profile form. This eliminates manual data entry and ensures the profile reflects the actual content of the user's resume rather than self-reported information that may omit relevant skills or use different terminology than job postings.
      </Text>

      <Text style={styles.text}>
        Daily Job Matching runs automatically every morning without any user interaction. The system enforces a strict 70% skill match threshold, meaning users only see jobs where they genuinely qualify for most of the requirements. The matching algorithm also penalizes roles that require significantly more experience than the candidate has, senior or leadership positions for junior candidates, and geographically restricted roles for international applicants. This filtering dramatically reduces the noise in job search results and increases the response rate from applications that do go out.
      </Text>

      <Text style={styles.text}>
        Personalized Cover Letter Generation produces a unique cover letter for every job match rather than filling a template with variable substitution. Claude AI receives the full job description, the candidate's skills and experience, and instructions to write in a natural human voice that specifically addresses the role's requirements. The generated letters reference actual details from the job posting and connect them to specific aspects of the candidate's background, producing output that reads as genuinely tailored rather than obviously AI-generated.
      </Text>

      <Text style={styles.text}>
        Applications Dashboard provides a clean interface for reviewing job matches, reading cover letters, tracking application status, and updating whether a recruiter responded. Users can mark applications as replied or rejected, which updates the status in the database and provides data for tracking which types of roles generate responses. The dashboard also shows credit usage, remaining monthly quota, and top-up options for users who want more matches beyond their plan's monthly allowance.
      </Text>

      <Text style={styles.text}>
        Subscription Tiers offer three plans with different daily match allowances: Free provides one match per day, Standard provides five matches per day, and Premium provides five matches per day for a longer monthly window. Top-up credit packs allow users to extend their monthly quota without upgrading their subscription tier, providing flexibility for periods of intensive job searching. Credits reset automatically at the start of each billing month via a scheduled database function.
      </Text>

      <Text style={styles.subtitle}>
        Challenges and Learnings
      </Text>

      <Text style={styles.text}>
        The biggest technical challenge was managing Row Level Security in Supabase while simultaneously running server-side automation that needed unrestricted database access. The solution was maintaining two separate access patterns: the frontend uses the anon key with RLS policies that restrict each user to their own data, while the Make.com automation and Vercel webhook handlers use the service role key that bypasses RLS entirely. Getting this separation right required careful debugging of permission errors across multiple modules.
      </Text>

      <Text style={styles.text}>
        Payment processor approval proved unexpectedly difficult. The initial Lemon Squeezy store application was rejected, requiring a demo video walkthrough of the product's functionality and detailed explanation of the business model before gaining approval. This experience highlighted that for developers building SaaS products, the business and compliance requirements around payment processing can be as challenging as the technical implementation.
      </Text>

      <Text style={styles.text}>
        Prompt engineering for consistent AI output required significant iteration. Getting Claude to reliably return a single integer between 0 and 100 for job matching, without any additional text or explanation, required careful construction of the prompt and appropriate token limits. Similarly, the cover letter prompt needed to balance specificity about format requirements with enough creative freedom to produce genuinely varied output rather than formulaic text with superficial personalization.
      </Text>

      <Text style={styles.text}>
        Make.com operation costs scale with the number of users and jobs processed per run, which creates an infrastructure cost model that requires careful planning as the user base grows. At small scale the platform costs are minimal, but the architecture would need to migrate from Make.com to a custom Node.js cron job on Vercel to remain economical at hundreds of users. Building this migration path was identified early and factored into the product roadmap.
      </Text>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages}`
        }
        fixed
      />
    </Page>
  </Document>
);

export default Nuxply;