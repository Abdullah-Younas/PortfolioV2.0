import React from 'react';
import { Document, Page, Text, Link, View } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Cv = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Malik Muhammad Abdullah Younas</Text>
      <Text style={styles.author}>Full Stack Developer | Game Developer | Software Engineer</Text>
      <View style={styles.linkContainer}>
        <Text style={styles.text}>Islamabad, Pakistan • abdullahyounas0805@gmail.com </Text>
        <Text style={styles.text}> • </Text>
        <Link src="https://github.com/Abdullah-Younas" style={styles.link}>GitHub </Link>
        <Text style={styles.text}> • </Text>
        <Link src="https://abdullahyounas-portfolio.pages.dev/" style={styles.link}>Portfolio </Link>
        <Text style={styles.text}> • </Text>
        <Link src="https://www.linkedin.com/in/malik-muhammad-abdullah-younas-8130762a0/" style={styles.link}>LinkedIn </Link>
        <Text style={styles.text}> • </Text>
        <Link src="https://x.com/younas34035" style={styles.link}>X/Twitter</Link>
      </View>

      <Text style={styles.subtitle}>Summary</Text>
      <Text style={styles.text}>
        Just a coder who loves to build and break things, then rebuild them better after figuring out what went wrong the first time. Can usually be found talking to my laptop at 2 AM about why a function isn't returning the expected value, or debugging code that worked perfectly yesterday but decided to stop cooperating today. I make everything from quirky games that exist purely to test a mechanic I thought would be fun, to useful web apps that solve real problems I've encountered in daily life. Sometimes, I create entire projects just to see if I can, pushing my skills into unfamiliar territory to learn new techniques and technologies. Been at it since I was 10 years old, starting with basic HTML and simple game modifications, but really started taking things seriously around 17 when I moved beyond tutorials and began building complete original projects from scratch. Now, I'm all about pushing boundaries with game development in Unreal Engine where I experiment with movement systems and level design, and building slick web apps with React and Firebase that emphasize real-time functionality and clean user experiences.
      </Text>
      <Text style={styles.text}>
        Hi, I'm Abdullah, a 19-year-old Computer Science student from Pakistan currently pursuing my BS at Iqra University where I'm learning theoretical foundations while simultaneously applying them to practical projects. I'm passionate about creating interactive worlds and tools that make life a little more interesting, whether that means building a game that tests reflexes and spatial reasoning or developing a web application that simplifies a tedious task. Whether it's developing a new game mechanic that makes movement feel satisfying and responsive, or polishing a website feature until it loads instantly and behaves predictably, I'm always eager to dive in headfirst and level up my skills through hands-on experimentation. I learn best by doing, so most of my knowledge comes from building projects, hitting obstacles, researching solutions, and iterating until things work properly. This practical approach has taught me more than any textbook or lecture ever could.
      </Text>

      <Text style={styles.subtitle}>Experience</Text>
      <Text style={styles.jobTitle}>Frontend Lead Developer – 3DSmileSolution | 2025</Text>
      <Text style={styles.bullet}>• Led front-end development for three distinct projects spanning different use cases: two landing pages designed for marketing and client acquisition, and one comprehensive CRM system built for internal team management and customer relationship tracking.</Text>
      <Text style={styles.bullet}>• Designed and implemented responsive, user-focused interfaces with careful attention to performance optimization, ensuring fast load times and smooth interactions even on slower devices or connections, and accessibility standards compliance, making sure all interfaces work properly with screen readers and keyboard navigation.</Text>
      <Text style={styles.bullet}>• Translated design mockups and stakeholder requirements into clean, scalable UI components built with modern frontend frameworks, maintaining clear separation between presentation and logic to ensure maintainability as projects grow.</Text>
      <Text style={styles.bullet}>• Maintained front-end architecture consistency and code quality across all three projects, establishing shared component libraries, consistent naming conventions, and comprehensive documentation that allowed team members to understand and modify code confidently.</Text>
      <Text style={styles.bullet}>• Collaborated directly with designers, backend developers, and project managers through regular meetings and feedback sessions to ensure frontend implementation aligned with both visual design intent and backend API capabilities.</Text>
      <Text style={styles.bullet}>• Implemented state management solutions appropriate to each project's complexity, using local component state for simple landing pages while leveraging more sophisticated state management for the CRM system that required complex data synchronization.</Text>
      <Text style={styles.bullet}>• Optimized frontend performance through code splitting, lazy loading, and caching strategies that reduced initial page load times and improved perceived responsiveness across all projects.</Text>
      <Text style={styles.bullet}>• Conducted thorough cross-browser testing to ensure consistent behavior across Chrome, Firefox, Safari, and Edge, addressing browser-specific quirks and polyfilling missing features for older browsers when necessary.</Text>

      <Text style={styles.subtitle}>Projects</Text>
      
      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Smochat  [React, Firebase]</Text>
        <Text style={styles.projectDesc}>Real-time chat application with Google authentication for quick user onboarding, fast responsive UI optimized for mobile and desktop use, comprehensive group management including public and private channels, real-time message synchronization across all connected clients, and user presence indicators showing who's currently active. Built as a prototype for a client who needed simple team communication without the complexity of mainstream platforms.</Text>
        <Link src="https://smochat.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Whispern  [React, Firebase, Ads]</Text>
        <Text style={styles.projectDesc}>Micro-note platform allowing users to publish short messages under 100 words with full control over identity, supporting both anonymous or named posting depending on user preference, dedicated notes that can be addressed to specific individuals or broadcast to the entire platform, and ad-based post unlocking system where users get 3 free posts then watch short advertisements to unlock additional posting capacity. Built to create a space for honest expression without social media baggage.</Text>
        <Link src="https://whispern.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Sencdec  [React, Firebase]</Text>
        <Text style={styles.projectDesc}>Multi-format file encryption and decryption tool supporting text files, images, audio files, and video files with secure client-side key generation and handling that ensures backend never has access to unencrypted content. Features live text encryption for quick message security, format-aware processing that automatically detects file types and applies appropriate encryption, and session-based keys that are never exposed to users or stored in the database.</Text>
        <Link src="https://sencdec.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Boardify  [React, CSS]</Text>
        <Text style={styles.projectDesc}>Image-sharing site prototype demonstrating real-time image platform capabilities with instant upload functionality, exact filename search for finding specific images, profile-based management where users control their own uploads, and real-time gallery updates that show new images across all clients immediately. Developed quickly to demonstrate technical feasibility to potential clients considering custom image platforms.</Text>
        <Link src="https://boardify-n2t.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Keyboard Cowboys  [React, CSS]</Text>
        <Text style={styles.projectDesc}>Typing speed game where correctly typed words fire bullets at targets, combining typing practice with arcade action gameplay. Features competitive leaderboard system tracking best times and accuracy rates, progressive difficulty that increases as players improve, and satisfying visual feedback for successful shots. Became unexpectedly popular among classmates who competed for top scores.</Text>
        <Link src="https://keyboard-cowboys.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Haze  [Unreal Engine 4, Blueprint]</Text>
        <Text style={styles.projectDesc}>FPS maze escape game built for a game jam with procedurally generated layouts ensuring every run is unique, forward-only movement mechanics that remove traditional FPS freedom to create tension, swarming bees as unpredictable obstacles that disrupt player flow at critical moments, and time-based challenge encouraging speedrunning and personal record tracking. Designed to feel ruthless and demanding.</Text>
        <Link src="https://smokashi.itch.io/haze" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Wooshy  [Unreal Engine 4, Blueprint]</Text>
        <Text style={styles.projectDesc}>Flying arcade prototype emphasizing fluid momentum-based movement and responsive flight controls that make aerial navigation feel satisfying. Focus on physics-based flight where momentum matters more than instant directional changes, challenging the player to plan movements ahead and maintain flow through level geometry. Built to explore movement mechanics that could work in larger game projects.</Text>
        <Link src="https://smokashi.itch.io/wooshy" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• BloomWars  [Godot]</Text>
        <Text style={styles.projectDesc}>Territory conquest game where flowers fight each other for land through strategic spreading and encirclement mechanics. Players grow seeds through repeated clicks, split mature seeds into multiple new seeds, and eliminate enemy seeds by completely surrounding them. Features minimal but deep mechanics with no recovery systems, permanent consequences for mistakes, and ruthless AI that punishes hesitation. Developed in 48 hours for a game jam.</Text>
        <Link src="https://smokashi.itch.io/bloom-wars" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Pong Fusion  [Java]</Text>
        <Text style={styles.projectDesc}>Enhanced modernized version of the classic Pong arcade game adding power-ups, multiple ball physics, varied paddle sizes, and progressive difficulty scaling. Built in Java as an early programming project to understand game loops, collision detection, and real-time rendering. Features customizable game rules and local multiplayer support for competitive play.</Text>
        <Link src="https://smokashi.itch.io/pong-fusion" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Turfist Prototype  [Unreal Engine, Blueprint]</Text>
        <Text style={styles.projectDesc}>Lawn mowing game combining tight vehicle controls with drift mechanics and obstacle avoidance. Core gameplay loop involves mowing grass efficiently while maintaining speed and avoiding collisions that damage the mower. Physics-based driving model makes handling feel weighty and satisfying. Prototype exploring whether mundane tasks can become engaging through good game feel and responsive controls.</Text>
        <Link src="https://smokashi.itch.io/turfist" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• GENG  [C++, OpenGL]</Text>
        <Text style={styles.projectDesc}>Custom graphics engine built from scratch in C++ using modern OpenGL for real-time 3D rendering. Features forward rendering pipeline with depth testing, multiple light types including directional, point, and spotlight, adjustable fog system for atmospheric effects, cubemap skybox implementation, first-person and orbit camera modes, and Dear ImGui integration for real-time parameter tuning. Ongoing work in progress exploring low-level graphics programming.</Text>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• ACB - Adult Content Blocker  [JavaScript, Python]</Text>
        <Text style={styles.projectDesc}>Dual-purpose content filtering tool consisting of a Chrome extension for web browsing protection and Python desktop app for system-wide monitoring. Features smart keyword detection, instant tab closure when violations detected, customizable filter lists, domain whitelisting, privacy-focused local processing, and optional system shutdown capability. Built to support focused browsing and personal discipline without cloud dependencies.</Text>
      </View>

      <Text style={styles.subtitle}>Skills</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Languages:</Text> Java with experience in object-oriented design and data structures, JavaScript including ES6+ features and asynchronous programming, C++ for systems programming and game development, Python for scripting and automation tasks
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Frameworks/Libraries:</Text> React.js for building component-based user interfaces with hooks and context, Node.js for server-side JavaScript and build tooling, Firebase including Realtime Database, Firestore, Authentication, and Storage, Unreal Engine Blueprints for game logic and level scripting
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Tools:</Text> Git for version control with experience in branching workflows and collaboration, GitHub for code hosting and project management, VS Code as primary development environment with extensive customization, IntelliJ for Java development, Unreal Engine for 3D game development and level design, Figma for UI/UX design and prototyping
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Other:</Text> Game Design including mechanics, level design, and balancing, UI/UX principles focusing on usability and accessibility, REST APIs for client-server communication, Authentication and authorization systems, File I/O operations and data persistence, Encryption algorithms and secure data handling, Performance optimization for both web and game applications, Cross-platform development considering different devices and browsers, Responsive design ensuring functionality across screen sizes, Real-time systems including websockets and live data synchronization
      </Text>

      <Text style={styles.subtitle}>Education</Text>
      <Text style={styles.text}>
        BS in Computer Science – Iqra University | 2024–2027
      </Text>
      <Text style={styles.text}>
        Coursework includes data structures and algorithms, object-oriented programming, database systems, web development, software engineering principles, and computer graphics. Actively involved in programming competitions and collaborative projects with classmates. Maintaining strong academic performance while building personal projects that apply theoretical concepts to practical applications.
      </Text>

      <Text style={styles.subtitle}>Achievements</Text>
      <Text style={styles.bullet}>• Keyboard Cowboys became a significant hit among classmates and friends for its fast-paced gameplay that made typing practice competitive and enjoyable, leading to informal tournaments and persistent requests for new features.</Text>
      <Text style={styles.bullet}>• Smochat gained widespread adoption among students for casual real-time chat, becoming the preferred communication tool for group projects and social coordination, with daily active users consistently using the platform for both academic and personal conversations.</Text>
      <Text style={styles.bullet}>• Sencdec ensured secure encryption and decryption of files in school environments and peer-to-peer usage, with classmates relying on it to share sensitive documents and personal files safely without trusting third-party services.</Text>
      <Text style={styles.bullet}>• Led front-end development for multiple professional projects as Frontend Lead at 3DSmileSolution, managing architecture decisions and code quality across teams while meeting aggressive deadlines and client requirements.</Text>
      <Text style={styles.bullet}>• Successfully completed multiple game jam projects under extreme time constraints, shipping playable games from concept to completion in 48 hours while learning new engines and mechanics.</Text>
      <Text style={styles.bullet}>• Built and maintained active user bases for multiple projects without marketing budgets or promotional campaigns, growing through word-of-mouth and organic sharing among satisfied users.</Text>

      <Text style={styles.subtitle}>Freelance Work</Text>
      <Text style={styles.jobTitle}>Game Tester – OpenSeason (Epic Games) | Upwork | 2024</Text>
      <Text style={styles.bullet}>• Tested early builds systematically for bugs, performance issues, and user experience problems across different hardware configurations and gameplay scenarios, documenting findings in detailed reports with reproduction steps.</Text>
      <Text style={styles.bullet}>• Provided comprehensive feedback to developers on game balance, difficulty curves, and overall user experience, identifying areas where mechanics felt unfair, confusing, or poorly tutorialized, with specific suggestions for improvements.</Text>
      <Text style={styles.bullet}>• Collaborated with the development team through regular communication to verify bug fixes across builds, retest problem areas after patches, and confirm that solutions didn't introduce new issues or regressions.</Text>
      <Text style={styles.bullet}>• Participated in playtesting sessions providing real-time feedback during gameplay, helping developers understand player thought processes and decision-making patterns that weren't apparent from bug reports alone.</Text>
      <Text style={styles.bullet}>• Maintained professional communication standards throughout the contract despite working remotely across different time zones, meeting all deadlines and delivering quality testing results that contributed to successful game launch.</Text>

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

export default Cv;