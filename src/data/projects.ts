export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  caseStudy?: { problem: string; contribution: string; approach: string; outcome: string };
  tags: string[];
  link: string;
  repo: string;
  productPage?: string;
  image: string;
  images?: string[];
  category: "Web" | "Mobile" | "Robotics" | "Embedded" | "Infrastructure" | "AI/ML" | "Tools";
  featured?: boolean;
  status?: string;
}

export const PROJECTS: Project[] = [
  {
    "category": "Mobile",
    "description": "A pass-and-play social deduction game with special roles, multilingual support, and AI-generated custom topics.",
    "featured": true,
    "image": "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice1.png",
    "link": "",
    "longDescription": "Previously called Imposter Hunt, The Munkeler is a social deduction game played on one shared phone. Players exchange clues and vote to identify the player without the secret word. Special roles and AI-generated custom topics add variety, while persistent local state keeps setup and gameplay on the device.",
    "productPage": "https://pearlabs.dev/imposter-hunt",
    "repo": "https://github.com/Davidpereira2803/imposter-hunt",
    "slug": "imposter-hunt",
    "status": "production",
    "tags": [
      "React Native",
      "Expo",
      "Zustand",
      "AI API"
    ],
    "title": "The Munkeler",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/icon.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice1.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice2.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice3.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice4.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice5.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice6.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice7.png",
      "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/screenshots/Slice8.png"
    ],
    "caseStudy": {
      "problem": "Make social deduction easy to play with a group and a single phone.",
      "contribution": "Built the mobile game flow, role assignment, voting mechanics, local persistence, and integration with an AI topic-generation API.",
      "approach": "React Native and Expo support the mobile interface; Zustand manages persistent game state. AI-generated topics extend the built-in content without changing the core offline game.",
      "outcome": "The project evolved into The Munkeler, with special roles, multiple languages, and a release history documenting gameplay and usability improvements."
    }
  },
  {
    "slug": "temo-mixed-reality",
    "title": "Temo - Tello Mixed Reality Handcontrol",
    "description": "Integrates facial emotion recognition with a DJI Tello drone to create an interactive aerial experience with full hand/IMU control.",
    "longDescription": "This innovative project integrates facial emotion recognition with a DJI Tello drone to create an interactive and responsive aerial experience. TEMO interprets human facial expressions to control drone behavior, enabling dynamic human-drone interaction. The second iteration expands the system significantly by introducing full control using a PS4 controller, smartphone IMU sensors, and an ESP32 paired with an MPU9250 sensor, and an immersive target shooter game.",
    "tags": [
      "ROS2",
      "Python",
      "Computer Vision",
      "DJI Tello",
      "ESP32",
      "MPU9250"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/tello_mixed_reality_handcontrol",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/images/TemoMixedReality/Gauntlet.png",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoMixedReality/tello.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoMixedReality/temo-table.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoMixedReality/circuit.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoMixedReality/build.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoMixedReality/Gauntlet.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoMixedReality/HandMovements.png"
    ],
    "category": "Robotics",
    "featured": true,
    "status": "finished",
    "caseStudy": {
      "problem": "Explore how physical gestures and mixed reality can make drone interaction more engaging.",
      "contribution": "Extended the TEMO system with ESP32/MPU9250 hand control, PS4 controller and smartphone IMU inputs, a GUI, and an ArUco target game.",
      "approach": "Sensor inputs and computer vision are integrated with the ROS 2 Tello control stack. The work builds on the SNT-ARG driver and an existing emotion-recognition model.",
      "outcome": "A working interaction prototype brings multiple control methods, live video, sensor feedback, and a target-shooting game into one interface."
    }
  },
  {
    "slug": "project-noesis",
    "title": "Project Noesis",
    "description": "An experimental agent framework connecting live vision, memory, and local language-model reasoning.",
    "longDescription": "A simulation-first framework for exploring embodied AI on a standard computer. Camera perception updates a structured world model while a separate cognition thread uses a local language model to select abstract actions. Physical robot integration remains future work.",
    "tags": [
      "Python",
      "OpenCV",
      "YOLOv8",
      "Ollama"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/project_noesis",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/project_noesis/main/doc/assets/perception_pipeline.png",
    "category": "AI/ML",
    "featured": true,
    "status": "experimental",
    "caseStudy": {
      "problem": "Explore how perception, memory, and local language models can cooperate in an embodied agent.",
      "contribution": "Implemented modular perception, world-state, memory, and cognition components with separate processing threads.",
      "approach": "OpenCV and YOLOv8 process camera input. Ollama runs local LLM reasoning, with a queue separating cognition from the continuous perception loop.",
      "outcome": "A desktop prototype produces abstract decisions and visual feedback. Actuators, physical robot deployment, and longer-term memory are future work."
    }
  },
  {
    "slug": "temo-emotion-drone",
    "title": "Temo - Emotion-Based Drone Interaction",
    "description": "An innovative project integrating facial emotion recognition with a DJI Tello drone. Temo interprets human facial expressions to control drone behavior.",
    "longDescription": "An innovative project integrating facial emotion recognition with a DJI Tello drone. Temo interprets human facial expressions to control drone behavior, creating an interactive and responsive aerial experience. Using the ROS2 Tello wrapper developed by the SNT-ARG Team from the University of Luxembourg.",
    "tags": [
      "ROS2",
      "Python",
      "Computer Vision",
      "DJI Tello",
      "OpenCV"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/tello_ros_driver_TEMO",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoEmotionBased/tello.jpg",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoEmotionBased/tello.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/TemoEmotionBased/temo-table.png"
    ],
    "category": "Robotics",
    "featured": true,
    "status": "finished",
    "caseStudy": {
      "problem": "Connect facial expression recognition with visible drone responses.",
      "contribution": "Extended the SNT-ARG Tello ROS 2 driver with emotion-triggered movements and a graphical interface, using an existing emotion-recognition model.",
      "approach": "ROS 2 separates drone communication from image processing and interaction logic; OpenCV supports camera processing.",
      "outcome": "The prototype maps six detected emotions to drone reaction movements and displays camera and status feedback."
    }
  },
  {
    "slug": "rpi2-freertos-can-bus",
    "title": "RPI2-FreeRTOS-CAN-BUS",
    "description": "Extends FreeRTOS for the Raspberry Pi 2, enabling CAN BUS communication capabilities with SPI drivers and MCP2515 support.",
    "longDescription": "This project extends FreeRTOS for the Raspberry Pi 2, enabling CAN BUS communication capabilities. It features SPI drivers, MCP2515 controller support, and integrates TACLEBENCH for embedded systems benchmarking. The implementation facilitates real-time task management and inter-device communication in embedded applications.",
    "tags": [
      "C",
      "FreeRTOS",
      "Raspberry Pi",
      "CAN BUS",
      "SPI"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/RPI2-FreeRTOS-CAN-BUS",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/canbus.jpg",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/10led.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/3RPI.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/canbus.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/modelwithcola.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/modulecut.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/RPI2FreeRTOS/terminalmcp.png"
    ],
    "category": "Embedded",
    "featured": true,
    "status": "finished",
    "caseStudy": {
      "problem": "Explore real-time communication between Raspberry Pi 2 devices over CAN bus.",
      "contribution": "Extended an existing FreeRTOS port with SPI and MCP2515 CAN controller support and integrated embedded benchmarking.",
      "approach": "C and FreeRTOS provide low-level task execution; SPI connects the Raspberry Pi to the MCP2515 controller.",
      "outcome": "The project demonstrates embedded task management and communication, with hardware builds and debugging captures documented in the gallery."
    }
  },
  {
    "slug": "alma-da-beira-alta",
    "title": "Alma Da Beira Alta - Website",
    "description": "Cultural association website with public homepage, event registration, gallery, and secure admin panel with multi-language support.",
    "longDescription": "Website for the Alma Da Beira Alta cultural association in Luxembourg. Includes a public homepage, events with registration, gallery, about page, and a secure admin panel to manage events, gallery, members, and finances. Multi-language support (EN/FR/PT/DE) and fully responsive.",
    "tags": [
      "React",
      "Firebase",
      "TailwindCSS",
      "Multi-language"
    ],
    "link": "https://alma-da-beira-alta.web.app/",
    "repo": "https://github.com/Davidpereira2803/alma-da-beira-alta",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/AlmaDaBeiraAlta/welcome.png",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/AlmaDaBeiraAlta/welcome.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/AlmaDaBeiraAlta/services.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/AlmaDaBeiraAlta/joincommunity.png"
    ],
    "category": "Web",
    "status": "in production",
    "caseStudy": {
      "problem": "Give a Luxembourg cultural association a multilingual public presence and tools to manage its activities.",
      "contribution": "Built public event and gallery pages alongside member registration and administrative workflows for content and finances.",
      "approach": "React and Firebase combine the interface, authentication, Firestore storage, and hosting. The site supports English, French, Portuguese, and German.",
      "outcome": "A responsive website brings public information and association administration into one application."
    }
  },
  {
    "slug": "ros-monitor",
    "title": "ROS Monitor",
    "description": "Inspect live ROS telemetry from your phone through rosbridge and WebSockets.",
    "longDescription": "A React Native and Expo application for connecting to ROS systems, subscribing to topics, and inspecting incoming messages. The current prototype focuses on connection setup and live telemetry; camera streaming is planned.",
    "tags": [
      "ROS",
      "React Native",
      "Expo",
      "WebSockets"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/rosground",
    "productPage": "https://pearlabs.dev/rosground",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/rosground/master/screenshots/dashboard.jpg",
    "category": "Mobile",
    "status": "prototype",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/rosground/master/screenshots/connect.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/rosground/master/screenshots/addtopic.jpg"
    ],
    "caseStudy": {
      "problem": "Make ROS topic inspection accessible from a mobile device.",
      "contribution": "Built a mobile connection and subscription interface for inspecting ROS messages in real time.",
      "approach": "React Native and Expo provide the interface, while rosbridge WebSockets carry subscriptions and incoming telemetry.",
      "outcome": "The prototype supports connection setup, topic subscriptions, and formatted live messages. Camera streaming remains planned."
    }
  },
  {
    "slug": "letzgrade-mobile",
    "title": "LetzGrade Mobile App",
    "description": "Academic grading and feedback management for Luxembourgish high schools, with intuitive grade tracking and average calculation.",
    "longDescription": "LetzGrade is a mobile application designed to simplify academic grading and feedback for students in the Luxembourgish high school system. The app offers an intuitive interface for managing grades and automatically calculates averages. Built with cross-platform technologies, LetzGrade helps students stay organized and makes grade tracking easier.",
    "tags": [
      "React Native",
      "Expo",
      "Firebase",
      "Android",
      "iOS"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/letzgrade-mobile",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app1.jpg",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app1.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app2.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app3.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app4.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app5.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/LetzGradeMobile/letzgrade-app6.jpg"
    ],
    "category": "Mobile",
    "status": "prototype",
    "caseStudy": {
      "problem": "Help students organize their academic progress across school years.",
      "contribution": "Built grade tracking, weighted calculations, progress visualizations, and authenticated data management.",
      "approach": "React Native provides the mobile interface and Firebase supports authentication and storage.",
      "outcome": "The prototype combines academic organization with progress charts and light/dark themes."
    }
  },
  {
    "slug": "homelab-microk8s",
    "title": "2 Node MicroK8s Homelab",
    "description": "Two-node MicroK8s Kubernetes platform with full monitoring, ingress, and secure exposure via Cloudflare Tunnel.",
    "longDescription": "Pearlabs Homelab is a two-node MicroK8s Kubernetes platform designed like a small production environment. An HP ProDesk runs the control plane, while a second node is a custom build repurposed from an old laptop. external access goes through Cloudflare Zero Trust with no router port forwarding. The stack includes Prometheus, Grafana, Loki, and Tempo.",
    "tags": [
      "Kubernetes",
      "Docker",
      "Ubuntu Server",
      "Cloudflare",
      "Monitoring"
    ],
    "link": "",
    "repo": "#",
    "image": "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/HomeLab/customserverrender.mp4",
    "images": [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/HomeLab/customserverrender.mp4",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/HomeLab/homelab1.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/HomeLab/customserverrender.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/HomeLab/diagram.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/master/images/HomeLab/homelab2.jpg"
    ],
    "category": "Infrastructure",
    "status": "in-progress",
    "caseStudy": {
      "problem": "Build a self-hosted environment for deploying and observing containerized services.",
      "contribution": "Assembled a two-node setup, including a repurposed laptop in a custom enclosure with 3D-printed components.",
      "approach": "MicroK8s runs workloads on Ubuntu Server; the documented stack includes Cloudflare Tunnel, Prometheus, Grafana, Loki, and Tempo.",
      "outcome": "An evolving home platform supports practical learning in orchestration, monitoring, and service operation."
    }
  },
  {
    "slug": "firedrift",
    "title": "FireDrift",
    "description": "Exploring wildfire spread direction prediction through cross-dataset transfer learning.",
    "longDescription": "A deep learning coursework project investigating whether fire spread direction can be estimated from segmentation masks. A ResNet18 backbone is pretrained on FLAME aerial imagery and fine-tuned on the Next Day Wildfire Spread dataset. Evaluation compares the predicted two-dimensional spread vector with random and predict-mean baselines.",
    "tags": [
      "Python",
      "PyTorch",
      "ResNet18",
      "Transfer Learning"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/firedrift",
    "image": "/project-visuals/firedrift.svg",
    "category": "AI/ML",
    "status": "coursework",
    "caseStudy": {
      "problem": "Investigate cross-dataset transfer learning for predicting the direction of wildfire spread.",
      "contribution": "Developed a training and evaluation pipeline using FLAME imagery and Next Day Wildfire Spread data.",
      "approach": "A ResNet18 backbone is pretrained for fire classification, then fine-tuned to predict a two-dimensional spread vector from a fire mask.",
      "outcome": "Evaluation scripts report prediction errors and compare with simple baselines. This is a coursework experiment rather than an operational forecasting system."
    }
  },
  {
    "slug": "nsga-colm",
    "title": "NSGA-II + COLM",
    "description": "Combining evolutionary optimization and a compact transformer for multi-objective scheduling.",
    "longDescription": "A collaborative University of Luxembourg project with Bacem Etteib and Sadin Avdusinovic. The pipeline combines GPU-accelerated NSGA-II with COLM, a compact GPT-style transformer, to generate candidate solutions for permutation flow-shop scheduling. It considers both makespan and total tardiness on Taillard benchmark instances.",
    "tags": [
      "Python",
      "EvoX",
      "Transformers",
      "Optimization"
    ],
    "link": "",
    "repo": "https://github.com/Davidpereira2803/nsgaccolm",
    "image": "/project-visuals/scheduling.svg",
    "category": "AI/ML",
    "status": "collaborative coursework",
    "caseStudy": {
      "problem": "Explore whether learned candidate generation can complement evolutionary search in scheduling.",
      "contribution": "Collaborated with Bacem Etteib and Sadin Avdusinovic on a hybrid optimization pipeline.",
      "approach": "NSGA-II generates non-dominated schedules; selected permutations train COLM, which samples new candidate solutions.",
      "outcome": "The repository includes benchmark generation, Pareto-front analysis, hypervolume calculations, and cluster job scripts. No performance advantage is claimed here."
    }
  }
];
