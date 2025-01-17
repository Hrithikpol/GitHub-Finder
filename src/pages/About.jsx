import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. By
        <strong>
          <a href="https://www.linkedin.com/in/hrithik-pol-485641166/">
            {" "}
            Hrithik Pol
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
};

export default About;
