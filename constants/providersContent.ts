import { NavLink } from '~/constants/menuLinks'

type TableOfContentEntry = {
  /** The visible name of the link */
  label: string
  /** Id of the section we want to jump to */
  sectionId?: string
  /** Use when the link is on secondary level */
  isSecondary?: boolean
}

type ProvidersSubSection = {
  title: string
  image: string | null
  installation: string
  description: string
  websiteCta?: NavLink | null
  docCta: NavLink | null
  sourceCta: NavLink | null
  helloWorldExample: string[]
}

/**
 * Represent a content section for the Providers page
 */
interface ProvidersSection {
  /** The identifier of the section */
  id: string
  /** The visible title of the section */
  title: string
  /** The visible description of the section */
  description: string
  /** Where we want to go to get more info of the section */
  link?: NavLink
  /** A set of links to get more information on the section */
  linkset?: NavLink[]
  /** The sub sections inside the section */
  subSections?: ProvidersSubSection[]
  /** The image to show if the section doesn't have subsections */
  image?: string
}

const realHardware: string = 'real-hardware'

const REAL_HARDWARE_IN_MENU: TableOfContentEntry = {
  sectionId: realHardware,
  label: 'With Real Hardware',
  isSecondary: true
}

const REAL_HARDWARE: ProvidersSection = {
  id: realHardware,
  title: 'Run With Real Hardware',
  description: 'Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.',
  subSections: [
    {
      title: 'IBM Qiskit Runtime',
      image: '/images/providers/qiskit-ibm-runtime.png',
      description: 'Qiskit Runtime is a quantum computing service and programming model that allows users to optimize workloads and efficiently execute them on quantum systems at scale. The programming model extends the existing interface in Qiskit with a set of new primitive programs.',
      installation: 'pip install qiskit-ibm-runtime',
      websiteCta: {
        label: 'Website',
        url: 'https://quantum-computing.ibm.com/lab/docs/iql/runtime/'
      },
      docCta: {
        label: 'Docs',
        url: 'https://qiskit.org/documentation/partners/qiskit_ibm_runtime/'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/Qiskit/qiskit-ibm-runtime'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit\n',
        'from qiskit_ibm_runtime import QiskitRuntimeService, Sampler\n',
        '\n',
        '# Save an IBM Quantum account\n',
        'QiskitRuntimeService.save_account(channel="ibm_quantum", token="MY_IBM_QUANTUM_TOKEN")\n',
        '\n',
        '# Select a backend\n',
        'service = QiskitRuntimeService()\n',
        'backend = service.backend("ibmq_qasm_simulator")\n',
        '\n',
        '# Build a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        '\n',
        '# Run the circuit and get result distribution\n',
        'sampler = Sampler(session=backend)\n',
        'job = sampler.run(circuit)\n',
        'quasi_dist = job.result().quasi_dists[0]\n',
        'print(quasi_dist)'
      ]
    },
    {
      title: 'IBM Quantum Platform',
      image: '/images/providers/qiskit-ibm-provider.png',
      description: 'IBM Quantum platform offers access to IBM Quantum systems and simulators.',
      installation: 'pip install qiskit-ibm-provider',
      websiteCta: {
        label: 'Website',
        url: 'https://www.ibm.com/quantum/systems'
      },
      docCta: {
        label: 'Docs',
        url: 'https://qiskit.org/documentation/partners/qiskit_ibm_provider/'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/Qiskit/qiskit-ibm-provider'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit, transpile\n',
        'from qiskit_ibm_provider import IBMProvider\n',
        '\n',
        '\n',
        '# Save an IBM Quantum account\n',
        'IBMProvider.save_account("MY_IBM_QUANTUM_TOKEN")\n',
        '\n',
        '# Select a backend\n',
        'provider = IBMProvider()\n',
        'backend = provider.get_backend("ibmq_qasm_simulator")\n',
        '\n',
        '# Build and transpile a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        'transpiled_circuit = transpile(circuit, backend)\n',
        '\n',
        '# Run the circuit and get result counts\n',
        'job = backend.run(transpiled_circuit)\n',
        'counts = job.result().get_counts()\n',
        'print(counts)'
      ]
    },
    {
      title: 'IonQ',
      image: null,
      description: 'Qiskit provider for IonQ backends.',
      installation: 'pip install qiskit-ionq',
      websiteCta: {
        label: 'Website',
        url: 'https://ionq.com/'
      },
      docCta: {
        label: 'Docs',
        url: 'https://qiskit.org/documentation/partners/ionq/'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/Qiskit-Partners/qiskit-ionq'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit\n',
        'from qiskit_ionq import IonQProvider\n',
        '\n',
        '# Select a backend\n',
        'provider = IonQProvider("MY_IONQ_TOKEN")\n',
        'backend = provider.get_backend("ionq_simulator")\n',
        '\n',
        '# Build a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        '\n',
        '# Run the circuit and get result counts\n',
        'job = backend.run(circuit)\n',
        'counts = job.get_counts()\n',
        'print(counts)'
      ]
    },
    {
      title: 'Quantinuum',
      image: null,
      description: 'Qiskit provider for Quantinuum backends.',
      installation: 'pip install qiskit-quantinuum-provider',
      websiteCta: {
        label: 'Website',
        url: 'https://www.quantinuum.com/'
      },
      docCta: {
        label: 'Docs',
        url: 'https://github.com/qiskit-community/qiskit-quantinuum-provider/blob/master/examples/QuantinuumExample.ipynb'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/qiskit-community/qiskit-quantinuum-provider'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit, transpile\n',
        'from qiskit_quantinuum import Quantinuum\n',
        '\n',
        '# Save account\n',
        'Quantinuum.save_account("username@company.com")\n',
        '\n',
        '# Select backend\n',
        'backend = Quantinuum.backends("DEVICE_NAME")\n',
        '\n',
        '# Build and transpile circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        'transpiled_circuit = transpile(circuit, backend)\n',
        '\n',
        '# Run the circuit and get result\n',
        'job = backend.run(transpiled_circuit)\n',
        'counts = job.result().get_counts()\n',
        'print(counts)'
      ]
    }
  ]
}

const simulatorsId: string = 'simulators'

const SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: simulatorsId,
  label: 'With Simulators',
  isSecondary: true
}

const SIMULATORS_COLLECTION: ProvidersSection = {
  id: simulatorsId,
  title: 'Run With Simulators',
  description: 'Connect Qiskit with high performance simulators.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/algorithms.html'
  },
  subSections: [
    {
      title: 'Qiskit Aer',
      image: null,
      description: 'Qiskit Aer is a high performance simulator for quantum circuits that includes noise models.',
      installation: 'pip install qiskit-aer',
      docCta: {
        label: 'Docs',
        url: 'https://qiskit.org/documentation/aer/'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/Qiskit/qiskit-aer'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit, transpile\n',
        'from qiskit_aer import AerSimulator\n',
        '\n',
        '# Select a backend\n',
        'backend = AerSimulator()\n',
        '\n',
        '# Build and transpile a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        'transpiled_circuit = transpile(circuit, backend)\n',
        '\n',
        '# Run the circuit and get result\n',
        'job = backend.run(transpiled_circuit)\n',
        'counts = job.result().get_counts()\n',
        'print(counts)'
      ]
    },
    {
      title: 'NVIDIA cuQuantum Appliance',
      image: null,
      description: 'The NVIDIA cuQuantum Appliance is a highly performant multi-GPU multi-node solution for quantum circuit simulation.',
      installation: 'docker pull nvcr.io/nvidia/cuquantum-appliance',
      websiteCta: {
        label: 'Website',
        url: 'https://developer.nvidia.com/cuquantum-sdk'
      },
      docCta: {
        label: 'Docs',
        url: 'https://docs.nvidia.com/cuda/cuquantum/index.html'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/NVIDIA/cuQuantum'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit, transpile\n',
        'from cusvaer.backends import StatevectorSimulator\n',
        '\n',
        '# Select a backend\n',
        'backend = StatevectorSimulator()\n',
        '\n',
        '# Build and transpile a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        'transpiled_circuit = transpile(circuit, backend)\n',
        '\n',
        '# Run the circuit and get result\n',
        'job = backend.run(transpiled_circuit)\n',
        'counts = job.result().get_counts()\n',
        'print(counts)'
      ]
    }
  ]
}

const multiplatformsId: string = 'multiplatforms'

const MULTIPLATFORMS_IN_MENU: TableOfContentEntry = {
  sectionId: multiplatformsId,
  label: 'With Multiplatforms',
  isSecondary: true
}

const MULTIPLATFORM_COLLECTION: ProvidersSection = {
  id: multiplatformsId,
  title: 'Run With Multiplatforms',
  description: 'Lorem ipsum description for multiplatforms',
  link: {
    label: 'See docs',
    url: 'https://todo-add-docs-link-for-multiplatforms'
  },
  subSections: [
    {
      title: 'Azure Quantum',
      image: null,
      description: 'Qiskit provider for IonQ backends.',
      installation: 'pip install "azure-quantum[qiskit]"',
      websiteCta: {
        label: 'Website',
        url: 'https://aka.ms/aq'
      },
      docCta: {
        label: 'Docs',
        url: 'https://aka.ms/AQ/Qiskit/QuickStart'
      },
      sourceCta: null,
      helloWorldExample: [
        'from qiskit import QuantumCircuit\n',
        'from azure.quantum.qiskit import AzureQuantumProvider\n',
        '\n',
        '# Connect to Azure Quantum service\n',
        'provider = AzureQuantumProvider(\n',
        '  resource_id="MY_RESOURCE_ID",\n',
        '  location="MY_LOCATION"\n',
        ')\n',
        '\n',
        '# select a backend\n',
        'backend = provider.get_backend("ionq.simulator")\n',
        '\n',
        '# Build and transpile a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        'transpiled_circuit = transpile(circuit, backend)\n',
        '\n',
        '# Run the circuit and get result counts\n',
        'job = backend.run(transpiled_circuit)\n',
        'counts = job.result().get_counts()\n',
        'print(counts)'
      ]
    },
    {
      title: 'Amazon Braket',
      image: null,
      description: 'Execute Qiskit programs on AWS quantum computing hardware devices through Amazon Braket',
      installation: 'pip install qiskit_braket_provider',
      websiteCta: {
        label: 'Website',
        url: 'https://aws.amazon.com/braket/'
      },
      docCta: {
        label: 'Docs',
        url: 'https://qiskit-community.github.io/qiskit-braket-provider/'
      },
      sourceCta: {
        label: 'GitHub',
        url: 'https://github.com/qiskit-community/qiskit-braket-provider'
      },
      helloWorldExample: [
        'from qiskit import QuantumCircuit, transpile\n',
        'from qiskit_braket_provider import AWSBraketProvider\n',
        '\n',
        '# Select a backend\n',
        'provider = AWSBraketProvider()\n',
        'backend = provider.backends("SV1")\n',
        '\n',
        '# Build and transpile a circuit\n',
        'circuit = QuantumCircuit(2, 2)\n',
        'circuit.h(0)\n',
        'circuit.cx(0,1)\n',
        'circuit.measure([0,1], [0,1])\n',
        'transpiled_circuit = transpile(circuit, backend)\n',
        '\n',
        '# Run the circuit and get result counts\n',
        'job = backend.run(transpiled_circuit)\n',
        'counts = job.result().get_counts()\n',
        'print(counts)'
      ]
    }
  ]

}

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    label: 'Run Qiskit circuits'
  },
  REAL_HARDWARE_IN_MENU,
  SIMULATORS_IN_MENU,
  MULTIPLATFORMS_IN_MENU
]

const CONTENT_SECTIONS: ProvidersSection[] = [
  REAL_HARDWARE,
  SIMULATORS_COLLECTION,
  MULTIPLATFORM_COLLECTION
]

export {
  TableOfContentEntry,
  ProvidersSection,
  ProvidersSubSection,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS
}
