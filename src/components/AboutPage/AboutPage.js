import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className='about'>
      <h1>ABOUT</h1>
      <p>Docker-Watcher is a web application designed to provide a user-friendly interface for managing and monitoring Docker containers and images. With Docker-Watcher, you can effortlessly keep track of your containerized applications and efficiently perform essential container operations.

Upon launching the application, Docker-Watcher presents you with a dashboard that displays the count of both containers and images. The container list showcases essential details such as container names, running status, associated images, and resource utilization, giving you a clear snapshot of your environment.<br/><br/>

One of the key functionalities of Docker-Watcher is the ability to start or stop individual containers with ease. Through an intuitive interface, you can conveniently select a specific container from the list and initiate the desired action, whether it's launching a container that is currently stopped or halting the execution of a running container. This capability empowers you to efficiently manage your containerized applications, enabling seamless control over their lifecycle.<br/><br/>

In addition to container management, Docker-Watcher provides a feature-rich interface to access and explore container logs. When you select a container from the list, you can effortlessly retrieve and display the log information associated with that particular container. This functionality is crucial for troubleshooting, debugging, and gaining insights into the activities and events occurring within your containers.

Docker-Watcher prioritizes user experience by offering a clean and intuitive design that streamlines your Docker management tasks. The application ensures a responsive and smooth interface, allowing you to navigate effortlessly between containers, images, and logs. It provides a convenient and centralized platform for monitoring and controlling your containerized applications, empowering you to maximize efficiency and streamline your development and deployment processes.</p>
    </div>
  )
}

export default AboutPage
