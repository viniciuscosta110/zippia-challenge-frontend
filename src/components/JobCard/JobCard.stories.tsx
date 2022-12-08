import { Meta, StoryObj } from '@storybook/react';
import { JobCard, JobCardProps } from './index';

export default{
  title: 'Components/JobCard',
  component: JobCard,
  args: {
    companyName: 'Company Name',
    jobTitle: 'Frontend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo in orci ornare placerat. Mauris scelerisque, ipsum et luctusLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo in orci ornare placerat. Mauris scelerisque, ipsum et luctus fringilla, diam augue scelerisque sapien, eu luctus purus erat eget felis. Ut eu sapien lacinia, vestibulum justo ac, aliquet risus. Curabitur consequat hendrerit est, nec molestie sapien blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo in orci ornare placerat. Mauris scelerisque, ipsum et luctus fringilla, diam augue scelerisque sapien, eu luctus purus erat eget felis. Ut eu sapien lacinia, vestibulum justo ac, aliquet risus. Curabitur consequat hendrerit est, nec molestie sapien blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo in orci ornare placerat. Mauris scelerisque, ipsum et luctus fringilla, diam augue scelerisque sapien, eu luctus purus erat eget felis. Ut eu sapien lacinia, vestibulum justo ac, aliquet risus. Curabitur consequat hendrerit est, nec molestie sapien blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet justo in orci ornare placerat. Mauris scelerisque, ipsum et luctus fringilla, diam augue scelerisque sapien, eu luctus purus erat eget felis. Ut eu sapien lacinia, vestibulum justo ac, aliquet risus. Curabitur consequat hendrerit est, nec molestie sapien blandit molestie.',
    index: 0,
  },
  decorators:[
    (Story) => (
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    )
  ]
} as Meta<JobCardProps>;

export const Default: StoryObj<JobCardProps> = {}