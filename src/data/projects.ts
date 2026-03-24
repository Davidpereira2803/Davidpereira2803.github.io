export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
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
    slug: "temo-emotion-drone",
    title: "Temo - Emotion-Based Drone Interaction",
    description: "An innovative project integrating facial emotion recognition with a DJI Tello drone. Temo interprets human facial expressions to control drone behavior.",
    longDescription: "An innovative project integrating facial emotion recognition with a DJI Tello drone. Temo interprets human facial expressions to control drone behavior, creating an interactive and responsive aerial experience. Using the ROS2 Tello wrapper developed by the SNT-ARG Team from the University of Luxembourg.",
    tags: ["ROS2", "Python", "Computer Vision", "DJI Tello", "OpenCV"],
    link: "https://github.com/Davidpereira2803/tello_ros_driver_TEMO",
    repo: "https://github.com/Davidpereira2803/tello_ros_driver_TEMO",
    image: "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoEmotionBased/tello.jpg",
    images: [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoEmotionBased/tello.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoEmotionBased/temo-table.png"
    ],
    category: "Robotics",
    featured: true,
    status: "finished"
  },
  {
    slug: "temo-mixed-reality",
    title: "Temo - Tello Mixed Reality Handcontrol",
    description: "Integrates facial emotion recognition with a DJI Tello drone to create an interactive aerial experience with full hand/IMU control.",
    longDescription: "This innovative project integrates facial emotion recognition with a DJI Tello drone to create an interactive and responsive aerial experience. TEMO interprets human facial expressions to control drone behavior, enabling dynamic human-drone interaction. The second iteration expands the system significantly by introducing full control using a PS4 controller, smartphone IMU sensors, and an ESP32 paired with an MPU9250 sensor, and an immersive target shooter game.",
    tags: ["ROS2", "Python", "Computer Vision", "DJI Tello", "ESP32", "MPU9250"],
    link: "https://github.com/Davidpereira2803/tello_mixed_reality_handcontrol",
    repo: "https://github.com/Davidpereira2803/tello_mixed_reality_handcontrol",
    image: "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/tello.jpg",
    images: [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/tello.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/temo-table.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/circuit.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/build.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/Gauntlet.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/TemoMixedReality/HandMovements.png"
    ],
    category: "Robotics",
    featured: true,
    status: "finished"
  },
  {
    slug: "rpi2-freertos-can-bus",
    title: "RPI2-FreeRTOS-CAN-BUS",
    description: "Extends FreeRTOS for the Raspberry Pi 2, enabling CAN BUS communication capabilities with SPI drivers and MCP2515 support.",
    longDescription: "This project extends FreeRTOS for the Raspberry Pi 2, enabling CAN BUS communication capabilities. It features SPI drivers, MCP2515 controller support, and integrates TACLEBENCH for embedded systems benchmarking. The implementation facilitates real-time task management and inter-device communication in embedded applications.",
    tags: ["C", "FreeRTOS", "Raspberry Pi", "CAN BUS", "SPI"],
    link: "https://github.com/Davidpereira2803/RPI2-FreeRTOS-CAN-BUS",
    repo: "https://github.com/Davidpereira2803/RPI2-FreeRTOS-CAN-BUS",
    image: "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/canbus.jpg",
    images: [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/10led.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/3RPI.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/canbus.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/modelwithcola.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/modulecut.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/RPI2FreeRTOS/terminalmcp.png"
    ],
    category: "Embedded",
    featured: true,
    status: "finished"
  },
  {
    slug: "alma-da-beira-alta",
    title: "Alma Da Beira Alta - Website",
    description: "Cultural association website with public homepage, event registration, gallery, and secure admin panel with multi-language support.",
    longDescription: "Website for the Alma Da Beira Alta cultural association in Luxembourg. Includes a public homepage, events with registration, gallery, about page, and a secure admin panel to manage events, gallery, members, and finances. Multi-language support (EN/FR/PT/DE) and fully responsive.",
    tags: ["React", "Firebase", "TailwindCSS", "Multi-language"],
    link: "https://github.com/Davidpereira2803/alma-da-beira-alta",
    repo: "https://github.com/Davidpereira2803/alma-da-beira-alta",
    image: "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/AlmaDaBeiraAlta/welcome.png",
    images: [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/AlmaDaBeiraAlta/welcome.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/AlmaDaBeiraAlta/services.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/AlmaDaBeiraAlta/joincommunity.png"
    ],
    category: "Web",
    status: "in production"
  },
  {
    slug: "imposter-hunt",
    title: "Imposter Hunt",
    description: "Fast-paced social deduction game with AI-backed generation API for custom word lists, on a single shared device.",
    longDescription: "Imposter Hunt is a fast-paced pass-and-play social deduction game where players try to identify the Imposter on a single shared device. Players receive a secret word except the Imposter, who must blend in and guess the word after surviving the voting rounds. The project features an AI-backed generation API that lets users create custom word lists from their own input.",
    tags: ["React Native", "Expo", "Zustand", "AI API"],
    link: "https://github.com/Davidpereira2803/imposter-hunt",
    repo: "https://github.com/Davidpereira2803/imposter-hunt",
    productPage: "https://pearlabs.dev/imposter-hunt",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile",
    status: "production"
  },
  {
    slug: "ros-monitor",
    title: "ROS Monitor",
    description: "Mobile application for real-time monitoring and control of ROS topics, services, and parameters through a mobile interface.",
    longDescription: "ROS Monitor is a mobile application designed to interface with ROS (Robot Operating System) environments. It provides real-time monitoring and control of ROS topics, services, and parameters through an intuitive mobile interface. The app leverages React Native and Expo for cross-platform compatibility, allowing users to connect to ROS bridges and visualize data streams.",
    tags: ["ROS", "React Native", "Expo", "Zustand"],
    link: "https://github.com/Davidpereira2803/ground",
    repo: "https://github.com/Davidpereira2803/ground",
    productPage: "https://pearlabs.dev/rosground",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    category: "Mobile",
    status: "prototype"
  },
  {
    slug: "letzgrade-mobile",
    title: "LetzGrade Mobile App",
    description: "Academic grading and feedback management for Luxembourgish high schools, with intuitive grade tracking and average calculation.",
    longDescription: "LetzGrade is a mobile application designed to simplify academic grading and feedback for students in the Luxembourgish high school system. The app offers an intuitive interface for managing grades and automatically calculates averages. Built with cross-platform technologies, LetzGrade helps students stay organized and makes grade tracking easier.",
    tags: ["React Native", "Expo", "Firebase", "Android", "iOS"],
    link: "#",
    repo: "https://github.com/Davidpereira2803/letzgrade-mobile",
    image: "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app1.jpg",
    images: [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app1.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app2.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app3.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app4.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app5.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/LetzGradeMobile/letzgrade-app6.jpg"
    ],
    category: "Mobile",
    status: "prototype"
  },
  {
    slug: "homelab-microk8s",
    title: "2 Node MicroK8s Homelab",
    description: "Two-node MicroK8s Kubernetes platform with full monitoring, ingress, and secure exposure via Cloudflare Tunnel.",
    longDescription: "Pearlabs Homelab is a two-node MicroK8s Kubernetes platform designed like a small production environment. An HP ProDesk runs the control plane, while a second node is a custom build repurposed from an old laptop. external access goes through Cloudflare Zero Trust with no router port forwarding. The stack includes Prometheus, Grafana, Loki, and Tempo.",
    tags: ["Kubernetes", "Docker", "Ubuntu Server", "Cloudflare", "Monitoring"],
    link: "#",
    repo: "#",
    image: "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/HomeLab/customserverrender.mp4",
    images: [
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/HomeLab/customserverrender.mp4",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/HomeLab/homelab1.jpg",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/HomeLab/customserverrender.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/HomeLab/diagram.png",
      "https://raw.githubusercontent.com/Davidpereira2803/Davidpereira2803.github.io/main/assets/images/HomeLab/homelab2.jpg"
    ],
    category: "Infrastructure",
    status: "in-progress"
  },
];
