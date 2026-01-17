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
        Just a coder who loves to build and break things. Can usually be found talking to my laptop
        or debugging code. I make everything from quirky games to useful web apps, and sometimes,
        I create projects just to see if I can. Been at it since I was 10, but really started
        taking things seriously around 17. Now, I'm all about pushing boundaries with game
        development in Unreal Engine and building slick web apps with React and Firebase.
      </Text>
      <Text style={styles.text}>
        Hi, I'm Abdullah a 19-year-old Computer Science student from Pakistan. I'm passionate
        about creating interactive worlds and tools that make life a little more interesting.
        Whether it's developing a new game mechanic or polishing a website feature, I'm always
        eager to dive in and level up my skills.
      </Text>

      <Text style={styles.subtitle}>Experience</Text>
      <Text style={styles.jobTitle}>Frontend Lead Developer – 3DSmileSolution | 2025</Text>
      <Text style={styles.bullet}>• Led front-end development for three projects: two landing pages and one CRM system.</Text>
      <Text style={styles.bullet}>• Designed and implemented responsive, user-focused interfaces with attention to performance and accessibility.</Text>
      <Text style={styles.bullet}>• Translated design and stakeholder requirements into clean, scalable UI components.</Text>
      <Text style={styles.bullet}>• Maintained front-end architecture and code quality, ensuring consistency across projects.</Text>

      <Text style={styles.subtitle}>Projects</Text>
      
      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Smochat  [React, Firebase]</Text>
        <Text style={styles.projectDesc}>Real-time chat application with Google authentication, fast UI, and group management.</Text>
        <Link src="https://smochat.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Whispern  [React, Firebase, Ads]</Text>
        <Text style={styles.projectDesc}>Micro-note platform with anonymous or named posting, dedications, and ad-based post unlocking.</Text>
        <Link src="https://whispern.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Sencdec  [React, Firebase]</Text>
        <Text style={styles.projectDesc}>Multi-format file encryption/decryption tool (text, images, audio, video) with secure key handling.</Text>
        <Link src="https://sencdec.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Boardify  [React, CSS]</Text>
        <Text style={styles.projectDesc}>Image-sharing site with upload, search, and profile-based management.</Text>
        <Link src="https://boardify-n2t.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Keyboard Cowboys  [React, CSS]]</Text>
        <Text style={styles.projectDesc}>Typing speed game where typed words fire bullets, competing on a leaderboard.</Text>
        <Link src="https://keyboard-cowboys.pages.dev/" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Haze  [Unreal Engine 4, Blueprint]</Text>
        <Text style={styles.projectDesc}>FPS maze escape game with forward-only movement and swarming bees for challenge.</Text>
        <Link src="https://smokashi.itch.io/haze" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Wooshy  [Unreal Engine 4, Blueprint]</Text>
        <Text style={styles.projectDesc}>Flying arcade prototype emphasizing fluid momentum and movement mechanics.</Text>
        <Link src="https://smokashi.itch.io/wooshy" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• BloomWars  [Godot]</Text>
        <Text style={styles.projectDesc}>Bloom Wars where flowers fight each other to conquer the land</Text>
        <Link src="https://smokashi.itch.io/bloom-wars" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Pong Fusion  [Java]</Text>
        <Text style={styles.projectDesc}>Pong Fusion is an enhanced, modernized version of the classic Pong arcade game</Text>
        <Link src="https://smokashi.itch.io/pong-fusion" style={styles.projectLink}>View Project →</Link>
      </View>

      <View style={styles.projectItem}>
        <Text style={styles.projectTitle}>• Turfist Prototype  [Unreal Engine, Blueprint]</Text>
        <Text style={styles.projectDesc}>Mow grass. Drift hard. Don't hit stuff.</Text>
        <Link src="https://smokashi.itch.io/turfist" style={styles.projectLink}>View Project →</Link>
      </View>

      <Text style={styles.subtitle}>Skills</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Languages:</Text> Java, JavaScript, C++, Python
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Frameworks/Libraries:</Text> React.js, Node.js, Firebase, Unreal Engine (Blueprints)
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Tools:</Text> Git, GitHub, VS Code, IntelliJ, Unreal Engine, Figma
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Other:</Text> Game Design, UI/UX, REST APIs, Authentication, File I/O, Encryption
      </Text>

      <Text style={styles.subtitle}>Education</Text>
      <Text style={styles.text}>
        BS in Computer Science — Iqra University | 2024–2027
      </Text>

      <Text style={styles.subtitle}>Achievements</Text>
      <Text style={styles.bullet}>• Keyboard Cowboys became a hit among classmates and friends for fast-paced gameplay.</Text>
      <Text style={styles.bullet}>• Smochat widely used by students for casual real-time chat.</Text>
      <Text style={styles.bullet}>• Sencdec ensured secure encryption/decryption of files in school and peer-to-peer usage.</Text>
      <Text style={styles.bullet}>• Led front-end development for multiple projects as Frontend Lead at 3DSmileSolution.</Text>

      <Text style={styles.subtitle}>Freelance Work</Text>
      <Text style={styles.jobTitle}>Game Tester – OpenSeason (Epic Games) | Upwork | 2024</Text>
      <Text style={styles.bullet}>• Tested early builds for bugs, performance issues, and UX.</Text>
      <Text style={styles.bullet}>• Provided detailed feedback to developers on balance, difficulty, and user experience.</Text>
      <Text style={styles.bullet}>• Collaborated with the dev team to verify bug fixes across builds.</Text>

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