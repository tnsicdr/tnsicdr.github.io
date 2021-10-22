import { Meta, Story } from '@storybook/react';
import { Link } from 'gatsby';
import { ILink } from '../../interfaces/link';
import { NavigationHeader } from './navigationHeader';

export default {
    title: `Component/${NavigationHeader.name}`,
    component: NavigationHeader,
} as Meta<typeof NavigationHeader>;

const navLinks = [
    {
        label: 'Index',
        to: '/'
    },
    {
        label: 'Posts',
        to: '/'
    },
    {
        label: 'About',
        to: '/'
    }
] as Array<ILink>;

const Template: Story<typeof NavigationHeader> = args => (
    <NavigationHeader {...args} />
);

export const Base = Template.bind({});
Base.args = {
    siteLogo: 'Navigation Header',
    linkList: navLinks,
};
