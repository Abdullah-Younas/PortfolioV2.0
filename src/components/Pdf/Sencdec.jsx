import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Sencdec = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Sencdec</Text>
      <Text style={styles.author}>React & Firebase Encryption Tool</Text>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        Sencdec is a multi-format encryption and decryption software designed
        to securely protect and unlock data across various formats—from
        simple text to complex media files. The project was created to explore
        secure client-side cryptography while leveraging Firebase for real-time
        data handling.
      </Text>

      <Text style={styles.text}>
        The main goal was to ensure that sensitive data never exists in a raw
        form on the backend. Firebase acts only as a transport and storage
        medium for encrypted payloads, while decryption is strictly handled
        on the client-side.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        The frontend is built entirely in React.js, providing a responsive,
        modular interface. Real-time updates, live encryption previews, and
        interactive file handling were implemented to maintain user engagement
        without sacrificing security.
      </Text>

      <Text style={styles.text}>
        Firebase handles optional user authentication, real-time database
        integration, and dynamic session management. However, all encryption
        is performed before any data leaves the client, so the backend never
        has access to unencrypted content.
      </Text>

      <Text style={styles.subtitle}>
        Encryption Logic
      </Text>

      <Text style={styles.text}>
        Each encryption operation generates a unique, randomized key hidden
        from the user and the database. Decryption is only possible with the
        corresponding session key, ensuring that each operation remains
        secure and ephemeral.
      </Text>

      <Text style={styles.text}>
        The software supports multiple file types, automatically detecting
        formats and applying the appropriate encryption/decryption logic.
        Supported formats include text files, PDFs, Word documents, images,
        audio, and video files.
      </Text>

      <Text style={styles.subtitle}>
        Key Features
      </Text>

      <Text style={styles.text}>
        • Live Text Encryption — Encrypt and decrypt text in real-time directly
        in the browser.  
        • Text Files (.txt) — Upload and secure text documents.  
        • Documents (.doc/.docx/.pdf) — Format-aware client-side encryption.  
        • Images — Encrypt images with a built-in secure viewer.  
        • Audio & Video — Protect media files from tampering and unauthorized access.  
        • Hidden Encryption Keys — Each session generates keys that are never exposed.
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

export default Sencdec;
