import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Haze = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Haze</Text>
      <Text style={styles.author}>An Unreal Engine Game Jam Project</Text>

      <Text style={styles.subtitle}>
        Concept & Vision
      </Text>

      <Text style={styles.text}>
        Haze is a high-speed FPS maze escape game built around a single idea:
        momentum is everything. The player can only move forward and jump.
        There is no turning back, no strafing, and no slowing down. Once a run
        begins, the only option is to commit and push ahead.
      </Text>

      <Text style={styles.text}>
        The design intentionally removes traditional FPS freedom to create
        tension. Every second matters, and hesitation almost always results
        in failure. The game demands fast reflexes, sharp timing, and trust
        in forward motion.
      </Text>

      <Text style={styles.subtitle}>
        Procedural Maze System
      </Text>

      <Text style={styles.text}>
        One of Haze’s defining features is its constantly shifting maze.
        The layout changes every time the game is played, ensuring that
        no two runs are ever the same. Memorization is useless—adaptation
        is the only way to survive.
      </Text>

      <Text style={styles.text}>
        This procedural structure turns each escape attempt into a fresh
        challenge, forcing players to react in real time rather than rely
        on learned paths.
      </Text>

      <Text style={styles.subtitle}>
        Gameplay Mechanics
      </Text>

      <Text style={styles.text}>
        Movement is deliberately minimal: forward motion and jumping.
        Obstacles are placed to test reaction speed, timing, and spatial
        awareness. With no ability to slow down or sidestep, players must
        read the environment instantly and commit to their decisions.
      </Text>

      <Text style={styles.text}>
        The only enemies in the game are unpredictable bees that spawn
        randomly throughout the maze. Their purpose is not combat, but
        disruption—blocking paths, forcing risky jumps, and breaking
        player focus at critical moments.
      </Text>

      <Text style={styles.subtitle}>
        Goal & Challenge
      </Text>

      <Text style={styles.text}>
        The objective is simple: escape the maze as fast as possible.
        Players are encouraged to record their gameplay and submit their
        best times to Discord, turning each run into a personal or public
        challenge.
      </Text>

      <Text style={styles.text}>
        Haze is about pressure, speed, and flow. Think fast, move faster,
        and escape before momentum becomes your downfall.
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

export default Haze;
