import { List, ListItem } from '@mui/material'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { JobCard } from './components/JobCard'

type IPost = {
  jobTitle: string
  companyName: string
  jobdesc: string
}

function App() {
  const [count, setCount] = useState(0)
  const [jobs, setJobs] = useState<IPost[]>([])
  const [data, setData] = useState([])

  useEffect(() => {
    axios.post('https://www.zippia.com/api/jobs/', {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    }).then((res) => {
      const cleanJobs = res.data.jobs.map((item: any) => {
        return {
          jobTitle: item.jobTitle,
          companyName: item.companyName,
          jobdesc: item.jobDescription
        }
      })

      setJobs(cleanJobs)
      setData(res.data.jobs)
    })
  }, [])
  return (
    <div className="App">
      <List sx={{ gap: '20px'}}>
        {jobs.map((item, index) => {
          return (
            <ListItem key={index}>
              <JobCard companyName={item.companyName} jobTitle={item.jobTitle} description={item.jobdesc} index={index} />    
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default App
