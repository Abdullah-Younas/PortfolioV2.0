import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const About = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>Abdullah – aka Malik Muhammad Abdullah Younas</Text>
      <Text style={styles.author}>Full Stack Developer | Game Developer | Software Engineer</Text>

      <Text style={styles.subtitle}>About Me</Text>
      <Text style={styles.text}>
        Just a tired coder who has spent more hours staring at error messages than sleeping. Talks to laptop more than people because the laptop actually listens and responds with predictable behavior, mostly. Builds weird stuff that sometimes works on the first try but usually takes five refactors and a complete rewrite. Made a chat app that people actually use, which is ironic because I prefer debugging in silence over small talk. Doesn't chat much in real life, but will spend three hours explaining why a particular algorithm is inefficient. Fixes bugs that I probably created in the first place. Tries to level up skills constantly because the tech world moves too fast to stay comfortable.
      </Text>
      <Text style={styles.text}>
        Hi, I'm Abdullah, a 19-year-old Computer Science student from Islamabad, Pakistan, currently studying at Iqra University. Solo developer working with multiple engines and frameworks, switching between Unreal Engine blueprints, React components, Firebase configurations, and C++ headers depending on what the project demands. Been building interactive worlds and web apps since I was 10 years old, starting with simple HTML pages and basic game mods, then gradually moving into more complex systems. Got seriously focused on game development in Unreal Engine and web development with React and Firebase around the age of 17, when I realized I could actually turn ideas into playable experiences and functional applications. Always pushing boundaries and experimenting with mechanics, visuals, and systems to see what works, what breaks, and what can be improved.
      </Text>
      <Text style={styles.text}>
        I enjoy creating everything from quirky prototypes that exist just to test a single mechanic to fully functional apps that solve real problems or entertain real users. Whether it's building a new game mechanic that makes movement feel satisfying, optimizing a UI to reduce load times and improve responsiveness, or exploring new technologies like modern OpenGL rendering pipelines or Firebase real-time databases, I dive in headfirst without waiting for permission or perfect conditions. When I'm not actively coding, I'm planning my next project in a notebook or a text file, tweaking mechanics in my head, testing gameplay loops mentally before implementing them, or researching how other developers solved similar problems.
      </Text>
      <Text style={styles.text}>
        My workflow usually involves rapid prototyping, frequent testing, and iterative refinement. I believe in shipping functional versions quickly and improving them based on actual usage rather than trying to perfect everything before release. This approach has taught me more about real-world development than any tutorial ever could. I've learned that users will always find the one edge case you didn't consider, that performance matters more than visual flair in most cases, and that good documentation is the difference between a tool people use and a tool people abandon.
      </Text>
      <Text style={styles.text}>
        Most of my projects start as personal challenges or solutions to problems I've encountered. Smochat exists because I wanted a faster way to communicate with classmates without dealing with bloated messaging apps. Sencdec was born from needing to share encrypted files securely. Haze came from wanting to make a game that felt genuinely tense without relying on jump scares or complex mechanics. Each project teaches me something new, whether it's a better way to structure Firebase queries, a more efficient rendering technique, or just a deeper understanding of what makes software feel good to use.
      </Text>
      <Text style={styles.text}>
        I don't limit myself to one technology stack or domain. I've worked on everything from C++ graphics engines to React web apps, from Unreal Engine first-person shooters to Godot strategy games, from Chrome extensions to Python desktop applications. This broad experience helps me choose the right tool for each job rather than forcing every problem into the same solution. It also means I'm constantly context-switching between different programming paradigms, which keeps things interesting and prevents burnout from doing the same thing repeatedly.
      </Text>
      <Text style={styles.text}>
        Looking forward, I want to keep building things that matter to me and hopefully to others as well. I'm particularly interested in exploring more advanced graphics programming, deeper game AI systems, and better ways to handle real-time collaboration in web applications. I also want to contribute more to open source projects and share what I've learned with other developers who are just starting their journey.
      </Text>
    </Page>
  </Document>
);

export default About;