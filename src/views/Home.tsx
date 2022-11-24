import { List, ListItem } from '@mui/material'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { JobCard } from '../components/JobCard'
import { useFetch } from '../api/useFetch'

export function Home() {
  const { jobs, data, loading } = useFetch({ url: 'https://www.zippia.com/api/jobs/' });
  
  return (
    <div>
      <h1>Home</h1>
      
      
      <List sx={{ gap: '20px'}}>
        {jobs.map((item, index) => {
          return index < 10 ? (
            <ListItem key={index}>
              <JobCard companyName={item.companyName} jobTitle={item.jobTitle} description={item.jobdesc} index={index} />    
            </ListItem>
          ) : null
        })}
      </List>
    </div>
  )
}