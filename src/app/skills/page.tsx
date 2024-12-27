export default function Skills() {
  const skills = {
    Languages: 'Java, Python, C/C++, SQL, JavaScript, HTML/CSS, UNIX, C, Node',
    Tools: 'Tableau, Power BI, Looker, Azure, Google Cloud Platform (GCP), AWS (Elastic Beanstalk, S3, EC2), AWS Redshift, Snowflake, BigQuery, Databricks, Hadoop, Spark, Dataflow, Git, Docker, GitHub Actions, Azure DevOps, RabbitMQ',
    Frameworks: 'React, Angular, Node.js, Spring Boot, Express.js, Tailwind CSS, TensorFlow, PyTorch, Keras, Scikit-Learn, Pandas, NumPy, SciPy, Spark, OpenCV,Matplotlib',
    Databases: 'MySQL, PostgreSQL, MongoDB, Oracle, NoSQL (MongoDB, Cassandra)',
    Concepts: 'Data Structures and Algorithms, Object-Oriented Programming, System Design, DBMS,CI/CD Pipelines,CloudInfrastructure,Containerization and Orchestration,Data Visualization,Web Sockets,Responsive Web Design,CI/CD Pipelines,RESTful API Design,Microservices,Software Configuration Management,Unit Testing,design patterns,DevOps',
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-[#146b51]">
        Skills
      </h1>
      <div className="border-t border-zinc-500 mt-0"></div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="p-4 bg-zinc-800 rounded-lg shadow-lg  transform transition-transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold bg-clip-text text-[#0feeb7]">
              {category}
            </h3>
            <p className="opacity-90 mt-2 text-sm">{skillList}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
