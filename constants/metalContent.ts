/**
 * Represent a feature for the metal page
 */
interface MetalFeature {
  /** The visible title of the feature */
  title: string
  /** The visible description of the feature */
  description: string
  /** The image of the feature */
  image: string
}

const METAL_FEATURES: Array<MetalFeature> = [
  {
    title: 'Automation',
    description: 'Metal is designed with the vision to seamlessly automate classical and quantum analysis. Choose from a list of available tools or connect your own through a flexible plug-in interface that allows you to orchestrate device design from within Metal. When you are ready, with the click of a button, export the design for fabrication, and you are done.',
    image: '/images/metal/automation.png'
  },
  {
    title: 'Flexible & extensible',
    description: `<strong>Flexible interface:</strong> GUI view, Jupyter notebook view, Simulator view, Physical output view.<br><br>
                  <strong>Extensible:</strong> User-friendly python API and library of tools allow you to define your own custom quantum components.<br><br>
                  <strong>Co-development:</strong> Linked with leading simulation and export/import interoperability with commercial-tool backends.`,
    image: '/images/metal/automation.png'
  },
  {
    title: 'Integrated functionality',
    description: `All-in-one platform powerful programming paradigm to unify design, simulation, and quantum analysis.<br>
    Metal helps bridges the world of classical electronic design automation (EDA) and electromagnetic simulation tools with that of quantum analysis.
    Metal defines the abstraction of a quantum device design, needed for closed-loop optimization between design & analysis. Over time, our vision is to also develop metal to be usable by a front-end user with little to no programming knowledge, using available libraries of quantum components & renderers.`,
    image: '/images/metal/automation.png'
  },
  {
    title: 'Experimentally tested',
    description: 'Metal utilizes quantization methods and techniques from the community and that we are developing. In an upcoming publication, Minev, McConkey & Gambetta will share some early results that demonstrate percent-level agreement between design & analysis and experimental hardware. ',
    image: '/images/metal/automation.png'
  },
  {
    title: 'Library of components',
    description: 'Benefit from built-in and community-developed library of quantum device components.  This library is in its early stages, and we are looking for members of the community to work with to develop this together',
    image: '/images/metal/automation.png'
  },
  {
    title: 'Cutting edge resources',
    description: 'Tap into built-in best practices and the latest simulation and analysis techniques. Help us test and build a shared set of cutting edge resources to help power the innovation of quantum hardware. ',
    image: '/images/metal/automation.png'
  }
]

/**
 * Represent a feature for the metal page
 */
interface MetalCapability {
  /** The visible title of the feature */
  title: string
  /** The visible description of the feature */
  description: string
  /** The image of the feature */
  image: string
}

const METAL_CAPABILITIES: Array<MetalCapability> = [
  {
    title: 'Design quantum systems',
    description: 'Metal enables chip prototyping in a matter of minutes. You can start from a convenient Jupyter notebook, and then take advantage of the user-friendly python front-end interface. Simply, choose from a list of predefined quantum components and customize their parameters to fit your needs and connect them. Easily implement new experimental components using python templates and examples.',
    image: '/images/metal/fake-ui-content-placeholder1.png'
  },
  {
    title: 'Modeling quantum system',
    description: 'A quantum element is modeled differently based on the renderer/analysis being used.  Such as for a transmon, the Josephson junction in Metal is a vector with a width, but in HFSS - EPR Analysis it is a 2D square with a sheet inductance, or exported as a GDS file it becomes a cell with multiple layers for the appropriate e-beam fabrication of said junction. All of these transitions are managed by Metal based on values the renderer/user provides.',
    image: '/images/metal/fake-ui-content-placeholder2.png'
  },
  {
    title: 'Analysis design performance',
    description: 'Analysis Tools, which if follow basic interface requirements, can function with in Metal and expand its capabilities. Include text about hamiltonian.',
    image: '/images/metal/fake-ui-content-placeholder3.png'
  }
]

export {
  METAL_FEATURES,
  METAL_CAPABILITIES
}
