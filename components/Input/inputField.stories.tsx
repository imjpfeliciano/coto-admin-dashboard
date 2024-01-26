import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InputField from './InputField'

export default {
  title: 'Forms/InputField',
  component: InputField
} as ComponentMeta<typeof InputField>

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
)

export const WithIcon = Template.bind({})
WithIcon.args = {
  name: 'username',
  type: 'text',
  placeholder: 'Enter username',
  value: 'username',
  onChange: () => {},
  icon: 'person'
}
