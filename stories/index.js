import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Input, Textarea } from '../src';

storiesOf('Button', module)
  .add('theme', () => (
    <React.Fragment>
      <Button text="default"></Button>
      <br />
      <Button text="darken" theme="darken"></Button>
      <br />
      <Button text="hollow" theme="hollow"></Button>
    </React.Fragment>
  ))
  .add('with icon', () => (
    <React.Fragment>
      <Button text="leftIcon" theme="hollow" leftIcon={require('./static/correct.png')}></Button>
      <br />
      <Button text="rightIcon" theme="hollow" rightIcon={require('./static/correct.png')}></Button>
    </React.Fragment>
  ))
  .add('unavailable', () => (
    <React.Fragment>
      <Button text="default" isAvailable={false}></Button>
      <br />
      <Button text="darken" theme="darken" isAvailable={false}></Button>
      <br />
      <Button text="hollow" theme="hollow" isAvailable={false}></Button>
    </React.Fragment>
  ))
  .add('onClick', () => (
    <Button text="click" onClick={action('clicked')}></Button>
  ));

storiesOf('Input', module)
  .add('default', () => (
    <Input placeholder="请输入答案"></Input>
  ));

storiesOf('Textarea', module)
  .add('default', () => (
    <Textarea placeholder="请输入答案" rows={5}></Textarea>
  ));
