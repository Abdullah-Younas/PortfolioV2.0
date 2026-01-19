import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const ACB = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>ACB Adult Content Blocker</Text>
      <Text style={styles.author}>Desktop App & Chrome Extension</Text>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        ACB is a dual-purpose tool designed to help users maintain a safer and more focused digital environment by actively preventing exposure to inappropriate content. It exists as both a Python desktop application that monitors system-level keyboard input and a Chrome extension that scans web content in real-time. The entire project was created to address a personal need for better content filtering that actually works without relying on paid services or cloud-based solutions that compromise privacy. Its main goal is to detect and block inappropriate or adult content in real-time, either in web browsing sessions or via direct keyboard input monitoring at the operating system level. The system operates locally on the user's machine, ensuring that no browsing data or personal information ever leaves the device.
      </Text>

      <Text style={styles.text}>
        The development started with the Chrome extension as a proof of concept, testing whether client-side JavaScript could effectively scan page content fast enough to block tabs before inappropriate material fully loaded. After confirming this worked reliably, the Python desktop component was added to extend protection beyond the browser, catching attempts to access inappropriate content through other applications, search bars, or direct URL typing. Both components share the same core keyword matching logic but operate independently, allowing users to run either one or both depending on their needs and comfort level with system-level monitoring.
      </Text>

      <Text style={styles.subtitle}>
        Features
      </Text>

      <Text style={styles.text}>
        Smart Content Detection scans URLs, page titles, meta descriptions, and the first 5000 characters of visible page content for inappropriate keywords using a continuously updated blocklist. The detection algorithm checks multiple content sources simultaneously, comparing against hundreds of predefined banned words and phrases that are stored locally in an encrypted format to prevent easy tampering. The system uses case-insensitive matching and handles common obfuscation techniques like character substitution, spacing manipulation, and leetspeak variants. Detection happens in milliseconds, fast enough to catch content before it renders on screen. The Chrome extension version runs these checks immediately when a new tab loads or when the URL changes, while the desktop version continuously monitors keyboard input streams for matching patterns.
      </Text>

      <Text style={styles.text}>
        Instant Tab Closure is triggered the moment inappropriate content is detected in the Chrome extension, closing the offending tab automatically without requiring user intervention or confirmation. This immediate response prevents even brief exposure to blocked content, which is critical for users trying to avoid triggers or maintain focus. The closure happens through Chrome's extension API, which can terminate tabs faster than manual clicking. A brief notification appears in the corner indicating why the tab was closed, though this can be disabled in settings for users who prefer silent operation. The system tracks closure events to provide usage statistics, showing users how many blocks occurred over time without storing specific URLs or page content.
      </Text>

      <Text style={styles.text}>
        Whitelist Protection ensures that trusted sites like GitHub, YouTube, Stack Overflow, Google, Wikipedia, and other commonly used development and educational resources bypass all content checks entirely. This prevents false positives that could interfere with legitimate work, especially on platforms where user-generated content might occasionally contain flagged keywords in innocent contexts like code comments or technical discussions. The whitelist is maintained as a separate list that's checked before any content scanning occurs, short-circuiting the detection process immediately if the domain matches. Users can view the complete whitelist at any time and understand exactly which sites are exempt from filtering. The whitelist is implemented at the domain level rather than specific URLs, so all subdomains and paths under a trusted domain receive the same protection.
      </Text>

      <Text style={styles.text}>
        Customizable Filters allow users to add or remove banned words through the extension popup interface without needing to edit configuration files or restart the browser. The interface provides a simple text area where users can enter new keywords, one per line, and see them take effect immediately. This flexibility is essential because different users have different sensitivity levels and different contexts where certain words might be problematic. Users working in healthcare, education, or research might need to whitelist clinical terms that would otherwise trigger blocks. The filter management interface includes search functionality to find specific keywords in the list, bulk import and export options for sharing configurations between devices, and the ability to disable specific keywords temporarily without deleting them entirely.
      </Text>

      <Text style={styles.text}>
        Domain Whitelisting provides granular control over which websites are exempt from scanning, going beyond the default trusted sites list. Users can add any domain they frequently visit and trust, whether it's a work intranet, a hobby forum, or a news site they rely on. The whitelisting interface shows the complete list of exempted domains with the ability to remove entries or add notes explaining why each domain was whitelisted. Pattern matching is supported, allowing users to whitelist all subdomains under a parent domain with a single entry. This feature is particularly useful for users who work in industries where technical discussions might trigger false positives but the platforms themselves are safe and necessary for work.
      </Text>

      <Text style={styles.text}>
        Lightweight Performance is achieved by only scanning the first 5000 characters of each page's text content, which captures headlines, initial paragraphs, and meta information where inappropriate content signals are most likely to appear. This character limit prevents performance degradation on very long pages while still catching problematic content reliably. The scanning process runs asynchronously in a background script, ensuring it never blocks page rendering or makes the browser feel sluggish. Memory usage is kept minimal by using efficient string matching algorithms and avoiding regular expressions where possible. The extension footprint is under 1MB total, including all code, configuration, and assets. Performance benchmarks show scanning completes in under 50 milliseconds on average hardware, imperceptible to users during normal browsing.
      </Text>

      <Text style={styles.text}>
        Privacy-Focused design means all processing happens entirely on the local device with zero external communication. No user data, browsing history, blocked URLs, or keyword lists are ever transmitted to external servers, analytics platforms, or third-party services. The extension and desktop app operate in complete isolation from the internet except for the normal web browsing they're protecting. This local-first architecture eliminates privacy concerns common with cloud-based filtering services that monitor all traffic through their servers. Users can verify this privacy commitment by inspecting the open source code, checking network activity while the tools run, or reviewing the extension's declared permissions which are limited to the minimum necessary for content scanning and tab management.
      </Text>

      <Text style={styles.text}>
        Desktop Monitoring through the Python background script detects banned words typed anywhere on the system, not just in browsers. This catches attempts to access inappropriate content through desktop applications, command lines, search bars, messaging apps, or any other text input method. The keylogger component runs with minimal system overhead, monitoring keystroke events at the operating system level and comparing typed text against the same banned keyword list used by the Chrome extension. When violations are detected, the system can trigger different responses based on user configuration, including displaying warnings, logging events, or executing an automatic system shutdown as a last resort deterrent. The shutdown functionality is disabled by default and requires explicit user activation along with a confirmation prompt explaining the consequences.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        Chrome Extension architecture is built with standard web technologies including HTML for the popup interface, CSS for styling and layout, and JavaScript for all logic and browser interaction. The extension uses a manifest v3 structure with separate background service workers and content scripts that inject into web pages. Background scripts handle tab management, storage synchronization, and extension-wide state, while content scripts run in the context of each web page to access and scan page content. Communication between these components happens through Chrome's message passing API, allowing content scripts to report detected violations to the background script which then executes tab closures. The popup provides the user interface for configuration, accessible by clicking the extension icon in the toolbar.
      </Text>

      <Text style={styles.text}>
        Content script injection happens automatically on all HTTP and HTTPS pages as soon as they load, before the page's own JavaScript executes. This timing is critical for catching inappropriate content before it displays. The scripts scan the DOM structure, extracting text from headings, paragraphs, and meta tags while ignoring script tags, style blocks, and hidden elements. Keyword matching uses optimized string search algorithms that can check hundreds of keywords against page content in milliseconds. Results are cached briefly to avoid re-scanning when pages update dynamically, though major DOM changes trigger fresh scans automatically.
      </Text>

      <Text style={styles.text}>
        Python Desktop App implementation uses the pynput library for cross-platform keyboard monitoring, capturing keystroke events regardless of which application currently has focus. The captured keystrokes are assembled into a rolling buffer that maintains the last several hundred characters typed, checked continuously against the banned keyword list. When matches occur, the script can execute various system commands through Python's subprocess module, including displaying notifications through the OS notification system or triggering shutdown commands. The desktop app runs as a background process, consuming minimal CPU and memory while remaining invisible during normal operation. Configuration is stored in encrypted JSON files in the user's home directory, protecting the keyword lists from casual inspection or modification.
      </Text>

      <Text style={styles.text}>
        Local-first Processing eliminates all network dependencies beyond the normal browsing the tools protect. All banned keyword lists, whitelist entries, user preferences, and detection logs remain on the local device stored in standard browser storage for the extension and encrypted files for the desktop app. This architecture ensures the tools continue functioning perfectly even without internet connectivity and prevents any possibility of data leaks to external parties. Updates to keyword lists happen manually through the user interface rather than automatic cloud synchronization, giving users complete control over what gets blocked.
      </Text>

      <Text style={styles.text}>
        Open Source and Customizable codebase allows users to audit every line of code, verify privacy claims, and modify functionality to suit specific needs. The entire project is hosted on GitHub with comprehensive documentation explaining the architecture, setup process, and customization options. Users comfortable with JavaScript and Python can extend the tools with additional features, integrate them with other security software, or adapt the detection logic for different use cases beyond adult content blocking. The modular code structure makes common modifications straightforward, with clear separation between detection logic, user interface, and system integration components.
      </Text>

      <Text style={styles.subtitle}>
        How It Works
      </Text>

      <Text style={styles.text}>
        Content or keystroke scanning begins the moment new text appears, whether from a loading web page or keyboard input. The Chrome extension triggers scanning when tabs update, URLs change, or page content modifies. The desktop app monitors the keyboard buffer continuously, checking accumulated characters after each keystroke. Both systems use the same core matching algorithm but adapted to their specific contexts. Web content scanning focuses on visible text and metadata, while keyboard monitoring checks sequential character patterns that might form inappropriate words or phrases.
      </Text>

      <Text style={styles.text}>
        Matches against the predefined list of banned keywords happen through efficient string comparison algorithms optimized for speed. The keyword list is indexed in memory for fast lookup, allowing hundreds of keyword checks to complete in under a millisecond. Partial word matching prevents attempts to bypass filters with extra characters or spaces, while whole word matching prevents false positives from innocent words containing flagged substrings. The matching system is configurable, allowing users to choose between strict exact matching, flexible pattern matching, or aggressive substring detection depending on their needs.
      </Text>

      <Text style={styles.text}>
        Whitelist domains or trusted words are checked first, before any keyword matching occurs, providing an immediate bypass path that prevents unnecessary processing. This order of operations ensures maximum performance on trusted sites while maintaining thorough filtering everywhere else. Whitelist checking uses domain comparison for websites and exact matching for individual keywords, both implemented with hash-based lookups for constant-time performance. Users can combine domain and keyword whitelisting, allowing specific terms only on specific sites for maximum control.
      </Text>

      <Text style={styles.text}>
        If violations occur after passing whitelist checks and matching against banned keywords, the extension immediately closes the offending browser tab using Chrome's tab removal API, while the desktop app can execute its configured response which might range from a simple notification to a system shutdown depending on user settings. The extension displays a brief unobtrusive notification explaining the block, giving users feedback about the filtering without being disruptive. All violation events can be logged to a local file for later review, though this is disabled by default to maximize privacy. Logs never include full URLs or page content, only timestamps and the keyword that triggered the block.
      </Text>

      <Text style={styles.text}>
        Users can customize filters and whitelists at any time through intuitive interfaces that require no technical knowledge. Changes take effect immediately without requiring browser restarts or application relaunches. The customization interfaces include helpful explanations, example configurations, and warnings about potentially problematic settings that might interfere with legitimate browsing. Export and import functions allow users to share configurations between computers or back up their settings before making experimental changes.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy & Safety
      </Text>

      <Text style={styles.text}>
        ACB is designed to be a lightweight, privacy-first tool to support focused browsing and personal discipline without requiring trust in external services or tolerance for invasive monitoring. The Chrome extension focuses exclusively on content filtering within the browser environment, providing protection during normal web use without requiring administrative privileges or deep system access. The Python app provides comprehensive system-level monitoring for users who need or want protection beyond just web browsing, though it requires more setup and carries more responsibility due to its ability to trigger system shutdowns.
      </Text>

      <Text style={styles.text}>
        Users should exercise significant caution with the desktop script, particularly the shutdown functionality, as it can trigger unexpected system shutdowns that might cause data loss if important work is unsaved. The shutdown feature is disabled by default and requires explicit activation along with acknowledgment of the risks. Documentation clearly explains that this is an extreme deterrent measure suitable only for users who understand the consequences and are prepared to accept them as part of their commitment to avoiding inappropriate content. Alternative less disruptive responses like notifications or activity logging are recommended for most users.
      </Text>

      <Text style={styles.text}>
        The tools are designed to support personal accountability rather than impose external control. They work best when users actively want to avoid certain content and need technical assistance to maintain that goal, not when imposed on unwilling users or used for surveillance of others. The project documentation emphasizes ethical use, proper consent when used on shared devices, and the importance of combining technical tools with personal commitment and support systems when dealing with serious behavioral issues.
      </Text>

      <Text style={styles.subtitle}>
        Future Improvements
      </Text>

      <Text style={styles.text}>
        Regex-based keyword matching would enable more sophisticated pattern detection beyond simple string matching, catching variations and obfuscations that currently slip through. Regular expression support would allow matching complex patterns like substitution ciphers, intentional misspellings, or contextual combinations of words that are innocent separately but problematic together. Implementation would require careful performance optimization since regex matching is computationally expensive compared to simple string comparison, but the improved accuracy would benefit users dealing with determined attempts to bypass filters.
      </Text>

      <Text style={styles.text}>
        Time-based blocking schedules would allow users to configure different filtering levels for different times of day or days of the week. Work hours might enable stricter filtering to maintain professional focus, while evening hours could relax some restrictions. Schedule-based configuration would help users maintain boundaries between work time and personal time without manually toggling settings. Implementation would integrate with the existing configuration system, adding time ranges and rule priorities to the filter definitions.
      </Text>

      <Text style={styles.text}>
        Password protection for settings would prevent casual tampering with filters, whitelists, or other configuration options. Users could lock their settings with a password that must be entered before making changes, adding friction that helps resist impulsive decisions to disable protection. This feature would be particularly valuable for users who struggle with accountability and need additional barriers to prevent undermining their own filtering choices. The password system would use industry-standard hashing and wouldn't store passwords in recoverable form, though password reset would require deleting and reconfiguring the extension.
      </Text>

      <Text style={styles.text}>
        Optional soft warnings before enforcing tab closures or shutdowns would give users a brief opportunity to reconsider before the action executes, reducing false positives while maintaining protection. Warning mode would display a prominent blocking page explaining what was detected and why, with options to proceed anyway, whitelist the site, or close the tab. This more forgiving approach works better for users who experience frequent false positives or who want protection without absolute enforcement. The warning system would be configurable with timeouts, allowing users to set how long they must wait before bypassing a warning.
      </Text>

      <Text style={styles.text}>
        Import and export configuration would allow users to back up their carefully tuned settings, share configurations with friends or family members, or synchronize settings across multiple devices without manual reconfiguration. Configuration files would use standard JSON format, making them human-readable and easy to edit in text editors for advanced users. Import would include validation to prevent corrupted or malicious configurations from breaking the tool. Preset configuration packages could be shared in the community, offering starting points for common use cases like educational environments, workplace filtering, or parental control scenarios.
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