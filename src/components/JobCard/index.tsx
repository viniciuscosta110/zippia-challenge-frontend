import { Typography, Card, CardContent, Collapse, IconButton, Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import { cardStyle, descriptionStyle, showMoreStyle } from './styles';

interface CardProps {
  companyName: string;
  jobTitle: string;
  description: string;
  index: number;
}

export function JobCard({ companyName, jobTitle, description, index }: CardProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <Card sx={[ cardStyle, { height: !open ? '380px' : '100%' }]}>
      <CardContent>
        <Typography variant='h1' sx={{ fontSize: '24px' }}>
          {companyName} 
        </Typography >
        
        <Typography variant='h2' sx={{ fontSize: '16px', color: '#777' }}>
          {jobTitle} 
        </Typography>
        
        <Typography 
          variant='body1' 
          sx={[descriptionStyle, { height: !open ? '200px' : '95%' }]}
          id={`item-description-${index}`}
          /* dangerouslySetInnerHTML is a property we can use to set an html element to an element directly */
          dangerouslySetInnerHTML={{__html: description}}
        ></Typography>

        <Button onClick={() => setOpen(!open)}>
          Show more
          <ExpandMore sx={{ transform: !open ? 'rotate(0deg)' : 'rotate(180deg)', transition: '0.3s ease-in' }} fontSize='medium' />
        </Button>
      </CardContent>
    </Card>
  )
}