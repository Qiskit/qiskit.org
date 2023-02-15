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
  title: string,
  image: string,
  description: string,
  installation: string,
  websiteCta: NavLink,
  docCta: NavLink,
  sourceCta: NavLink,
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
  // linkset: [
  //   {
  //     label: 'See machine learning docs',
  //     url: 'https://qiskit.org/documentation/machine-learning/'
  //   },
  //   {
  //     label: 'See nature docs',
  //     url: 'https://qiskit.org/documentation/nature/'
  //   },
  //   {
  //     label: 'See finance docs',
  //     url: 'https://qiskit.org/documentation/finance/'
  //   },
  //   {
  //     label: 'See optimization docs',
  //     url: 'https://qiskit.org/documentation/optimization/'
  //   }
  // ],
  subSections: [
    {
      title: 'Hardware subsection name 001',
      image: '/images/providers/qiskit-ibm-runtime.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna tortor, vulputate a arcu quis, cursus ultricies leo. Quisque sit amet tristique enim. Etiam lobortis, purus eu dignissim aliquet, ante felis fringilla nisi, sed euismod orci orci pulvinar dui. Aliquam pharetra ac risus eget maximus. Morbi sapien elit, dignissim non justo nec, luctus sodales ipsum. Sed tempus, velit aliquam sagittis sollicitudin, elit felis facilisis nulla, id ultrices quam diam in mi. Maecenas commodo vitae ligula sed tincidunt. Ut vel nulla accumsan, facilisis quam et, maximus ligula. Cras at odio condimentum, fermentum mauris at, condimentum urna.',
      installation: 'pip install lorem ipsum',
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
        'from qiskit_ibm_runtime import QiskitRuntimeService\n',
        '\n',
        '# Save an IBM Quantum account.\n',
        'QiskitRuntimeService.save_account(channel="ibm_quantum", token="MY_IBM_QUANTUM_TOKEN")\n',
        '\n',
        'service = QiskitRuntimeService()\n',
        "program_inputs = {'iterations': 1}\n",
        'options = {"backend_name": "ibmq_qasm_simulator"}\n',
        'job = service.run(program_id="hello-world",\n',
        'options=options,\n',
        'inputs=program_inputs\n',
        ')\n',
        'print(f"job id: {job.job_id()}")\n',
        'result = job.result()\n',
        'print(result)'
      ]
    }
  ]
}

const simulatorsId: string = 'algorithms'

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
      title: 'Simulators subsection name 001',
      image: '/images/providers/qiskit-ibm-runtime.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna tortor, vulputate a arcu quis, cursus ultricies leo. Quisque sit amet tristique enim. Etiam lobortis, purus eu dignissim aliquet, ante felis fringilla nisi, sed euismod orci orci pulvinar dui. Aliquam pharetra ac risus eget maximus. Morbi sapien elit, dignissim non justo nec, luctus sodales ipsum. Sed tempus, velit aliquam sagittis sollicitudin, elit felis facilisis nulla, id ultrices quam diam in mi. Maecenas commodo vitae ligula sed tincidunt. Ut vel nulla accumsan, facilisis quam et, maximus ligula. Cras at odio condimentum, fermentum mauris at, condimentum urna.',
      installation: 'pip install lorem ipsum',
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
        'from qiskit_ibm_runtime import QiskitRuntimeService\n',
        '\n',
        '# Save an IBM Quantum account.\n',
        'QiskitRuntimeService.save_account(channel="ibm_quantum", token="MY_IBM_QUANTUM_TOKEN")\n',
        '\n',
        'service = QiskitRuntimeService()\n',
        "program_inputs = {'iterations': 1}\n",
        'options = {"backend_name": "ibmq_qasm_simulator"}\n',
        'job = service.run(program_id="hello-world",\n',
        'options=options,\n',
        'inputs=program_inputs\n',
        ')\n',
        'print(f"job id: {job.job_id()}")\n',
        'result = job.result()\n',
        'print(result)'
      ]
    },
    {
      title: 'Simulators subsection name 002',
      image: '/images/providers/qiskit-ibm-runtime.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna tortor, vulputate a arcu quis, cursus ultricies leo. Quisque sit amet tristique enim. Etiam lobortis, purus eu dignissim aliquet, ante felis fringilla nisi, sed euismod orci orci pulvinar dui. Aliquam pharetra ac risus eget maximus. Morbi sapien elit, dignissim non justo nec, luctus sodales ipsum. Sed tempus, velit aliquam sagittis sollicitudin, elit felis facilisis nulla, id ultrices quam diam in mi. Maecenas commodo vitae ligula sed tincidunt. Ut vel nulla accumsan, facilisis quam et, maximus ligula. Cras at odio condimentum, fermentum mauris at, condimentum urna.',
      installation: 'pip install lorem ipsum',
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
        'from qiskit_ibm_runtime import QiskitRuntimeService\n',
        '\n',
        '# Save an IBM Quantum account.\n',
        'QiskitRuntimeService.save_account(channel="ibm_quantum", token="MY_IBM_QUANTUM_TOKEN")\n',
        '\n',
        'service = QiskitRuntimeService()\n',
        "program_inputs = {'iterations': 1}\n",
        'options = {"backend_name": "ibmq_qasm_simulator"}\n',
        'job = service.run(program_id="hello-world",\n',
        'options=options,\n',
        'inputs=program_inputs\n',
        ')\n',
        'print(f"job id: {job.job_id()}")\n',
        'result = job.result()\n',
        'print(result)'
      ]
    }
  ]
}

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    label: 'Run Qiskit circuits'
  },
  REAL_HARDWARE_IN_MENU,
  SIMULATORS_IN_MENU
]

const CONTENT_SECTIONS: ProvidersSection[] = [
  REAL_HARDWARE,
  SIMULATORS_COLLECTION
]

export {
  TableOfContentEntry,
  ProvidersSection,
  ProvidersSubSection,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS
}
