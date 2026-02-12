import React from 'react';
import { Document, Page, Text, Link } from '@react-pdf/renderer';
import { styles } from './Pstyles';
import './Pfonts';

const GENG = () => (
  <Document>
    <Page style={styles.body}>

      <Text style={styles.title}>GENG</Text>
      <Text style={styles.author}>C++ OpenGL Graphics Engine – Work in Progress</Text>
      <Link src="https://x.com/younas34035" style={styles.projectLink}>View Project →</Link>

      <Text style={styles.subtitle}>
        Overview
      </Text>

      <Text style={styles.text}>
        GENG is a custom-built graphics engine developed from scratch in C++ using modern OpenGL APIs to understand how real-time 3D rendering actually works at a fundamental level. The entire project serves as a hands-on exploration of real-time rendering techniques, lighting models, scene management systems, and the mathematics underlying 3D graphics, with a strong focus on understanding low-level graphics systems rather than relying on existing engines that abstract away the underlying complexity. Every line of code was written manually without game engine frameworks or high-level graphics libraries, forcing deep understanding of concepts that are usually hidden behind convenient APIs.
      </Text>

      <Text style={styles.text}>
        The engine is designed primarily as an experimental sandbox environment, allowing rapid testing of visual features, rendering pipeline modifications, and gameplay-adjacent systems such as collision detection and basic physics simulation. Rather than aiming for commercial game development or production-ready tool creation, GENG focuses on learning and experimentation, treating each implemented feature as a lesson in graphics programming fundamentals. This educational focus means the codebase prioritizes clarity and understanding over maximum performance or feature completeness, though performance is still taken seriously to ensure techniques work at interactive framerates.
      </Text>

      <Text style={styles.text}>
        Development follows an incremental approach where each new feature builds on previous work, starting with simple triangle rendering and gradually adding complexity through texture mapping, lighting, transforms, and scene management. This progression mirrors the typical learning path for graphics programming, ensuring fundamentals are solid before adding advanced features. Documentation is maintained throughout development explaining why certain approaches were chosen, what alternatives were considered, and what lessons were learned from implementation challenges.
      </Text>

      <Text style={styles.text}>
        The project has taught valuable lessons about graphics pipeline organization, shader programming, memory management for large datasets, debugging rendering issues without visual debuggers, and performance optimization for real-time constraints. Many techniques that seemed simple in theory revealed unexpected complexity during implementation, particularly around coordinate space transformations, perspective-correct texture mapping, and efficient data upload to GPU memory. These struggles and eventual solutions represent the core educational value of building a graphics engine from scratch.
      </Text>

      <Text style={styles.subtitle}>
        Rendering Pipeline
      </Text>

      <Text style={styles.text}>
        GENG uses the modern OpenGL core profile version 3.3 and above, completely avoiding deprecated fixed-function pipeline features in favor of programmable shaders. This decision ensures the engine uses contemporary graphics techniques that transfer to other APIs like Vulkan or DirectX, even though the learning curve is steeper than using older OpenGL features. The core profile restriction forces proper understanding of vertex and fragment shaders since there's no fallback to fixed-function rendering.
      </Text>

      <Text style={styles.text}>
        The rendering architecture implements a forward rendering pipeline where each object is rendered individually with all lighting calculations performed in the fragment shader during rasterization. Depth testing is enabled by default using standard Z-buffer techniques to ensure proper occlusion handling where closer objects obscure farther ones. The depth buffer is cleared each frame along with the color buffer to prevent artifacts from previous frames. Forward rendering was chosen over deferred rendering for simplicity and because the scene complexity doesn't yet justify the additional complexity of managing multiple render targets.
      </Text>

      <Text style={styles.text}>
        The engine supports loading and rendering 3D models in OBJ format, a simple text-based format that's easy to parse and widely supported by 3D modeling software. The OBJ loader parses vertex positions, texture coordinates, and normals, constructing vertex buffers in the appropriate format for OpenGL consumption. Indexed rendering is used to avoid duplicating shared vertices, reducing memory usage and improving cache coherence. Models can be loaded at runtime from disk, allowing quick iteration without recompiling the engine when testing different assets.
      </Text>

      <Text style={styles.text}>
        Full transformation support includes translation for positioning objects in world space, rotation using quaternions to avoid gimbal lock and enable smooth interpolation, and uniform scaling to adjust object sizes without distortion. The transformation hierarchy uses standard model, view, and projection matrices that are constructed on the CPU and uploaded to shaders as uniform variables. Matrix math is handled through GLM, a header-only mathematics library that provides GLSL-compatible types and functions, ensuring consistency between CPU and GPU calculations.
      </Text>

      <Text style={styles.text}>
        Scene objects are structured to allow clean separation between geometry data, transformation state, and rendering parameters. Each renderable object holds references to its mesh data, material properties, and transform components, enabling independent modification of any aspect without affecting others. This separation makes experimentation easier since lighting parameters can change without reloading geometry, or transforms can update without touching material settings. The object-oriented design uses composition over inheritance, allowing flexible mixing of capabilities.
      </Text>

      <Text style={styles.subtitle}>
        Lighting System
      </Text>

      <Text style={styles.text}>
        The lighting system implements physically-based principles using the Phong reflection model with separate ambient, diffuse, and specular components. While not physically accurate by modern standards, the Phong model provides good visual results with reasonable computational cost and serves as an excellent learning foundation before moving to more complex physically-based rendering techniques. Each light type contributes its ambient, diffuse, and specular terms which are accumulated in the fragment shader to produce the final pixel color.
      </Text>

      <Text style={styles.text}>
        Directional lighting simulates distant light sources like the sun where all light rays are parallel and don't attenuate with distance. The directional light includes controls for intensity that scales the overall brightness contribution, color that tints the light with RGB values, and direction vector that determines which surfaces receive direct illumination. Directional lights provide consistent scene illumination and help establish overall mood and time-of-day feeling.
      </Text>

      <Text style={styles.text}>
        Multiple point lights can be placed throughout the scene to simulate localized light sources like lamps, fires, or magical effects. Point lights emit in all directions from a single position, with intensity falling off based on distance using quadratic attenuation that approximates physical light behavior. Each point light has position in world space, color, intensity, and attenuation coefficients that control how quickly brightness decreases with distance. The fragment shader iterates through all active point lights, calculating their individual contributions to each pixel.
      </Text>

      <Text style={styles.text}>
        A camera-attached spotlight simulates flashlight-style lighting that follows the player's view direction, creating focused illumination in a cone shape. The spotlight uses the camera's position and forward direction vector, with additional parameters for inner and outer cone angles that control the falloff at the edge of the lit area. Spotlight calculation involves computing the angle between the light direction and the vector from the light to the fragment, comparing this against the cone angles to determine intensity. This creates dramatic focused lighting useful for horror games or exploration scenarios.
      </Text>

      <Text style={styles.text}>
        All lighting systems are fully adjustable at runtime through the Dear ImGui debug interface, enabling real-time tuning and visual debugging without recompiling. Parameters like light intensity, color, position, and direction can be modified with sliders and color pickers, with changes reflected immediately in the rendered scene. This immediate feedback dramatically accelerates the lighting design process compared to editing configuration files and relaunching the application.
      </Text>

      <Text style={styles.subtitle}>
        Environment Effects
      </Text>

      <Text style={styles.text}>
        GENG features an adjustable exponential fog system that simulates atmospheric scattering and depth perception through distance-based color blending. Fog density controls how quickly visibility decreases with distance, while fog color determines what color distant objects fade toward, typically matching sky color for natural outdoor scenes or using darker tones for underground or spooky environments. The fog calculation happens in the fragment shader by computing distance from camera to fragment and using that to interpolate between the fragment's lit color and the fog color.
      </Text>

      <Text style={styles.text}>
        Fog implementation uses the standard OpenGL fog equation where fog factor is calculated as an exponential function of distance, providing more natural falloff than linear fog while remaining computationally cheap. The exponential calculation can be adjusted between fog and fog-squared modes, with fog-squared providing denser, more realistic atmospheric effects at the cost of slightly more computation. All fog parameters are exposed through the debug UI for real-time experimentation with different atmospheric effects.
      </Text>

      <Text style={styles.text}>
        A cubemap-based skybox system renders a distant background environment using six texture faces arranged in a cube around the camera. Cubemap textures are loaded from six separate images representing the positive and negative X, Y, and Z directions, stitched together by OpenGL into a seamless environment map. The skybox is rendered with a special shader that samples the cubemap based on view direction, creating the illusion of a distant surrounding environment.
      </Text>

      <Text style={styles.text}>
        Skybox rendering happens first in each frame using a modified projection matrix that removes translation, ensuring the skybox always appears infinitely distant regardless of camera movement. Depth testing is configured so skybox fragments always fail the depth test against scene geometry, preventing the sky from appearing in front of objects. The ability to toggle the skybox on or off dynamically helps evaluate how different background types affect scene perception and mood.
      </Text>

      <Text style={styles.text}>
        These environment effects help establish spatial scale and visual context within scenes while remaining lightweight and configurable. Fog adds depth perception to otherwise flat-looking scenes, making it easier to judge distances and navigate complex environments. The skybox provides visual interest and context that prevents the feeling of being in an empty void, even when the scene contains minimal geometry.
      </Text>

      <Text style={styles.subtitle}>
        Camera, Input & Debug Tools
      </Text>

      <Text style={styles.text}>
        The engine supports both first-person and orbit camera modes with seamless switching between them at runtime. First-person mode uses standard WASD movement controls and mouse look for FPS-style navigation, ideal for exploring scenes from ground level or testing gameplay camera behavior. Orbit mode rotates the camera around a focus point at a fixed distance, useful for inspecting models from all angles or creating cinematic camera movements for screenshots and recordings.
      </Text>

      <Text style={styles.text}>
        Full keyboard and mouse input handling is implemented through GLFW callbacks that capture raw input events and translate them into camera movements and engine commands. Keyboard input uses a state tracking system that remembers which keys are currently pressed, allowing smooth continuous movement without stuttering from repeated key events. Mouse movement is captured as delta values representing how far the cursor moved since the last frame, converted into camera rotation angles with adjustable sensitivity.
      </Text>

      <Text style={styles.text}>
        This dual camera system makes the engine suitable for both gameplay testing where first-person perspective matters and cinematic scene inspection where orbit camera provides better control. The ability to switch modes instantly without restarting helps iterate quickly on both gameplay feel and visual composition. Camera parameters like movement speed, rotation sensitivity, and field of view are all adjustable through the debug interface.
      </Text>

      <Text style={styles.text}>
        Dear ImGui is integrated as the primary debug interface, providing real-time interactive control over every engine parameter without requiring code recompilation. ImGui renders its interface using the same OpenGL context as the main scene but in a separate rendering pass, ensuring debug UI never interferes with scene rendering. The immediate mode GUI paradigm means interface code is simple and declarative, describing what should appear rather than managing complex state machines.
      </Text>

      <Text style={styles.text}>
        The debug interface provides sliders, color pickers, checkboxes, and text inputs for controlling lighting parameters including intensity and color for all light types, fog settings including density and color, background clear color that sets the default scene color, and skybox toggling to enable or disable environment rendering. Advanced panels expose render statistics like frame time, triangle count, and draw call count, helping identify performance bottlenecks.
      </Text>

      <Text style={styles.text}>
        This debug tooling significantly improves iteration speed during development because parameters can be tuned while observing results in real-time rather than guessing values in code, compiling, running, and evaluating results. The immediate visual feedback helps understand how different parameters interact and what ranges produce good results. Debug configurations can be saved and loaded, allowing quick restoration of known-good settings or A/B comparison between different lighting setups.
      </Text>

      <Text style={styles.subtitle}>
        Collisions & Physics
      </Text>

      <Text style={styles.text}>
        Basic collision detection systems are currently implemented to support player movement and interaction testing, providing foundation for future gameplay mechanics. The collision system uses axis-aligned bounding boxes for broad-phase detection, testing whether AABBs overlap before performing more expensive detailed collision checks. This two-phase approach keeps collision detection performant even with many objects in the scene.
      </Text>

      <Text style={styles.text}>
        Physics simulation includes basic gravity, velocity, and acceleration for dynamic objects, integrating position and velocity using simple Euler integration each frame. While this integration method has accuracy limitations for complex physics, it's sufficient for basic movement and proves the pipeline works. Collision response applies impulses to change velocity when collisions occur, preventing objects from interpenetrating and providing basic bounce or slide behavior.
      </Text>

      <Text style={styles.text}>
        These systems form the groundwork for future gameplay mechanics like platforms, doors, projectiles, or interactive objects. Currently they're used primarily to keep the player camera from passing through walls and to provide basic ground detection for jumping mechanics. The simple implementation allows easy experimentation with different collision behaviors and response strategies without the complexity of full physics engines.
      </Text>

      <Text style={styles.subtitle}>
        Technologies Used
      </Text>

      <Text style={styles.text}>
        GENG is built using C++17 standard, taking advantage of modern language features like structured bindings, if-init statements, and standard library improvements while maintaining compatibility with most compilers. C++ was chosen for its performance characteristics and low-level control, allowing optimization of critical paths and direct memory management when needed. The object-oriented and template features enable clean code organization without sacrificing runtime performance.
      </Text>

      <Text style={styles.text}>
        Modern OpenGL provides the core graphics API through GLFW for windowing and context creation, GLAD for loading OpenGL function pointers at runtime. GLFW handles window management, input events, and OpenGL context setup in a cross-platform way, avoiding platform-specific code for Windows versus Linux versus MacOS. GLAD generates loader code for the specific OpenGL version being targeted, ensuring all required functions are available at runtime.
      </Text>

      <Text style={styles.text}>
        GLM provides mathematics types and functions matching GLSL shader language conventions, including vec2, vec3, vec4 for vectors, mat3 and mat4 for matrices, and mathematical operations like dot products, cross products, matrix multiplication, and transformations. Using GLM ensures CPU-side calculations match GPU-side shader calculations exactly, preventing subtle bugs from floating-point precision differences or calculation order variations.
      </Text>

      <Text style={styles.text}>
        stb_image handles texture loading from common image formats including PNG, JPEG, and BMP, providing a simple single-header library that avoids heavyweight image processing dependencies. The library loads image data into memory in the format OpenGL expects, making texture upload straightforward. Support for multiple image formats allows using whatever format is most convenient for each texture without conversion steps.
      </Text>

      <Text style={styles.text}>
        Dear ImGui powers all in-engine debug tools and runtime parameter adjustment, using an immediate mode paradigm that makes interface code simple and maintainable. ImGui integrates cleanly with OpenGL, rendering its interface using the same graphics pipeline and requiring minimal setup code. The extensive widget library provides everything needed for debugging and experimentation without building custom UI components.
      </Text>

      <Text style={styles.subtitle}>
        Project Status & Future Work
      </Text>

      <Text style={styles.text}>
        GENG is an ongoing work in progress with many planned features still in design or early implementation stages. The current state provides a solid foundation for rendering lit textured models with environmental effects and camera controls, but many advanced rendering techniques remain to be implemented. Development continues in spare time as a long-term learning project without strict deadlines or release schedules.
      </Text>

      <Text style={styles.text}>
        Shadow mapping implementation is planned to add realistic shadows from light sources, requiring additional render passes to generate depth maps from light perspective and sampling those depth maps during final rendering. Shadow mapping involves significant complexity around handling perspective aliasing, choosing shadow map resolution, and blending shadow edges, making it an excellent next learning challenge. Initial prototypes have been attempted but quality issues prevented inclusion in the main codebase.
      </Text>

      <Text style={styles.text}>
        Post-processing effects would add visual polish through screen-space techniques applied to the final rendered image. Effects like bloom to add glow around bright areas, depth of field to blur distant or close objects, motion blur for fast movement, and color grading to adjust mood and atmosphere are all planned. These effects require rendering to offscreen framebuffers then applying shader-based image processing, introducing new rendering pipeline concepts.
      </Text>

      <Text style={styles.text}>
        A more advanced material system would replace the current simple material properties with a flexible framework supporting different rendering techniques. This would include physically-based rendering using metallic/roughness workflow, normal mapping for surface detail without geometry, parallax mapping for enhanced depth perception, and support for multiple texture maps per material. The material system would need robust shader management to handle different permutations efficiently.
      </Text>

      <Text style={styles.text}>
        FPS-style shooting mechanics built on top of the existing engine framework would test whether the architecture supports gameplay features beyond pure rendering. This would involve projectile systems, hit detection using raycasting, weapon models and animations, hit feedback, and basic enemy AI. Building actual gameplay on the engine would validate architectural decisions and reveal areas needing refactoring to support game logic cleanly.
      </Text>

      <Text style={styles.text}>
        Long-term goals include experimenting with more advanced rendering techniques like screen-space reflections, ambient occlusion, global illumination, and possibly ray tracing if hardware capability permits. Each new technique represents both a learning opportunity and a chance to improve visual quality. The engine will continue evolving as a personal learning project for as long as graphics programming remains interesting and challenging.
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