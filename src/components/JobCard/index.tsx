import { Typography, Card, CardContent } from '@mui/material';
import { cardStyle, descriptionStyle } from './styles';

interface CardProps {
  companyName: string;
  jobTitle: string;
  description: string;
  index: number;
}

export function JobCard({ companyName, jobTitle, description, index }: CardProps) {
  const itemDescription = document.getElementById(`item-description-${index}`)
  
  return (
    <Card sx={ cardStyle }>
      <CardContent sx={{ overflow: 'hidden' }}>
        <Typography variant='h1' sx={{ fontSize: '24px' }}>
          {companyName} 
        </Typography >
        <Typography variant='h2' sx={{fontSize: '16px', color: '#777'}}>
          {jobTitle} 
        </Typography>
        <Typography 
          variant='body1' 
          sx={ descriptionStyle } 
          id={`item-description-${index}`}
          dangerouslySetInnerHTML={{__html: description}}
        ></Typography>
      </CardContent>
    </Card>
  )
}