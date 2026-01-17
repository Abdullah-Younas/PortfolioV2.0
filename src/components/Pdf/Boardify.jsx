import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Boardify = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Boardify</Text>
      <Text style={styles.author}>React & Firebase Image Sharing Prototype</Text>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        Boardify is a lightweight image-sharing prototype built to quickly
        demonstrate the functionality of a client-facing image platform. Users
        can upload, browse, and search through a collection of images in a
        simple and intuitive interface.
      </Text>

      <Text style={styles.text}>
        Initially developed as a prototype, Boardify focuses on essential
        features: fast image uploading, real-time updates, and profile-based
        content management.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        The frontend was developed in React.js to provide a responsive and
        smooth user experience. Firebase services power the backend:
        Firebase Storage handles image uploads, Firestore stores metadata, and
        Firebase Authentication manages user profiles.
      </Text>

      <Text style={styles.subtitle}>
        Core Features
      </Text>

      <Text style={styles.text}>
        • Image Uploading — Users can add images to the platform, instantly
        visible to all other users.  
        • Search by Exact Name — A built-in search feature allows users to
        find images using exact filenames.  
        • User Image Management — Each user has a profile dashboard to
        manage their uploaded images, including deleting them.  
        • Minimal Prototype — The feature set is intentionally focused for
        quick client demonstration.  
        • Tagging System (Partial) — A tag-based discovery system was
        started but left incomplete due to scope changes.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy
      </Text>

      <Text style={styles.text}>
        Boardify emphasizes simplicity, speed, and real-time interaction. Every
        feature was developed to be immediately understandable, minimizing
        friction for users and allowing them to focus on sharing and
        discovering images.
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

export default Boardify;
