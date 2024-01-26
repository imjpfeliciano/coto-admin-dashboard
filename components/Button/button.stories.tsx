import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconButton } from './index'

export default {
  title: 'Components/Button',
  component: IconButton
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const SquaredWithIcon = Template.bind({})
SquaredWithIcon.args = {
  icon: 'add',
  label: 'Add user'
}
