import axios from "axios";
import { useEffect, useState } from "react";

interface useFetchProps {
  url: string;
  jobTitle?: string;
  location?: string;
}

export type IPost = {
  jobTitle: string
  companyName: string
  jobdesc: string
  daysAgo: number
}

/* I'm using this custom hook to fetch the data from the API,
since It was a bit messy to do it in the main component */

export function useFetch({ url, jobTitle, location }: useFetchProps) {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  //Remove all non-numeric characters
  const dateStringToNumber = (date: string) => {
    const dateNumber = date.replace(/\D/g, "");
    return parseInt(dateNumber);
  }

  useEffect(() => {
    axios.post(url, {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [''],
      numJobs: 20,
      previousListingHashes: []
    }).then((response) => {
      // Get just the data that I need
      const cleanJobs = response.data.jobs.map((item: any) => {
        const daysAgo = dateStringToNumber(item.postedDate)
        return {
          jobTitle: item.jobTitle,
          companyName: item.companyName,
          jobdesc: item.jobDescription,
          daysAgo
        }
      })

      setJobs(cleanJobs)
      setData(response.data.jobs)
    }).finally(() => {
      setLoading(false);
    })
    
  }, [])

  return {data, jobs, loading};
}