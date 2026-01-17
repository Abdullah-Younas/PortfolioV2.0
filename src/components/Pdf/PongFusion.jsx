import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const PongFusion = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Pong Fusion</Text>
      <Text style={styles.author}>Java — University First Year Project</Text>

      <Text style={styles.subtitle}>
        Concept & Motivation
      </Text>

      <Text style={styles.text}>
        Pong Fusion was created as a modern reinterpretation of the classic
        Pong arcade game. The goal was to preserve the simplicity and
        competitiveness of the original while enhancing it with modern
        visuals, sound effects, and gameplay mechanics that add depth and
        replayability.
      </Text>

      <Text style={styles.text}>
        Rather than reinventing Pong entirely, the project focuses on
        evolving it—keeping the core paddle-and-ball gameplay intact while
        introducing power-ups that reward timing, strategy, and quick
        decision-making.
      </Text>

      <Text style={styles.subtitle}>
        Development & Technology
      </Text>

      <Text style={styles.text}>
        Pong Fusion was developed in Java as part of a first-year university
        project. The emphasis was placed on clean game logic, responsive
        controls, and real-time interaction between two players sharing the
        same system.
      </Text>

      <Text style={styles.text}>
        This project helped solidify core programming concepts such as game
        loops, collision detection, input handling, and state management,
        while also exploring basic UI design and audio integration.
      </Text>

      <Text style={styles.subtitle}>
        Gameplay Overview
      </Text>

      <Text style={styles.text}>
        Two players control paddles positioned on opposite sides of the
        screen. The objective is to bounce the ball past the opponent’s
        paddle to score points. The first player to reach a predefined,
        customizable score wins the match.
      </Text>

      <Text style={styles.text}>
        What sets Pong Fusion apart is the inclusion of power-ups that can
        drastically change the flow of the game, forcing players to adapt
        rather than rely solely on reflexes.
      </Text>

      <Text style={styles.subtitle}>
        Controls & Power-Ups
      </Text>

      <Text style={styles.text}>
        Each player has independent movement controls and access to three
        unique power-ups. These abilities can be activated when available
        and are designed to introduce unpredictability and tactical
        decision-making during matches.
      </Text>

      <Text style={styles.text}>
        The available power-ups include Speed Burst, which temporarily
        increases paddle movement speed; Slow Ball, which reduces the
        ball’s velocity for a short duration; and Curve Shot, which applies
        a curved trajectory to the ball, making its movement harder to
        anticipate.
      </Text>

      <Text style={styles.subtitle}>
        Features & Design
      </Text>

      <Text style={styles.text}>
        Pong Fusion features a modern user interface with smooth animations,
        retro-inspired fonts, and polished visual effects. Looping background
        music enhances the arcade atmosphere, while responsive controls
        ensure precise and satisfying gameplay.
      </Text>

      <Text style={styles.text}>
        The combination of classic mechanics and modern enhancements makes
        Pong Fusion both familiar and fresh, encouraging competitive play
        and repeated matches.
      </Text>

      <Text style={styles.subtitle}>
        Win Conditions
      </Text>

      <Text style={styles.text}>
        A match continues until one player reaches the target score.
        Victory depends not only on paddle control, but also on smart,
        well-timed use of power-ups that can instantly shift momentum.
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

export default PongFusion;
