import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Whispern = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>WHISPERN</Text>
      <Text style={styles.author}>React & Firebase Notes Platform</Text>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        WHISPERN is a platform designed to let users write freely, share openly,
        and control their identity. Users can post short notes privately or
        publicly, choose to remain anonymous, or display their name. Dedicated
        notes allow for personal messages to friends, strangers, or the world.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        Built with React for a responsive frontend and Firebase for backend
        services, WHISPERN handles real-time note storage, user authentication,
        and anonymous submissions. The system is lightweight, designed for
        fast interactions and easy browsing without requiring login for public
        notes.
      </Text>

      <Text style={styles.subtitle}>
        Core Features
      </Text>

      <Text style={styles.text}>
        • Publish Short Notes — Users can write messages under 100 words quickly
        and efficiently.  
        • Anonymous or Named Posting — Users choose whether to display their
        identity or stay hidden.  
        • Dedicate Notes — Notes can be sent to specific individuals or the
        entire platform.  
        • Post Quota System — Users receive 3 free notes; watching a short
        ad unlocks additional posts.  
        • Browse Public Notes — Users can read all public notes without signing
        in, ensuring easy access to content.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy
      </Text>

      <Text style={styles.text}>
        WHISPERN emphasizes openness and expression while preserving user
        privacy. Every note is intended to give a voice to its author, whether
        shared anonymously or openly, fostering a platform for honest, concise,
        and meaningful communication.
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

export default Whispern;
