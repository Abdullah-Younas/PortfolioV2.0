import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts'; // just importing registers the font

const About = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>Abdullah — aka Malik Muhammad Abdullah Younas</Text>
      <Text style={styles.author}>Full Stack Developer | Game Developer | Software Engineer</Text>

      <Text style={styles.subtitle}>About Me</Text>
      <Text style={styles.text}>
        Just a tired coder. Talks to laptop more than people. Builds weird stuff. Made a chat app. Doesn’t chat. Fixes bugs. Tries to level up.
      </Text>
      <Text style={styles.text}>
        Hi, I’m Abdullah, a 19-year-old Computer Science student from Islamabad, Pakistan. Solo developer working with multiple engines and frameworks. Been building interactive worlds and web apps since I was 10, seriously focused on game development in Unreal Engine and web development with React and Firebase since 17. Always pushing boundaries and experimenting with mechanics, visuals, and systems.
      </Text>
      <Text style={styles.text}>
        I enjoy creating everything from quirky prototypes to fully functional apps. Whether it’s building a new game mechanic, optimizing a UI, or exploring new technologies, I dive in headfirst. When I’m not coding, I’m planning my next project, tweaking mechanics, or testing gameplay loops.
      </Text>
    </Page>
  </Document>
);

export default About;
