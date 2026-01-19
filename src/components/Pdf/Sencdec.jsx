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
        Sencdec is a comprehensive multi-format encryption and decryption software platform designed to securely protect and unlock sensitive data across various file formats and content types, ranging from simple plain text messages to complex media files including documents, images, audio, and video. The entire project was created specifically to explore the implementation of secure client-side cryptography while leveraging Firebase's real-time capabilities for data handling and synchronization, without compromising the fundamental security principle that encryption must happen on the client side before data ever leaves the user's device.
      </Text>

      <Text style={styles.text}>
        The main architectural goal was to ensure that sensitive data never exists in a raw, unencrypted form anywhere on the backend infrastructure or during transmission between client and server. Firebase acts purely as a transport mechanism and storage medium for encrypted payloads that are meaningless without the corresponding decryption keys, while all actual encryption and decryption operations are handled strictly on the client-side using JavaScript cryptography libraries that run entirely in the user's browser. This approach eliminates the need to trust the backend with sensitive data, reduces liability concerns around data breaches, and gives users complete control over their encrypted information.
      </Text>

      <Text style={styles.text}>
        The project emerged from a personal need to share encrypted files securely with classmates and friends without relying on third-party encryption services that might compromise privacy, charge fees, or impose file size restrictions. Existing solutions either required installing desktop software, were limited to specific file types, or sent data through servers controlled by unknown entities. Sencdec addresses these limitations by providing a web-based solution that works across all platforms, supports multiple file formats, and keeps encryption entirely under user control through client-side processing.
      </Text>

      <Text style={styles.text}>
        Development priorities focused on making encryption accessible to non-technical users who need security but don't understand cryptographic concepts. The interface hides complex details behind simple actions like uploading files and clicking encrypt or decrypt buttons. Error messages explain problems in plain language rather than technical jargon. Progress indicators show what's happening during lengthy encryption operations on large files. This user-friendly approach makes serious security accessible to everyone rather than just experts.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        The frontend is built entirely in React.js, chosen specifically for its component-based architecture that allows building complex interactive interfaces from modular, reusable pieces. The entire user interface is constructed from custom React components that handle everything from file upload and drag-drop interfaces to encryption progress displays and real-time previews of encrypted content. React's state management through hooks enables tracking of encryption operations, file processing status, and user authentication across the entire application without prop drilling or complex state libraries.
      </Text>

      <Text style={styles.text}>
        Real-time updates are implemented throughout the interface to provide constant feedback during encryption and decryption operations that might take several seconds for large files. Progress bars update continuously showing percentage completion, status messages explain what operation is currently executing, and preview panes show encrypted output as it generates. This responsive feedback prevents the interface from feeling frozen during processing and reassures users that operations are proceeding normally.
      </Text>

      <Text style={styles.text}>
        Interactive file handling supports multiple input methods to accommodate different user preferences and workflows. Users can click to select files through traditional file picker dialogs, drag and drop files directly onto designated drop zones for faster interaction, or paste text content directly into text areas for quick message encryption without creating files. The interface validates file types and sizes before allowing upload, preventing wasted time on unsupported formats or files too large to process efficiently.
      </Text>

      <Text style={styles.text}>
        Firebase integration provides optional user authentication through Google sign-in or email/password combinations, real-time database synchronization for encrypted file metadata allowing users to track their encryption history, and dynamic session management that maintains user state across page refreshes and browser sessions. However, the critical distinction is that all encryption happens before any data reaches Firebase, so the backend only ever sees encrypted payloads and never has access to unencrypted content.
      </Text>

      <Text style={styles.text}>
        The separation between encryption logic and data transport is absolute. Files are read in the browser using the File API, encrypted completely on the client using Web Crypto API or compatible libraries, and only then uploaded to Firebase Storage as encrypted blobs. Decryption follows the reverse process: encrypted data downloads from Firebase, decrypts entirely in the browser, and only then becomes available to the user. This ensures zero-knowledge architecture where the backend has no access to plaintext.
      </Text>

      <Text style={styles.text}>
        Security is enforced at multiple levels including client-side encryption before any network transmission, HTTPS for all communication to prevent man-in-the-middle attacks during transport, Firebase security rules preventing unauthorized access to encrypted files, and session-based key management that destroys encryption keys when browser sessions end. These layered protections create defense in depth where multiple independent security measures must all fail before data becomes compromised.
      </Text>

      <Text style={styles.subtitle}>
        Encryption Logic
      </Text>

      <Text style={styles.text}>
        Each encryption operation generates a unique, cryptographically random key that is never exposed to the user interface or stored in any database accessible to the backend. These session keys are generated using secure random number generators built into modern browsers through the Web Crypto API, ensuring sufficient entropy for cryptographic security. The keys are maintained purely in browser memory for the duration of the encryption or decryption operation, then discarded completely once the operation completes or the page unloads.
      </Text>

      <Text style={styles.text}>
        Decryption is only possible with the corresponding session key that was used during encryption, creating a system where encrypted files are completely useless without their associated keys. This ensures that even if encrypted files are intercepted during transmission or stolen from Firebase Storage, they remain protected as long as the encryption keys weren't also compromised. The key derivation process uses industry-standard algorithms resistant to brute force attacks, making it computationally infeasible to decrypt files without the correct key.
      </Text>

      <Text style={styles.text}>
        The encryption implementation uses AES-GCM (Advanced Encryption Standard in Galois/Counter Mode), a modern authenticated encryption algorithm that provides both confidentiality and integrity protection. AES-GCM encrypts data so it cannot be read without the key, and authenticates ciphertext so modifications can be detected, preventing both unauthorized reading and unauthorized tampering. The 256-bit key length provides security margins sufficient for protecting highly sensitive data against attacks by well-resourced adversaries.
      </Text>

      <Text style={styles.text}>
        Key management presents the fundamental challenge in any encryption system: how to securely share keys with intended recipients without making them available to attackers. Sencdec currently uses session-based keys that exist only during active browser sessions, requiring users to manually communicate keys through separate secure channels. This approach prioritizes security over convenience, ensuring keys never enter insecure communication paths even if it makes the user experience somewhat more complex.
      </Text>

      <Text style={styles.text}>
        The software automatically detects file formats during upload and applies appropriate encryption logic based on content type. Text files are encrypted as UTF-8 strings, preserving character encoding across encryption and decryption cycles. Binary files including images, audio, and video are encrypted at the byte level as raw data buffers, ensuring exact reconstruction after decryption without corruption or data loss. Documents like PDFs and Word files are treated as binary blobs, encrypting their entire structured content while preserving internal formatting and metadata.
      </Text>

      <Text style={styles.text}>
        Supported formats include text files in plain text or UTF-8 encoding, PDF documents preserving all formatting and embedded content, Microsoft Word documents in both legacy DOC and modern DOCX formats, images in JPEG, PNG, GIF, WebP and other common formats, audio files in MP3, WAV, OGG and similar codecs, and video files in MP4, WebM, AVI and other container formats. The format detection uses MIME types and file extensions, falling back to content inspection when metadata is unreliable or missing.
      </Text>

      <Text style={styles.subtitle}>
        Key Features
      </Text>

      <Text style={styles.text}>
        Live Text Encryption provides real-time encryption and decryption of text messages directly in the browser without requiring file uploads or downloads. Users simply type or paste text into an input field, click encrypt, and immediately see the encrypted output in a corresponding display area. This instant feedback makes the encryption process transparent and understandable, showing users exactly what encrypted data looks like and how it differs from the original plaintext. The feature is particularly useful for encrypting short messages, passwords, or notes that need quick protection without creating files.
      </Text>

      <Text style={styles.text}>
        The live encryption interface updates in real-time as users type when configured for continuous encryption mode, though this can be disabled for performance when working with very long texts. Decryption works identically in reverse: paste encrypted text, provide the decryption key, and see the original plaintext appear instantly. Copy buttons allow easy transfer of encrypted or decrypted text to clipboard for use in other applications.
      </Text>

      <Text style={styles.text}>
        Text Files encryption extends the live text feature to handle complete text documents uploaded from the filesystem. Users select or drag-drop text files which are read into memory, encrypted with generated keys, and made available for download as encrypted files or stored in Firebase for later retrieval. The encrypted text files maintain the original filename with an added encryption indicator, making it easy to identify encrypted versions of documents.
      </Text>

      <Text style={styles.text}>
        Documents encryption supports format-aware client-side encryption of PDFs, Word documents, and other structured document formats. Unlike simple text files, these formats contain complex internal structures with embedded fonts, images, styling, and metadata that must all be preserved through the encryption and decryption cycle. The encryption process treats the entire document as a binary blob, encrypting all content together to ensure nothing is lost or corrupted during processing.
      </Text>

      <Text style={styles.text}>
        Document decryption reconstructs the original file bit-for-bit, ensuring that PDFs display exactly as they did before encryption, Word documents retain all formatting and embedded objects, and other document formats maintain complete fidelity. This allows secure sharing of complete formatted documents without degradation or compatibility issues that sometimes plague conversion-based encryption solutions.
      </Text>

      <Text style={styles.text}>
        Images encryption protects photographs, screenshots, diagrams, and other visual content through encryption that preserves exact pixel data and color information. The encrypted image data can be stored securely and later decrypted to reconstruct the original image perfectly. A built-in secure viewer allows previewing decrypted images directly in the browser without downloading files to disk, useful when working with sensitive images on shared computers where file traces should be minimized.
      </Text>

      <Text style={styles.text}>
        The image encryption process handles all common image formats including lossy formats like JPEG that use compression and lossless formats like PNG that preserve exact pixel values. Metadata like EXIF information containing camera settings and location data is encrypted along with the image itself, protecting privacy-sensitive information that users might not realize their images contain.
      </Text>

      <Text style={styles.text}>
        Audio and Video encryption extends protection to media files including music, recordings, movies, and screen captures, treating them as large binary blobs that are encrypted and decrypted as complete units. The encryption process preserves exact audio waveforms and video frames, ensuring decoded media plays back identically to the original without quality loss or synchronization problems.
      </Text>

      <Text style={styles.text}>
        Media file encryption can handle very large files through chunked processing that reads and encrypts data in manageable pieces rather than loading entire files into memory. This allows encryption of hour-long videos or extensive audio collections without exhausting browser memory or causing crashes. Progress tracking shows encryption percentage for large files that take significant time to process.
      </Text>

      <Text style={styles.text}>
        Hidden Encryption Keys form the core security model where each encryption session generates keys that are never exposed through the user interface or stored in any accessible form. The keys exist only in browser JavaScript memory during active encryption or decryption operations, maintained as variables in the execution context. When operations complete or pages unload, these keys are discarded and become unrecoverable.
      </Text>

      <Text style={styles.text}>
        This ephemeral key model ensures maximum security by eliminating persistent key storage that could be compromised through database breaches, file system access, or memory dumps. The tradeoff is that users must manually manage and communicate keys through secure external channels if they want to decrypt files later or share encrypted content with others. The documentation clearly explains this responsibility and provides guidance on secure key handling practices.
      </Text>

      <Text style={styles.subtitle}>
        Use Cases and Adoption
      </Text>

      <Text style={styles.text}>
        Sencdec found significant use among students and classmates who needed to share sensitive documents, project files, and personal information securely without trusting third-party services or paying for premium encryption tools. Common scenarios included encrypting exam preparation materials to prevent leaks, protecting personal documents like identification scans or financial records, securing private communications and confidential correspondence, and sharing collaborative project files with encryption to prevent unauthorized access by people outside the team.
      </Text>

      <Text style={styles.text}>
        The peer-to-peer usage model where users encrypt files and manually share keys through separate secure channels proved surprisingly popular despite the inconvenience. Users appreciated having complete control over their encryption and not depending on external services that could shut down, change policies, or experience security breaches. The manual key exchange forced users to think carefully about who should have access to encrypted content, creating better security practices than automatic sharing features that encourage careless distribution.
      </Text>

      <Text style={styles.text}>
        Educational institutions found value in the platform as a teaching tool for demonstrating practical cryptography concepts. Students could experiment with encryption, see how it protects data, understand the importance of key management, and learn that encryption is only as strong as the protection of encryption keys. The visual feedback showing plaintext transforming into ciphertext and back made abstract cryptographic concepts concrete and understandable.
      </Text>

      <Text style={styles.text}>
        Future development plans include adding password-based encryption where users can encrypt files with memorable passwords instead of random keys, implementing secure key exchange protocols that allow sharing encryption keys safely between users, adding file compression before encryption to reduce encrypted file sizes, and supporting batch encryption of multiple files simultaneously. These enhancements would improve usability while maintaining the core security architecture of client-side encryption.
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