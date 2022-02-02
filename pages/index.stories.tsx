import React from 'react'
import { Story, Meta } from '@storybook/react'

import Page from './'

export default {
  title: 'Index Page',
  component: Page,
} as Meta

const Template: Story<{ }> = (args) => <Page {...args} />

export const DefaultView = Template.bind({})
