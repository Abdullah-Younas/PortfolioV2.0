import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const GENG = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>GENG</Text>
      <Text style={styles.author}>C++ OpenGL Graphics Engine — Work in Progress</Text>

      <Text style={styles.subtitle}>
        Overview
      </Text>

      <Text style={styles.text}>
        GENG is a custom-built graphics engine developed in C++ using modern
        OpenGL. The project serves as a hands-on exploration of real-time
        rendering techniques, lighting models, and scene management, with a
        strong focus on understanding low-level graphics systems rather than
        relying on existing engines.
      </Text>

      <Text style={styles.text}>
        The engine is designed as an experimental sandbox, allowing rapid
        testing of visual features, rendering pipelines, and gameplay-adjacent
        systems such as collisions and basic physics.
      </Text>

      <Text style={styles.subtitle}>
        Rendering Pipeline
      </Text>

      <Text style={styles.text}>
        GENG uses the modern OpenGL core profile (3.3+), with a forward
        rendering pipeline and depth testing enabled by default. The engine
        supports loading and rendering 3D models in OBJ format, along with
        full transformation support including translation, rotation, and
        scaling.
      </Text>

      <Text style={styles.text}>
        Scene objects are structured to allow clean separation between
        geometry, transforms, and rendering state, making experimentation
        with new techniques easier to manage.
      </Text>

      <Text style={styles.subtitle}>
        Lighting System
      </Text>

      <Text style={styles.text}>
        The lighting system includes support for multiple light types.
        Directional lighting allows control over intensity and color, while
        multiple point lights can be placed throughout the scene. A camera-
        attached spotlight is also implemented to simulate flashlight-style
        lighting.
      </Text>

      <Text style={styles.text}>
        These lighting systems are fully adjustable at runtime, enabling
        real-time tuning and visual debugging.
      </Text>

      <Text style={styles.subtitle}>
        Environment Effects
      </Text>

      <Text style={styles.text}>
        GENG features an adjustable fog system, allowing control over fog
        density and color to simulate atmospheric depth. A cubemap-based
        skybox system is also implemented, with the ability to toggle it on
        or off dynamically.
      </Text>

      <Text style={styles.text}>
        These effects help establish spatial scale and visual context within
        scenes while remaining lightweight and configurable.
      </Text>

      <Text style={styles.subtitle}>
        Camera, Input & Debug Tools
      </Text>

      <Text style={styles.text}>
        The engine supports both first-person and orbit camera modes, with
        full keyboard and mouse input handling. This makes it suitable for
        both gameplay testing and cinematic scene inspection.
      </Text>

      <Text style={styles.text}>
        Dear ImGui is integrated as a debug interface, providing real-time
        control over lighting parameters, fog settings, background color,
        and skybox toggling. This significantly improves iteration speed
        during development.
      </Text>

      <Text style={styles.subtitle}>
        Collisions & Physics
      </Text>

      <Text style={styles.text}>
        Basic collision detection and physics systems are currently
        implemented to support player movement and interaction testing.
        These systems form the groundwork for future gameplay mechanics.
      </Text>

      <Text style={styles.subtitle}>
        Technologies Used
      </Text>

      <Text style={styles.text}>
        GENG is built using C++17 and modern OpenGL with GLFW and GLAD.
        GLM is used for mathematical operations, stb_image handles texture
        loading, and Dear ImGui powers the in-engine debug tools.
      </Text>

      <Text style={styles.subtitle}>
        Project Status & Future Work
      </Text>

      <Text style={styles.text}>
        GENG is an ongoing work in progress. Planned additions include
        shadow mapping, post-processing effects, a more advanced material
        system, and FPS-style shooting mechanics built on top of the
        existing engine framework.
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

export default GENG;
