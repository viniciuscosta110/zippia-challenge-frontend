import Markdown from 'markdown-to-jsx'
import { Typography, Card, CardContent, Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import { cardStyle } from './styles';

export interface JobCardProps {
  companyName: string;
  jobTitle: string;
  description: string;
  index: number;
}

// I did this because I was having trouble with the styling of the <MarkDown> component
const StyledMarkdown = (props: any) => {
  return <Markdown options={{ overrides: { p: { component: Typography, props: { paragraph: true } } } }} {...props} />;
}

export function JobCard({ companyName, jobTitle, description, index }: JobCardProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <Card sx={ cardStyle }>
      <CardContent sx={{ heigth: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Typography variant='h1' sx={{ fontSize: '24px', textOverflow: 'ellipsis' }}>
          {jobTitle} 
        </Typography >
        
        <Typography variant='h2' sx={{ fontSize: '16px', color: '#777' }}>
          {companyName} 
        </Typography>

        <StyledMarkdown style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', fontSize: '16px',  marginTop: '24px', fontFamily: ' "Roboto","Helvetica","Arial",sans-serif ', height: !open ? '200px' : '100%', transition: 'height 1s ease' }}>{ description }</StyledMarkdown>

        <Button onClick={() => setOpen(!open)}>
          {!open ? "Show more" : "Show less"}
          <ExpandMore sx={{ transform: !open ? 'rotate(0deg)' : 'rotate(180deg)', transition: '0.3s ease-in' }} fontSize='medium' />
        </Button>
      </CardContent>
    </Card>
  )
}