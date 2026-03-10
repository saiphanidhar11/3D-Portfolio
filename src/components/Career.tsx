import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SoftWare Engineer Intern</h4>
                <h5>Subex</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Migrated data processing workflows from Apache NiFi to Spring Batch, 
              boosting performance from 2,600 to 5,000 rows/sec across 30M+ records.
              Designed and developed responsive UIs for data management, improving 
              user productivity and usability.Built CI/CD pipelines in Jenkins with 
              integrated JUnit testing, reducing manual deployment effort by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Subex-Hypersense</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             Implemented a centralized logging and monitoring system using Elasticsearch and 
             Fluentd across 40+ microservices, improving traceability and reducing debugging 
             time by 50%. Conducted application security assessments using Trivy to identify 
             and remediate critical vulnerabilities, strengthening overall system security. 
             Built a reusable VS Code Dev Container base Docker image on Ubuntu to standardize 
             development environments and reduce setup time by 20%. Increased unit test coverage
             to 80% across multiple microservices using JUnit, Mockito, GitHub Copilot, and 
             SonarQube integration, while actively participating in Agile ceremonies including 
             sprint planning, daily stand-ups, and retrospectives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Subex-Hypersense</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Upgraded 40+ microservices from Java 8 to Java 21, refactoring dependencies 
              while maintaining full backward compatibility to improve performance and security 
              compliance. Designed and implemented a secure DMZ architecture to safely expose 
              external APIs and strengthen network security. Optimized backend mapping algorithms 
              across multiple modules, improving pipeline data quality by 50% and increasing 
              reliability of real-time workflows. Resolved 60+ critical production issues across 
              microservices and pipelines to enhance system stability and customer experience, 
              while collaborating with DevOps, QA, IT, and Delivery teams to streamline release 
              management and code delivery using GitHub version control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
