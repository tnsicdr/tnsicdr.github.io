import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from 'gatsby';
import { NavigationHeader } from './navigationHeader';

export default {
    title: `Component/${NavigationHeader.name}`,
    component: NavigationHeader,
} as ComponentMeta<typeof NavigationHeader>;

const navLinks = [
    <Link to="/">Index</Link>,
    <Link to="/posts">Posts</Link>,
    <Link to="/about">About</Link>,
];

const Template: ComponentStory<typeof NavigationHeader> = args => (
    <NavigationHeader {...args} />
);

export const Base = Template.bind({});
Base.args = {
    siteLogo: 'Navigation Header',
    navList: navLinks,
};
