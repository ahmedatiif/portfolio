const certificationsData = [
  {
    id: 'iti',
    organization: 'Information Technology Institute (ITI)',
    category: 'Formal Certificate',
    description: 'Specialized front-end track focusing on modern React development.',
    items: [
      {
        id: 'iti-react',
        title: 'Front-End Development using ReactJS',
        issuer: 'ITI',
        type: 'Certificate',
        verified: true,
      },
    ],
  },
  {
    id: 'ibm',
    organization: 'IBM — Software Engineering & Backend Development Training',
    category: 'Coursework & Training',
    description: 'Individual technical courses completed in software engineering, backend architectures, containers, and cloud development.',
    items: [
      {
        id: 'ibm-linux',
        title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-python-ds',
        title: 'Python for Data Science, AI & Development',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-flask',
        title: 'Developing AI Applications with Python and Flask',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-django',
        title: 'Django Application Development with SQL and Databases',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-containers',
        title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-microservices',
        title: 'Application Development using Microservices and Serverless',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-appsec',
        title: 'Application Security for Developers and DevOps Professionals',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-observability',
        title: 'Monitoring and Observability for Development and DevOps',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-capstone',
        title: 'Back-end Application Development Capstone Project',
        issuer: 'IBM',
        type: 'Course Completion',
      },
      {
        id: 'ibm-git',
        title: 'Git and GitHub Training [Exact Course Title Placeholder — pending confirmation]',
        issuer: 'IBM',
        type: 'Course Placeholder',
        isPlaceholder: true,
      },
    ],
  },
]

export default certificationsData
