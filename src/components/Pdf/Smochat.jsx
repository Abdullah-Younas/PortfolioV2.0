import React from 'react';
import { Document, Page, Text, Link } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Smochat = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Smochat</Text>
      <Text style={styles.author}>React & Firebase Real-Time Group Chat App</Text>
      <Link src="https://smochat.pages.dev/" style={styles.projectLink}>View Project →</Link>

      <Text style={styles.subtitle}>
        Project Overview
      </Text>

      <Text style={styles.text}>
        Smochat is a real-time group chat application designed for seamless communication without the bloat of mainstream messaging platforms. The entire concept emerged from frustration with existing chat apps that were either too slow, too complicated, or too invasive with permissions and data collection. Users can create or join chat groups with minimal friction, exchange messages that sync instantly across all connected devices, and manage group visibility with straightforward controls. Groups can be set to public mode for open communities where anyone can join and participate, or private mode for secure, invitation-only conversations that require explicit access permissions. The platform prioritizes speed and simplicity over feature bloat, focusing on delivering core messaging functionality without unnecessary complications.
      </Text>
      
      <Text style={styles.text}>
        The application was initially built as a prototype to demonstrate real-time messaging capabilities to a client who needed a custom communication solution for their team. What started as a basic proof of concept evolved into a fully functional platform after positive feedback from early testers who appreciated the minimalist approach and reliable performance. The client requested specific features like group management, user authentication through Google accounts for quick onboarding, and the ability to distinguish between public community spaces and private team channels. These requirements shaped the core architecture and feature set that exists today.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        The frontend is built entirely in React.js, chosen specifically for its component-based architecture that makes building interactive interfaces efficient and maintainable. The entire UI is constructed from reusable components that handle everything from message rendering to group creation forms, making future updates and feature additions significantly easier. React's virtual DOM ensures that message updates render efficiently even in active group chats with hundreds of messages, preventing the performance degradation that often plagues real-time applications. The component structure follows a clear hierarchy where container components manage state and logic while presentational components focus purely on rendering, creating clean separation of concerns throughout the codebase.
      </Text>

      <Text style={styles.text}>
        Firebase powers the entire backend infrastructure, providing multiple integrated services that work together seamlessly. The Firebase Realtime Database handles all message storage and synchronization, using WebSocket connections to push updates to all connected clients the instant a message is sent. This eliminates the need for polling or manual refresh actions, creating a truly real-time experience where messages appear instantly across all devices. Firebase Authentication manages user accounts through Google sign-in, removing the need to build and maintain a separate authentication system while providing reliable security and session management. Cloud Firestore stores group metadata, membership information, and configuration settings, offering more complex querying capabilities than the Realtime Database for structured data that doesn't require millisecond-level synchronization.
      </Text>

      <Text style={styles.text}>
        The integration between these Firebase services is handled through custom hooks and context providers in React, centralizing authentication state and database connections so individual components can access them without prop drilling or complex state management. Error handling is implemented at multiple levels, with retry logic for failed database writes and graceful degradation when network connectivity is poor. The application uses Firebase security rules to enforce access control at the database level, ensuring that even if the frontend were compromised, users could only access groups they're authorized to view.
      </Text>

      <Text style={styles.text}>
        Development workflow involved frequent testing with real users from the beginning, deploying updates multiple times per week based on feedback and bug reports. This rapid iteration cycle helped identify performance bottlenecks, usability issues, and feature gaps early in development. The codebase is structured to support quick changes, with clear documentation in critical sections and consistent naming conventions throughout. Configuration is managed through environment variables, making it easy to switch between development and production Firebase projects without code changes.
      </Text>

      <Text style={styles.subtitle}>
        Core Features
      </Text>

      <Text style={styles.text}>
        Real-Time Messaging forms the heart of the platform, with messages appearing instantly across all clients without any noticeable delay. This is achieved through Firebase's WebSocket-based synchronization, which maintains persistent connections and pushes updates the moment they occur. Messages are stored with timestamps, sender information, and read receipts, allowing users to track conversation history and see who has viewed their messages. The message rendering system is optimized to handle large conversations efficiently, implementing virtual scrolling that only renders visible messages to maintain performance even in groups with thousands of messages.
      </Text>

      <Text style={styles.text}>
        Public and Private Groups give users complete control over who can access their conversations. Public groups appear in a searchable directory where anyone can discover and join them without requiring approval, making them ideal for open communities, study groups, or general interest discussions. Private groups require invitation links or direct membership grants from existing group members, ensuring that sensitive conversations remain secure and limited to intended participants. Group creators have administrative privileges including the ability to remove members, delete messages, and modify group settings. The distinction between public and private is enforced at both the UI level and through Firebase security rules, preventing unauthorized access even if someone tries to bypass the frontend.
      </Text>

      <Text style={styles.text}>
        Group Management provides full control over membership, visibility settings, and messaging permissions. Group creators can designate additional administrators, transfer ownership, or delete the entire group if needed. Member lists show online status indicators, allowing users to see who's currently active in the conversation. Groups can be archived to hide them from the main list without deleting them permanently, useful for seasonal projects or temporary teams. The management interface is designed to be intuitive, with all common actions accessible within two clicks and dangerous actions like member removal requiring confirmation to prevent accidents.
      </Text>

      <Text style={styles.text}>
        User-Friendly Interface prioritizes clarity and ease of use over visual complexity. The layout follows familiar messaging app conventions, with a sidebar for group navigation, a main message area, and a persistent input field at the bottom. Messages are clearly attributed to senders with profile pictures and names, making it easy to follow conversations even in active groups. Visual feedback confirms every action, whether sending a message, creating a group, or updating settings. The interface responds immediately to user input, with optimistic updates that show actions taking effect before server confirmation arrives, creating a snappy feel even on slower connections.
      </Text>

      <Text style={styles.text}>
        Mobile Responsive design ensures the application works smoothly on phones, tablets, and desktop computers without requiring separate codebases or platform-specific versions. The layout adapts intelligently based on screen size, collapsing the sidebar into a menu on small screens, adjusting font sizes for readability, and optimizing touch targets for finger input. Testing was performed across multiple devices and browsers to ensure consistent behavior regardless of platform. The responsive design isn't just about fitting content into different screen sizes but about adapting the entire interaction model to suit how people actually use devices of different sizes.
      </Text>

      <Text style={styles.text}>
        Client-Custom Prototype features were implemented based on direct client requests, emphasizing professional usability and accessibility standards. The client needed specific functionality like message search, file attachment support, and notification controls, all of which were integrated while maintaining the application's core simplicity. Accessibility features include keyboard navigation support, screen reader compatibility, and high contrast mode for visually impaired users. The customization process involved regular meetings with the client to demonstrate progress, gather feedback, and adjust priorities based on their evolving needs.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy
      </Text>

      <Text style={styles.text}>
        Smochat focuses on speed, reliability, and simplicity above all else. The philosophy is that messaging should be instant, obvious, and unobtrusive. Every aspect of the platform is optimized to make real-time group communication effortless, whether for casual communities coordinating social events or professional teams collaborating on projects. Features are added only when they serve the core purpose of facilitating better communication, not because they're trendy or because competitors have them. This disciplined approach to feature development keeps the codebase maintainable and the user experience focused.
      </Text>

      <Text style={styles.text}>
        The design emphasizes getting out of the user's way. There are no elaborate onboarding flows, no forced tutorials, and no artificial limitations on how people can use the platform. Users who want to dive straight into messaging can do so within seconds of signing in, while users who want to explore advanced features can discover them organically through use. This balance between immediate usability and progressive disclosure of advanced functionality is maintained throughout the application.
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