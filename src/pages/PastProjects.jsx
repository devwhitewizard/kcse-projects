import React, { useState } from "react";
import "../css/PastProjects.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function PastProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Azani Internet Service Provider Information System",
      year: 2026,
      shortDescription: "ISP information management system",
      fullDescription: "Azani is a company that deals with provision of internet services and internet infrastructure to learning institutions. These institutions include primary, junior, senior schools and colleges. Institutions interested in the services are required to pay a registration fee of KSh 8,500 to the company. The company then offers various internet services where the cost per month is based on the bandwidth requirements.",
      category: "Management System",
      pdfUrl: "https://drive.google.com/file/d/1y_KZ0ofTXXvXVTg-izpqUhoamJcYJGDp/preview",
      features: [
        "Client Management",
        "Bandwidth Monitoring",
        "Invoice Generation",
        "Service Request Tracking",
        "Payment Processing"
      ],
      samples: [
        {
          sampleId: 1,
          title: "System Database Schema",
          description: "Complete database design with all tables and relationships",
          type: "Database",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2026_DB_SCHEMA_ID]/edit"
        },
        {
          sampleId: 2,
          title: "System Documentation",
          description: "Complete implementation and user guide documentation",
          type: "Documentation",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2026_DOCS_ID]/edit",
          imageUrl: "/screenshots/documentation-2026.svg"
        }
      ]
    },
    {
      id: 2,
      name: "Victory School Club Membership System",
      year: 2025,
      shortDescription: "School club membership tracking system",
      fullDescription: "Victory School is a school offering a wide range of co-curricular activities besides the formal curriculum. Some of these co-curricular activities in the school include clubs. This system manages club membership, activities, and member participation.",
      category: "Membership System",
      pdfUrl: "https://drive.google.com/file/d/1RohdynqcW9ydl8bp_pfDPYQc4IzZNdoM/preview",
      features: [
        "Member Registration",
        "Club Management",
        "Event Scheduling",
        "Attendance Tracking",
        "Member Reports"
      ],
      samples: [
        {
          sampleId: 1,
          title: "System Database Schema",
          description: "Complete database design with all tables and relationships",
          type: "Database",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2025_DB_SCHEMA_ID]/edit"
        },
        {
          sampleId: 2,
          title: "System Documentation",
          description: "Complete implementation and user guide documentation",
          type: "Documentation",
          downloadUrl: "https://docs.google.com/document/d/1545mMDeuh-9mCWhbRTQyNOUlevpHS78J/edit?usp=drive_link&ouid=102804783582378393673&rtpof=true&sd=true",
          imageUrl: "/screenshots/documentation-2025.svg"
        }
      ]
    },
    {
      id: 3,
      name: "Uzima Borehole Drilling System",
      year: 2024,
      shortDescription: "Borehole drilling service management",
      fullDescription: "Uzima Company is one of the leading borehole service providers in Kenya. They provide borehole drilling services to industrial, commercial and domestic clients. This system manages drilling projects, costs, and client information.",
      category: "Service Management",
      pdfUrl: "https://drive.google.com/file/d/1vm-VTb3XQd8NAVhNRSNQSR0ogAkPlmZ8/preview",
      features: [
        "Project Tracking",
        "Cost Estimation",
        "Client Database",
        "Invoice Management",
        "Equipment Tracking"
      ],
      samples: [
        {
          sampleId: 1,
          title: "System Database Schema",
          description: "Complete database design with all tables and relationships",
          type: "Database",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2024_DB_SCHEMA_ID]/edit"
        },
        {
          sampleId: 2,
          title: "System Documentation",
          description: "Complete implementation and user guide documentation",
          type: "Documentation",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2024_DOCS_ID]/edit",
          imageUrl: "/screenshots/documentation-2024.svg"
        }
      ]
    },
    {
      id: 4,
      name: "Maringo Sports Club System",
      year: 2023,
      shortDescription: "Sports club management and talent development",
      fullDescription: "Maringo Sports Club was formed by Maringo County with the intention of developing talent among the youths within the county in various games. This system manages members, events, and performance tracking.",
      category: "Sports Management",
      pdfUrl: "https://drive.google.com/file/d/[ADD_2023_FILE_ID]/preview",
      features: [
        "Member Management",
        "Event Planning",
        "Performance Tracking",
        "Training Schedules",
        "Tournament Management"
      ],
      samples: [
        {
          sampleId: 1,
          title: "System Database Schema",
          description: "Complete database design with all tables and relationships",
          type: "Database",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2023_DB_SCHEMA_ID]/edit"
        },
        {
          sampleId: 2,
          title: "System Documentation",
          description: "Complete implementation and user guide documentation",
          type: "Documentation",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2023_DOCS_ID]/edit",
          imageUrl: "/screenshots/documentation-2023.svg"
        }
      ]
    },
    {
      id: 5,
      name: "Nekta Management System",
      year: 2022,
      shortDescription: "Beekeeping and honey business management",
      fullDescription: "Nekta is a company that deals with beekeeping and selling of honey. This system manages hive inventory, honey production, and sales.",
      category: "Business Management",
      pdfUrl: "https://drive.google.com/file/d/[ADD_2022_FILE_ID]/preview",
      features: [
        "Hive Management",
        "Production Tracking",
        "Inventory Control",
        "Sales Management",
        "Quality Reports"
      ],
      samples: [
        {
          sampleId: 1,
          title: "System Database Schema",
          description: "Complete database design with all tables and relationships",
          type: "Database",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2022_DB_SCHEMA_ID]/edit"
        },
        {
          sampleId: 2,
          title: "System Documentation",
          description: "Complete implementation and user guide documentation",
          type: "Documentation",
          downloadUrl: "https://docs.google.com/document/d/[ADD_2022_DOCS_ID]/edit",
          imageUrl: "/screenshots/documentation-2022.svg"
        }
      ]
    },
    {
      id: 6,
      name: "Movers Transportation System",
      year: 2021,
      shortDescription: "Agricultural transportation logistics",
      fullDescription: "Movers is a company that provides transportation for various agricultural goods for farmers between farms and retail outlets. This system manages logistics, vehicle tracking, and customer orders.",
      category: "Logistics System",
      pdfUrl: "https://drive.google.com/file/d/[ADD_2021_FILE_ID]/preview",
      features: [
        "Order Management",
        "Vehicle Tracking",
        "Route Optimization",
        "Delivery Scheduling",
        "Payment Processing"
      ],
      samples: [
        {
          sampleId: 1,
          title: "System Database Schema",
          description: "Complete database design with all tables and relationships",
          type: "Database"
        },
        {
          sampleId: 2,
          title: "User Interface Design",
          description: "Screenshots of the main dashboard and key pages",
          type: "UI Design"
        },
        {
          sampleId: 3,
          title: "System Documentation",
          description: "Complete implementation and user guide documentation",
          type: "Documentation"
        },
        {
          sampleId: 4,
          title: "Code Snippets",
          description: "Sample code from core system modules",
          type: "Code"
        }
      ]
    }
  ];

  return (
    <div>
      <Navbar />
      <section className="past-projects">
        <h1>Past KCSE Computer Projects</h1>
        <p className="subtitle">Explore previous years' KCSE computer project solutions</p>
        
        {selectedProject && (
          <div className="project-details-container">
            <div className="project-details">
              <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
              <h2>{selectedProject.name}</h2>
              <p className="details-year">Year: {selectedProject.year}</p>
              <div className="details-content">
                <div className="details-section">
                  <h3>About</h3>
                  <p>{selectedProject.fullDescription}</p>
                </div>
                <div className="details-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.pdfUrl && (
                  <div className="details-section">
                    <h3>Question Paper</h3>
                    <div className="pdf-viewer">
                      <iframe
                        src={selectedProject.pdfUrl}
                        title="Project PDF"
                        className="pdf-iframe"
                      ></iframe>
                    </div>
                  </div>
                )}

                {selectedProject.samples && selectedProject.samples.length > 0 && (
                  <div className="details-section">
                    <h3>Free Sample Materials</h3>
                    <div className="samples-grid">
                      {selectedProject.samples.map((sample) => (
                        <div key={sample.sampleId} className="sample-card">
                          <div className="sample-icon">📄</div>
                          <h4>{sample.title}</h4>
                          <p>{sample.description}</p>
                          {sample.imageUrl && (
                            <img 
                              src={sample.imageUrl} 
                              alt={sample.title}
                              className="sample-image"
                            />
                          )}
                          <span className="sample-type">{sample.type}</span>
                          <a 
                            href={sample.downloadUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="sample-btn"
                          >
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="details-actions">
                  <a href="/shop" className="btn-action btn-primary">Get Full Project</a>
                  <a href="/contact" className="btn-action btn-secondary">Request Sample</a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <span className="project-year">{project.year}</span>
                <span className="category">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="description">{project.shortDescription}</p>
              <button className="read-more-btn">View Details →</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
