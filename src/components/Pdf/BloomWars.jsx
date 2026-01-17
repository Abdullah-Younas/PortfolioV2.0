import React from 'react';
import { Document, Page, Text, Image } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const BloomWars = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Bloom Wars</Text>
      <Text style={styles.author}>A Godot Game Jam Project</Text>

      <Text style={styles.subtitle}>
        Concept & Origin
      </Text>

      <Text style={styles.text}>
        Bloom Wars began with a simple idea during a game jam: what if growth
        itself was violent? Instead of peaceful flowers spreading across land,
        this world treats every seed as a weapon. To exist is to conquer, and
        to stop growing is to disappear.
      </Text>

      <Text style={styles.text}>
        The initial inspiration came from a mobile territory-expansion game.
        Rather than copying it, the core mechanics were stripped down and
        rebuilt from scratch into a custom system designed specifically for
        the constraints of the game jam.
      </Text>

      <Text style={styles.subtitle}>
        Development & Engine
      </Text>

      <Text style={styles.text}>
        Bloom Wars was developed using the Godot engine, chosen for its fast
        iteration cycle and strong 2D support. The short time limit meant the
        focus stayed entirely on gameplay clarity, responsiveness, and strong
        mechanical feedback rather than visual complexity.
      </Text>

      <Text style={styles.text}>
        Every system in the game reinforces a single rule: expand or be erased.
        There are no safety nets, no recovery mechanics, and no mercy systems.
        Once a seed is destroyed, it is gone forever.
      </Text>

      <Text style={styles.subtitle}>
        Core Mechanics
      </Text>

      <Text style={styles.text}>
        Players begin by clicking on empty ground to plant a seed. Each click
        causes the seed to grow, and after five growth actions, it splits into
        multiple new seeds around it. These splits are the primary way to
        spread across the map and claim territory.
      </Text>

      <Text style={styles.text}>
        Enemy seeds can only be destroyed by fully surrounding them. Once
        trapped, they are eliminated instantly with no chance of recovery.
        This creates constant pressure to keep expanding while defending
        vulnerable positions.
      </Text>

      <Text style={styles.text}>
        The goal is intentionally simple: conquer all available land, crush
        every opposing bloom, and remain the last plant standing. Hesitation
        is punished, and stalling almost always leads to defeat.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy
      </Text>

      <Text style={styles.text}>
        Bloom Wars is designed to feel ruthless. Growth leads to conflict, and
        conflict accelerates growth. Every click matters, and every expansion
        risks total collapse if handled poorly.
      </Text>

      <Text style={styles.text}>
        In this world, plants do not coexist. They dominate, or they vanish
        without leaving any sign they ever existed.
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

export default BloomWars;