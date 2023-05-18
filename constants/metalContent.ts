/**
 * Represent a feature for the metal page
 */
interface MetalFeature {
  /** The visible title of the feature */
  title: string;
  /** The visible description of the feature */
  description: string;
  /** The image of the feature */
  image: string;
}

const METAL_FEATURES: Array<MetalFeature> = [
  {
    title: "End-to-end automation",
    description:
      "Metal is designed with the vision to seamlessly automate classical and quantum analysis. Choose from a list of available tools or connect your own through a flexible plug-in interface that allows you to orchestrate device design from within Metal. When you are ready, with the click of a button, export the design for fabrication, and you are done.",
    image: "/images/metal/features/end-to-end-automation.png",
  },
  {
    title: "Flexible & extensible",
    description: `<strong>Flexible interface:</strong> GUI view, Jupyter notebook view, Simulator view, Physical output view.
                  <br><br>
                  <strong>Extensible:</strong> User-friendly Python API and library of tools allow you to define your own custom quantum components.
                  <br><br>
                  <strong>Co-development:</strong> Linked with leading simulation and export/import interoperability with commercial-tool backends.`,
    image: "/images/metal/features/flexible-extensible.png",
  },
  {
    title: "Light-weight interoperability",
    description: `All-in-one platform powerful programming paradigm to unify design, simulation, and quantum analysis.
                  <br><br>
                  Metal helps bridge the world of classical electronic design automation (EDA) and electromagnetic simulation tools with that of quantum analysis.
                  <br><br>
                  Metal defines the abstraction of a quantum device design, needed for closed-loop optimization between design and analysis. Over time, our vision is to also develop Metal to be usable by a front-end user with little to no programming knowledge, using available libraries of quantum components and renderers.`,
    image: "/images/metal/features/light-weight-interoperability.png",
  },
  {
    title: "Experimentally tested",
    description:
      "Metal utilizes quantization methods and techniques from both the community and our own development. In an upcoming publication, Minev, McConkey & Gambetta will share some early results that demonstrate percent-level agreement between design and analysis and experimental hardware.",
    image: "/images/metal/features/experimetally-tested.png",
  },
  {
    title: "Library of components",
    description:
      "Benefit from built-in and community-developed library of quantum device components.  This library is in its early stages, and we are looking for members of the community to work with to develop this together.",
    image: "/images/metal/features/library-of-components.png",
  },
  {
    title: "Cutting edge resources",
    description:
      "Tap into built-in best practices and the latest simulation and analysis techniques. Help us test and build a shared set of cutting edge resources to help power the innovation of quantum hardware.",
    image: "/images/metal/features/cutting-edge-resources.png",
  },
];

/**
 * Represent a feature for the metal page
 */
interface MetalCapability {
  /** The visible title of the feature */
  title: string;
  /** The visible description of the feature */
  description: string;
  /** The image of the feature */
  visualResource: string;
}

const METAL_CAPABILITIES: Array<MetalCapability> = [
  {
    title: "Design quantum systems",
    description:
      "Qiskit Metal enables chip prototyping in a matter of minutes. You can start from a convenient Python Jupyter notebook or take advantage of the user-friendly graphical user interface (GUI). Simply choose from a library of predefined quantum components, such as transmon qubits and coplanar resonators, and customize their parameters in real-time to fit your needs. Use the built-in algorithms to automatically connect components. Easily implement new experimental components using Python templates and examples.",
    visualResource: "/videos/metal/design-quantum-systems.mp4",
  },
  {
    title: "Modeling quantum systems",
    description:
      "Metal helps automate the quantum electrodynamics modeling of quantum devices to predict their performance  and parameters, such as qubit frequencies, anharmonicities, couplings, and dissipation. Metal’s vision is to provide the abstraction layer needed to seamlessly interconnect with your favorite electromagnetic analysis tool (HFSS, Sonnet, CST, AWR, Comsol, …), dynamically rendering and co-simulating your design, at the whim of a click.",
    visualResource: "/videos/metal/modeling-quantum-systems.mp4",
  },
  {
    title: "Analysis design performance",
    description: `Metal aims to give access to advanced quantum analysis techniques to calculate qubit frequencies, anharmonicities, and extract non-linear couplings, dissipation, and the full Hamiltonian of the quantum device, with percent-level accuracy.
                  <br><br>
                  We plan to include the Energy Participation Ratio (EPR), impedance analysis, and the lumped-oscillator model. We hope to further build up the quantum analysis library in collaboration with the community.`,
    visualResource: "/videos/metal/analysis-design-performance.mp4",
  },
];

export { MetalFeature, METAL_FEATURES, MetalCapability, METAL_CAPABILITIES };
