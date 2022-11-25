import { Input, List, ListItem, Box, Typography, Button } from '@mui/material'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { JobCard } from '../components/JobCard'
import { IPost, useFetch } from '../api/useFetch'

export function Home() {
  const { jobs, data, loading } = useFetch({ url: 'https://www.zippia.com/api/jobs/' })
  const [search, setSearch] = useState('')
  const [filteredJobs, setFilteredJobs] = useState<IPost[]>(jobs)

  useEffect(() => {
    const newFilteredJobs = jobs.filter((job) => job.companyName.toLowerCase().includes(search.toLowerCase()))
    setFilteredJobs(newFilteredJobs)
  }, [search, jobs])
  
  return (
    <Box sx={{ margin: '60px', display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h1' sx={{ fontSize: '24px' }}>
          Home 
      </Typography >

      <Box sx={{ display: 'flex', gap: '16px', mt: '24px' }}>
        <Input
          placeholder="Search by company name"
          inputProps={{ 'aria-label': 'search by company name' }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <Button
          variant="contained"
          sx={{ ml: '8px' }}
          onClick={() => {
            setFilteredJobs(jobs.filter((job) => {
              console.log(job)
              return job.daysAgo <= 7
            }))
          }}
        >Last 7 days</Button>
      </Box>

      <List>
        {filteredJobs.map((item, index) => {
          return index < 10 ? (
            <ListItem sx={{paddingLeft: '0px'}} key={index}>
              <JobCard companyName={item.companyName} jobTitle={item.jobTitle} description={item.jobdesc} index={index} />    
            </ListItem>
          ) : null
        })}
      </List>
    </Box>
  )
}