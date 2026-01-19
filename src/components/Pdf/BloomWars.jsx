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
        Bloom Wars began with a simple idea during a game jam: what if growth itself was violent and territorial rather than peaceful and cooperative? Instead of peaceful flowers spreading harmoniously across land in a gentle botanical expansion, this world treats every seed as a weapon of conquest and every bloom as a soldier in an endless war for space. To exist is to conquer territory from others, and to stop growing is to disappear entirely without leaving any trace. The concept inverts the usual associations with plant growth, turning something normally considered beautiful and life-giving into something aggressive and existentially threatening.
      </Text>

      <Text style={styles.text}>
        The initial inspiration came from a mobile territory-expansion game that used similar spreading mechanics but wrapped them in a casual, relaxed presentation. Rather than copying that game's approach, the core mechanics were stripped down to their essential elements and rebuilt from scratch into a custom system designed specifically for the constraints and time limitations of the game jam. This process of deconstructing existing mechanics and reconstructing them with a different thematic lens became the central development philosophy. Every design decision reinforced the idea that growth equals conflict, that expansion requires destruction, and that survival demands constant aggression.
      </Text>

      <Text style={styles.text}>
        The game jam theme and time restrictions shaped the final design significantly. With only 48 hours to build a complete playable game from scratch, ambitions had to be ruthlessly prioritized. Complex systems like resource management, unit variety, or progression mechanics were abandoned in favor of perfecting a single core loop that felt satisfying and strategic. The decision to focus entirely on the spreading mechanic meant that mechanic had to be absolutely solid, with tight feedback, clear consequences, and enough depth to sustain player interest across multiple matches without becoming repetitive.
      </Text>

      <Text style={styles.subtitle}>
        Development & Engine
      </Text>

      <Text style={styles.text}>
        Bloom Wars was developed using the Godot engine, chosen specifically for its fast iteration cycle that allows rapid prototyping and testing without lengthy compilation times. Godot's integrated scene system and node-based architecture made it possible to build, test, and refine mechanics quickly, essential when working under extreme time pressure. The engine's strong 2D support provided all the necessary tools for grid-based gameplay, sprite rendering, and click detection without requiring external libraries or complex setup. GDScript's Python-like syntax allowed for quick implementation of game logic without the ceremony and boilerplate of more verbose languages.
      </Text>

      <Text style={styles.text}>
        The short time limit meant the focus stayed entirely on gameplay clarity, responsiveness, and strong mechanical feedback rather than visual complexity or elaborate presentation. Every minute spent on visuals or audio was a minute not spent refining the core mechanics, so aesthetic decisions were made quickly and decisively. The art style settled on simple geometric shapes with clear color coding that made game state instantly readable at a glance. Enemy seeds were colored differently from player seeds, making territorial control obvious without requiring UI overlays or explicit indicators.
      </Text>

      <Text style={styles.text}>
        Development followed an extremely compressed schedule. The first six hours were spent prototyping the core planting and growing mechanic, testing whether the basic interaction felt good before investing more time. Once the foundation worked, the next twelve hours added enemy AI, splitting mechanics, and win conditions. The remaining time went to polish, bug fixing, and balancing difficulty curves. This aggressive timeline meant cutting features ruthlessly whenever they didn't directly serve the core experience. Several planned features like different seed types, special abilities, and environmental hazards were prototyped but ultimately removed because they diluted the purity of the central mechanic.
      </Text>

      <Text style={styles.text}>
        Testing happened continuously throughout development, with playable builds exported every few hours to verify that changes improved rather than degraded the experience. Feedback from other jam participants helped identify confusing elements and balance issues that might have gone unnoticed working alone. The rapid feedback loop of implement, test, refine became the rhythm of the entire development process, enabled entirely by Godot's fast workflow and immediate testing capabilities.
      </Text>

      <Text style={styles.subtitle}>
        Core Mechanics
      </Text>

      <Text style={styles.text}>
        Every system in the game reinforces a single rule: expand or be erased from existence. There are no safety nets, no recovery mechanics, no comeback mechanisms, and no mercy systems that give losing players advantages. Once a seed is destroyed through encirclement, it is gone forever and cannot be recovered, rebuilt, or resurrected. This permanent loss creates real stakes for every decision and forces players to think carefully about expansion patterns and defensive positioning. The lack of recovery mechanics means mistakes compound rather than self-correct, rewarding skilled play and punishing carelessness consistently.
      </Text>

      <Text style={styles.text}>
        Players begin each match by clicking on empty ground to plant their first seed in a strategic location. Each subsequent click on that seed causes it to grow incrementally, progressing through visible growth stages that provide clear feedback about how close the seed is to splitting. After accumulating five growth actions through repeated clicks, the seed reaches maturity and splits into multiple new seeds that appear in a circle around the original position. These splits are the primary way to spread across the map and claim territory, creating a branching network of seeds that can expand in multiple directions simultaneously. The splitting pattern is consistent and predictable, allowing players to plan expansion paths several moves ahead.
      </Text>

      <Text style={styles.text}>
        The growth system creates interesting strategic decisions about resource allocation. Players must choose which seeds to invest clicks in, balancing between strengthening established positions and pioneering into new territory. Growing seeds near the front line creates more offensive pressure but risks losing invested clicks if those seeds get surrounded before splitting. Growing seeds in safe rear positions is more conservative but slows territorial expansion. This constant tension between aggressive expansion and defensive consolidation drives moment-to-moment decision making throughout matches.
      </Text>

      <Text style={styles.text}>
        Enemy seeds operate under identical rules, growing and splitting according to the same mechanics that govern player seeds. This symmetry means understanding your own capabilities automatically teaches you enemy capabilities, reducing the learning burden and making AI behavior predictable enough to counter. Enemy AI prioritizes expansion toward the player while defending vulnerable positions, creating behavior that feels intentional and strategic without requiring complex decision trees or machine learning. The AI difficulty can be adjusted by changing how quickly enemies accumulate growth actions, providing a simple but effective scaling mechanism.
      </Text>

      <Text style={styles.text}>
        Enemy seeds can only be destroyed by fully surrounding them with player seeds on all adjacent tiles, leaving no escape routes or empty spaces. Once completely trapped, surrounded seeds are eliminated instantly with a visual effect that makes the destruction satisfying and unambiguous. There's no health system, no damage values, and no gradual attrition. Seeds are either alive and functional or destroyed and gone. This binary state makes game state easy to evaluate at a glance without studying numbers or indicators. The surrounding mechanic creates constant pressure to keep expanding while defending vulnerable positions, since seeds that become isolated from the main network are easy targets for encirclement.
      </Text>

      <Text style={styles.text}>
        The goal is intentionally simple and immediately understandable: conquer all available land, crush every opposing bloom, and remain the last plant standing on the map. Victory conditions are binary. Either you've eliminated all enemy seeds or they've eliminated yours. Partial victories, draws, or negotiated settlements don't exist in this world. This clarity of purpose keeps matches focused and eliminates ambiguity about whether you're winning or losing. Hesitation is punished harshly because time spent not growing is time the enemy spends expanding, and stalling almost always leads to defeat as opponents build insurmountable territorial advantages.
      </Text>

      <Text style={styles.text}>
        Map topology creates natural chokepoints, open territories, and defensive positions that shape strategic options. Some maps feature central high-ground positions that are valuable but hard to hold, while others have multiple expansion routes that force players to divide attention between fronts. The terrain doesn't include obstacles or impassable areas, keeping focus entirely on the spreading mechanic rather than navigation puzzles, but the layout of empty space versus starting positions creates enough variety to make each match feel distinct.
      </Text>

      <Text style={styles.subtitle}>
        Design Philosophy
      </Text>

      <Text style={styles.text}>
        Bloom Wars is designed to feel ruthless and uncompromising from the first moment of play. Growth leads inevitably to conflict because space is limited and two seeds cannot occupy the same tile. Conflict accelerates growth because destroying enemy seeds opens new territory for expansion while denying resources to opponents. This feedback loop creates escalating tension throughout matches, starting slow and methodical but becoming frantic and desperate as territory fills and options narrow. Every click matters because clicks are the only resource in the game, and every expansion decision risks total collapse if handled poorly through overextension or poor positioning.
      </Text>

      <Text style={styles.text}>
        The design philosophy rejects complexity in favor of depth emerging from simple rules applied consistently. Rather than adding new mechanics, unit types, or special abilities to create variety, the game relies entirely on emergent complexity from the interaction between spreading patterns, territory control, and encirclement mechanics. This minimalist approach meant that every element had to justify its existence by directly contributing to the core experience. Anything that didn't make spreading and conquering more interesting was removed, even if it was functional and technically impressive.
      </Text>

      <Text style={styles.text}>
        Feedback systems were designed to make consequences immediately obvious without requiring explanation or tutorial. Seeds change color when growing, split with clear visual effects, and disappear dramatically when destroyed. Territory control is visible at a glance through color coding, and win conditions trigger unmistakably when achieved. This visual clarity allows players to understand what's happening even when watching someone else play, making the game naturally suited to streaming or sharing gameplay clips.
      </Text>

      <Text style={styles.text}>
        In this world, plants do not coexist peacefully or find ecological balance. They dominate through aggressive expansion, or they vanish completely without leaving any sign they ever existed. Defeated seeds don't leave corpses, scorched earth, or memorial markers. The tile they occupied simply becomes empty ground again, available for the victor to claim. This erasure reinforces the stakes of each conflict and the permanence of defeat. There's no rebuilding after setbacks, no recovery phase where you regroup and try again. Every match is a single continuous push toward total victory or complete elimination.
      </Text>

      <Text style={styles.text}>
        The game doesn't apologize for its difficulty or provide difficulty options that make victory easier. Players who struggle are expected to improve through repeated attempts, learning better expansion patterns, more efficient click allocation, and smarter defensive positioning. This old-school approach to difficulty respects players enough to let them fail repeatedly without hand-holding or artificial assistance. Success feels earned because it requires genuine skill development rather than just persistence or luck.
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