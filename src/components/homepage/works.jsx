import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";




const Works = () => {
  return (
    <div className="w-full flex justify-center">
      <Card
        icon={faBriefcase}
        title="Technical Skills"
        body={
          <div className="w-full max-w-2xl mx-auto my-4">
            <ul className="list-disc pl-6 text-base text-gray-800 dark:text-gray-100 space-y-2">
              <li><span className="font-semibold">Languages:</span> JavaScript, Java, C++</li>
              <li><span className="font-semibold">Frontend:</span> React.js, Redux, Tailwind CSS, Material-UI</li>
              <li><span className="font-semibold">Backend:</span> Node.js, Express.js, REST APIs</li>
              <li><span className="font-semibold">Databases:</span> MongoDB, MySQL</li>
              <li><span className="font-semibold">Version Control:</span> Git, GitHub</li>
              <li><span className="font-semibold">Cloud & DevOps:</span> AWS (EC2, RDS, S3, SNS, SQS), Docker (Basic), Git</li>
              <li><span className="font-semibold">Core Concepts:</span> OOPs, Data Structures and Algorithms, Software Engineering Concepts, System Design</li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Works;
