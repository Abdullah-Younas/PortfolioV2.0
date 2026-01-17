import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const ACB = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>ACB — Adult Content Blocker</Text>
      <Text style={styles.author}>Desktop App & Chrome Extension</Text>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        ACB is a dual-purpose tool designed to help users maintain a safer and
        more focused digital environment. It exists as both a Python desktop
        application and a Chrome extension. Its main goal is to detect and block
        inappropriate or adult content in real-time, either in web browsing or
        via keyboard input.
      </Text>

      <Text style={styles.subtitle}>
        Features
      </Text>

      <Text style={styles.text}>
        • Smart Content Detection — Scans URLs, page titles, and page content
        for inappropriate keywords.  
        • Instant Tab Closure — Chrome extension automatically closes
        inappropriate tabs.  
        • Whitelist Protection — Trusted sites like GitHub, YouTube, or Google
        bypass checks.  
        • Customizable Filters — Users can add or remove banned words through
        the extension popup interface.  
        • Domain Whitelisting — Specific domains can be exempted from
        scanning.  
        • Lightweight Performance — Only scans first 5000 characters per page
        to maintain speed.  
        • Privacy-Focused — All processing is local; no user data is sent
        externally.  
        • Desktop Monitoring — Python background script detects banned words
        typed on the system and can trigger an automatic shutdown.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        • Chrome Extension: Built with HTML, CSS, and JavaScript. Background
        scripts and content scripts handle scanning, keyword matching, and
        whitelist enforcement.  
        • Python Desktop App: Uses Python keylogger scripts to monitor
        keyboard input, compares against banned words, and triggers system
        actions when violations occur.  
        • Local-first Processing: All detection and actions happen on the
        user's device to preserve privacy.  
        • Open Source & Customizable: Users can modify banned words, whitelisted
        domains, and other settings.
      </Text>

      <Text style={styles.subtitle}>
        How It Works
      </Text>

      <Text style={styles.text}>
        1. Content or keystroke scanning detects text in real-time.  
        2. Matches against a predefined list of banned keywords.  
        3. Whitelist domains or trusted words are skipped.  
        4. If violations occur, the extension closes the tab or the desktop app
        initiates a shutdown.  
        5. Users can customize filters and whitelists for more precise control.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy & Safety
      </Text>

      <Text style={styles.text}>
        ACB is designed to be a lightweight, privacy-first tool to support
        focused browsing and personal discipline. The Chrome extension focuses
        on content filtering, while the Python app provides system-level
        monitoring. Users should exercise caution with the desktop script,
        as it can trigger system shutdowns.
      </Text>

      <Text style={styles.subtitle}>
        Future Improvements
      </Text>

      <Text style={styles.text}>
        • Regex-based keyword matching for more accurate detection.  
        • Time-based blocking schedules.  
        • Password protection for settings.  
        • Optional soft warnings before enforcing tab closures or shutdowns.  
        • Import/export configuration for multiple devices or users.
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

export default ACB;
