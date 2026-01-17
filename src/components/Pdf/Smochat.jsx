import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Smochat = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Smochat</Text>
      <Text style={styles.author}>React & Firebase Real-Time Group Chat App</Text>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        Smochat is a real-time group chat application designed for seamless
        communication. Users can create or join chat groups, exchange messages
        instantly, and manage group visibility. Groups can be public for open
        communities or private for secure, invitation-only conversations.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        The frontend is built entirely in React.js, providing a responsive and
        interactive interface with reusable components. Firebase powers real-time
        messaging using the Realtime Database, handles authentication, and
        manages group creation and access control.
      </Text>

      <Text style={styles.text}>
        This setup ensures that messages sync instantly across all users without
        needing page refreshes and allows scalable message traffic with reliable
        performance.
      </Text>

      <Text style={styles.subtitle}>
        Core Features
      </Text>

      <Text style={styles.text}>
        • Real-Time Messaging — Messages appear instantly across all clients,
        leveraging Firebase's real-time sync capabilities.  
        • Public & Private Groups — Users can create open communities or secure
        private channels.  
        • Group Management — Full control over group membership, visibility, and
        messaging.  
        • User-Friendly Interface — Clean, intuitive layout for easy navigation
        and engagement.  
        • Mobile Responsive — Fully functional on phones, tablets, and desktops.  
        • Client-Custom Prototype — Features were implemented based on client
        requests, emphasizing professional usability and accessibility.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy
      </Text>

      <Text style={styles.text}>
        Smochat focuses on speed, reliability, and simplicity. Every aspect of the
        platform is optimized to make real-time group communication effortless,
        whether for casual communities or professional collaboration.
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

export default Smochat;
