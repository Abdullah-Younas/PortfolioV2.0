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
        Haze is a high-speed FPS maze escape game built around a single constraining idea: momentum is everything and hesitation means death. The player can only move forward in whatever direction they're facing and jump to clear obstacles or gaps, with no ability to move backward, sidestep, or slow down deliberately. There is no turning back once you commit to a direction, no strafing to dodge around obstacles, and no gradual deceleration to carefully approach dangerous areas. Once a run begins, the only option is to commit completely to forward motion and push ahead through whatever obstacles appear, trusting reflexes and spatial awareness to navigate successfully.
      </Text>

      <Text style={styles.text}>
        The design intentionally removes traditional FPS movement freedom to create constant tension and force difficult split-second decisions. Players must commit to directions knowing they cannot easily reverse course if they choose wrong. Every second spent hesitating about which path to take is a second spent not making progress toward escape, and in a maze that's actively trying to kill you through environmental hazards and enemy spawns, standing still is not a viable strategy. This removal of safety options creates pressure that traditional maze games don't achieve, where players can always backtrack or carefully explore at their own pace.
      </Text>

      <Text style={styles.text}>
        The concept emerged from frustration with maze games that become boring once you figure out the optimal path, where subsequent runs are just execution rather than genuine challenge. By removing the ability to slow down and carefully navigate, Haze ensures every run requires full attention and sharp reflexes regardless of familiarity with the layout. The forward-only movement creates scenarios where you spot a better path but cannot easily reach it because your momentum carries you past the turn, forcing improvisation and adaptation rather than perfect execution of memorized routes.
      </Text>

      <Text style={styles.text}>
        The game demands fast reflexes for reacting to suddenly appearing obstacles or enemies, sharp timing for jumping across gaps or over barriers at exactly the right moment, and complete trust in forward motion rather than cautious exploration. Players must learn to read the environment while moving at full speed, processing visual information quickly enough to make turn decisions before reaching intersections. This creates a rhythm of constant motion and rapid decision-making that feels closer to racing games than traditional maze exploration.
      </Text>

      <Text style={styles.subtitle}>
        Procedural Maze System
      </Text>

      <Text style={styles.text}>
        One of Haze's defining features is its constantly shifting procedurally generated maze layout that reconstructs itself completely every time the game is played. The layout changes fundamentally with different path arrangements, varying distances between start and exit, unpredictable obstacle placement, and randomized environmental hazards, ensuring that no two runs are ever truly the same. This procedural generation eliminates the possibility of memorizing optimal routes and forces players to navigate based on reading the environment in real-time rather than recalling previous playthroughs.
      </Text>

      <Text style={styles.text}>
        The maze generation algorithm uses a modified recursive backtracker approach that ensures every generated maze has a valid solution path while introducing enough branching and dead ends to create meaningful navigation choices. Generation happens at runtime during the loading screen, constructing the maze grid, carving paths through wall placement, adding dead ends and loops to create complexity, and placing the start and exit points at appropriate distances. The algorithm is tuned to create mazes that feel challenging but not impossible, with enough wrong turns to punish poor decisions but sufficient correct paths that skilled players can find escape routes.
      </Text>

      <Text style={styles.text}>
        Memorization becomes completely useless because the fundamental structure changes every run, not just minor details like obstacle positions or enemy spawn points. Paths that existed in one run might be walls in the next, safe routes could become dead ends, and efficient shortcuts vary between attempts. Adaptation is the only way to survive since relying on remembered patterns from previous runs actively hurts performance when those patterns don't apply to the current layout. This forces genuine problem-solving and navigation skills rather than pattern recognition.
      </Text>

      <Text style={styles.text}>
        This procedural structure turns each escape attempt into a fresh challenge with unique problems to solve, forcing players to react in real time based on what they see rather than relying on learned paths or predetermined strategies. The randomization includes enough variation that dozens of runs can occur without seeing obviously repeated patterns, keeping the experience fresh and preventing the staleness that often affects games with static level design. Players develop general navigation skills and decision-making heuristics rather than memorizing specific routes.
      </Text>

      <Text style={styles.subtitle}>
        Gameplay Mechanics
      </Text>

      <Text style={styles.text}>
        Movement is deliberately minimal and constrained to enforce the core concept: continuous forward motion in the current facing direction and jumping using standard FPS jump mechanics. There's no crouch, no sprint toggle that makes you faster, no lean around corners, and no backpedaling to retreat from danger. The mouse controls looking direction which determines movement direction, creating tight coupling between where you look and where you go. This makes camera control critical since turning your view even slightly changes your trajectory through the maze.
      </Text>

      <Text style={styles.text}>
        Obstacles are strategically placed throughout the maze to test reaction speed, jump timing precision, and spatial awareness under pressure. Low barriers require precisely timed jumps to clear without breaking forward momentum, gaps in the floor demand commitment to jump at the right moment or fall into failure, sharp corners force rapid direction changes that can easily result in wall collisions if handled poorly, and narrow passages test the ability to maintain straight movement without overcorrecting. These obstacles appear suddenly due to the first-person perspective and high movement speed, leaving little time for careful planning.
      </Text>

      <Text style={styles.text}>
        With no ability to slow down or sidestep obstacles, players must read the environment instantly and commit to their decisions without second-guessing. Seeing an obstacle requires immediate evaluation of whether to jump over it, turn to avoid it, or accept collision and adapt to the consequences. Hesitation leads to crashes, overcorrection leads to worse positions, and indecision results in taking damage or losing time. The skill ceiling is high because even knowing the correct response doesn't guarantee successful execution at the speeds required.
      </Text>

      <Text style={styles.text}>
        The only enemies in the game are unpredictable bees that spawn randomly in clusters throughout the maze at varying intervals. Their purpose is not traditional combat requiring aim and weapons, but pure disruption of player flow and focus. Bees block paths by swarming in corridors, forcing risky jumps over swarms or desperate detours through suboptimal routes, breaking player focus at critical navigation moments when full attention is needed for upcoming turns, and creating additional visual noise that makes reading the environment harder. The bees don't have health bars or require shooting, they simply exist as mobile obstacles that must be avoided.
      </Text>

      <Text style={styles.text}>
        Bee spawning is designed to feel unfair in the best way, appearing in locations that disrupt whatever strategy the player was executing. Just found a good rhythm through a series of turns? Bees spawn ahead forcing improvisation. Spotted what looks like the correct path? Bees block it, forcing a choice between risking passage through the swarm or taking a detour. This unpredictability prevents comfortable settling into any single approach and maintains constant tension throughout runs.
      </Text>

      <Text style={styles.subtitle}>
        Goal & Challenge
      </Text>

      <Text style={styles.text}>
        The objective is as simple as maze games get: escape the procedurally generated maze as fast as possible without dying, reaching the exit marker that represents freedom and success. Victory is binary, you either escape or you don't, with no partial credit for getting close or finding most of the correct path. Players are strongly encouraged to record their gameplay sessions and submit their best completion times to the game's Discord community, turning each run into both a personal challenge to beat your own records and a public challenge to compete on leaderboards with other players.
      </Text>

      <Text style={styles.text}>
        The time-based challenge creates additional pressure beyond just reaching the exit alive. It's not enough to eventually find the way out through cautious exploration, optimal times require taking risks on uncertain paths, committing to directions before fully confirming they're correct, and maintaining maximum speed even through dangerous sections. This transforms navigation from a purely spatial puzzle into a speed-running challenge where efficiency matters as much as accuracy.
      </Text>

      <Text style={styles.text}>
        Recording and sharing runs became an unexpected central part of the community experience. Players naturally wanted to prove their times were legitimate, show off particularly clever navigation decisions, or share spectacular failures where everything went wrong. The recordings serve as both verification and entertainment, creating shared experiences where community members can watch each other's attempts, learn new strategies, spot mistakes, and celebrate exceptional runs.
      </Text>

      <Text style={styles.text}>
        Haze is fundamentally about pressure, speed, and maintaining flow state under adverse conditions. Think fast enough to make correct navigation decisions, move faster to complete runs before time pressure becomes overwhelming, and escape before momentum becomes your downfall by carrying you into walls or off ledges. The game respects players who can maintain composure under pressure, read environments at high speeds, and commit to decisions without the luxury of careful consideration.
      </Text>

      <Text style={styles.text}>
        The speedrunning aspect emerged organically from the time-based nature and procedural generation. Since every run is different, comparisons focus on overall time and navigation efficiency rather than perfect execution of specific optimal routes. This creates a different speedrunning culture than games with fixed layouts, where community knowledge centers on general strategies and decision-making principles rather than frame-perfect inputs and memorized sequences.
      </Text>

      <Text style={styles.subtitle}>
        Development Process
      </Text>

      <Text style={styles.text}>
        Haze was developed in Unreal Engine 4 during a game jam with strict time limitations, forcing rapid prototyping and ruthless feature prioritization. The entire project from concept to playable game had to be completed within the jam duration, leaving no time for complex systems or extensive polish. This constraint shaped every design decision, favoring simple implementations that worked reliably over sophisticated systems that might fail under time pressure.
      </Text>

      <Text style={styles.text}>
        The first hours were spent prototyping the core movement restriction to verify it felt interesting rather than just frustrating. Early tests confirmed that forward-only movement created engaging tension when combined with maze navigation, validating the core concept before investing more development time. Once movement felt right, focus shifted to procedural maze generation, implementing the algorithm and tuning parameters until generated mazes consistently provided good challenge without becoming unsolvable.
      </Text>

      <Text style={styles.text}>
        Bee enemies were a late addition when playtesting revealed the maze navigation alone wasn't quite enough to sustain interest across multiple runs. The unpredictable spawning added necessary chaos that prevented runs from becoming too formulaic or predictable. Initial bee implementations used complex AI behaviors, but these were simplified to simple swarming and random positioning when time ran short and the complex behaviors proved unnecessary for the desired disruption effect.
      </Text>

      <Text style={styles.text}>
        Visual design stayed minimal throughout development because time spent on graphics was time not spent refining mechanics. The stark aesthetic with simple geometry and clear color coding emerged from necessity but ended up serving the game well by making navigation cues instantly readable at high speeds. Walls, floors, obstacles, and the exit all use distinct colors that remain recognizable in peripheral vision while moving fast.
      </Text>

      <Text style={styles.text}>
        Post-jam updates addressed obvious bugs and balance issues but largely preserved the original design, resisting feature creep that could dilute the focused experience. The community provided valuable feedback about difficulty spikes, confusing layouts, and bee spawn patterns, leading to subtle tuning but no fundamental redesigns. The game that exists today is fundamentally the same as what emerged from the jam, just more polished and reliable.
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