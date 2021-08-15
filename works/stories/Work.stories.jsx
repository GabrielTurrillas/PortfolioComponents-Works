import React from 'react';
import Works from '../Works';
import AdminSitePick from '../images/AdminSitePick.png'

export default {
  title: 'Screens/Works',
  component: Works,
};

const Template = (args) => <Works {...args} />;

export const Default = Template.bind({});
Default.args = {
  english: true,
  projectName: 'Poietic',
  description: 'Amet amet aute consectetur incididunt commodo mollit aliqua dolore consecteturesse. Sunt cillum anim dolore do ex nisi veniam. Incididunt commodo culpa inincididunt cillum irure voluptate esse.In ea anim commodo eiusmod non. Nostrud ipsum sunt',
  engDescription: 'irure voluptate esse.In ea anim commodo eiusmod non. Nostrud ipsum suntAmet amet aute consectetur incididunt commodo mollit aliqua dolore consecteturesse. Sunt cillum anim dolore do ex nisi veniam. Incididunt commodo culpa inincididunt cillum',
  imgURL: AdminSitePick,
  pageURL: 'https://poieticdemo.net',
  githubURL: 'https://github.com/GabrielTurrillas?tab=repositories',
  imgStart: false,
};
