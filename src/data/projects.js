import fundMeImg from './fundme photo.jpg'
import roadAccidentImg from './road-accident-analysis.jpg'

const projects = [
  {
    id: 'fundme',
    title: 'FundMe',
    status: 'In Progress',
    summary:
      'A Solidity smart contract built with Foundry that uses a Chainlink price feed. Local development uses Anvil and mocks; testing so far has been manual. It still needs review and completion.',
    role: 'Sole developer — implemented the Solidity smart contract using Foundry, integrated Chainlink price feeds, and configured local Anvil mocks for manual testing.',
    stack: ['Solidity', 'Foundry', 'Chainlink price feed', 'Anvil'],
    image: fundMeImg,
    imageAlt: 'FundMe Solidity smart contract development overview',
    links: [],
  },
  {
    id: 'road-accident-analysis',
    title: 'Road Accident Analysis and Safety Insights in Egypt Using Data Analytics Dashboards',
    projectType: 'Team graduation project',
    status: 'Completed',
    summary:
      "Compared road-accident data in Egypt with ambulance station locations. Source data included material from the website of CAPMAS, Egypt's Central Agency for Public Mobilization and Statistics. My role included converting part of the data from PDF to Excel, helping clean it, taking part in the analysis, and designing visuals. The team built the dashboards in Power BI.",
    role: 'Data extraction, cleaning & visual design contributor — converted CAPMAS accident records from PDF to Excel, performed data cleaning, participated in spatial and statistical analysis alongside the team, and contributed to Power BI dashboard visualization design.',
    stack: ['Power BI', 'Excel', 'Data Cleaning', 'Data Analysis'],
    image: roadAccidentImg,
    imageAlt: 'Road accident data analysis and ambulance location dashboard',
    links: [],
  },
]

export default projects