import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './index'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />
export const Primary = Template.bind({})
Primary.args = {
  src: 'https://avatars.githubusercontent.com/u/11733036?v=4',
  alt: 'Avatar'
}
