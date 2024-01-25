import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from './index'

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  onClose: () => {},
  children: <div>Modal content</div>
}
