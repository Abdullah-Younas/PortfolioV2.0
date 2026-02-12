import React from 'react';
import { Document, Page, Text, Link } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const Turfist = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>Turfist Prototype</Text>
      <Text style={styles.author}>Unreal Engine — Physics Arcade Prototype</Text>
      <Link src="https://smokashi.itch.io/turfist" style={styles.projectLink}>View Project →</Link>

      <Text style={styles.subtitle}>
        Concept
      </Text>

      <Text style={styles.text}>
        Turfrist began as a deliberately absurd idea: what if a lawnmower
        handled like a drift racer? The result is a fast-paced, physics-based
        arcade prototype where mowing grass is just as important as maintaining
        momentum.
      </Text>

      <Text style={styles.text}>
        The project embraces simplicity and humor while focusing on tight
        vehicle physics. It combines exaggerated drifting mechanics with
        garden-scale environments to create something unexpected yet instantly
        readable.
      </Text>

      <Text style={styles.subtitle}>
        Core Gameplay
      </Text>

      <Text style={styles.text}>
        Players control a high-powered lawnmower across compact garden courses.
        The goal is simple: mow grass efficiently, drift aggressively, and
        avoid crashing into obstacles. Precision and control are rewarded,
        while careless driving quickly ends a run.
      </Text>

      <Text style={styles.text}>
        Drifting is a core mechanic rather than a bonus. Mastering controlled
        slides is essential for navigating tight corners and maintaining speed
        while covering as much grass as possible.
      </Text>

      <Text style={styles.subtitle}>
        Mechanics & Systems
      </Text>

      <Text style={styles.text}>
        Turfrist features a fuel management system that limits how long players
        can stay on the course. Running out of energy results in immediate
        failure, encouraging efficient routes and clean driving.
      </Text>

      <Text style={styles.text}>
        The environments function as obstacle courses, filled with garden
        objects that punish reckless movement. Collisions break flow and
        reinforce the importance of precision drifting.
      </Text>

      <Text style={styles.subtitle}>
        Development & Engine
      </Text>

      <Text style={styles.text}>
        The prototype was developed in Unreal Engine, taking advantage of its
        physics system to quickly iterate on vehicle handling and arcade-style
        movement. The focus was on feel and responsiveness rather than visual
        polish.
      </Text>

      <Text style={styles.text}>
        Turfrist serves as an experimental foundation, proving that exaggerated
        physics and unconventional themes can coexist in a tight arcade
        experience.
      </Text>

      <Text style={styles.subtitle}>
        Future Direction
      </Text>

      <Text style={styles.text}>
        Planned features include refined arcade drift mechanics, expanded
        courses, and deeper scoring systems built around speed, control, and
        mowing efficiency.
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

export default Turfist;