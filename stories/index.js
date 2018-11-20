import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Input, Textarea, Scrollbar } from '../src';
import { height } from 'window-size';

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

storiesOf('Scrollbar', module)
  .add('default', () => (
    <Scrollbar
      width="500px"
      height="200px"
    >
      <div>
        <p>She had been shopping with her Mom in Wal-Mart. She must have been 6 years old, this beautiful brown haired, freckle-faced image of innocence. It was pouring outside. The kind of rain that gushes over the top of rain gutters, so much in a hurry to hit the Earth, it has no time to flow down the spout.</p>
        <p>她和妈妈刚在沃尔玛结束购物。这个天真的小女孩应该6岁大了，头发是美丽的棕色，脸上有雀斑。外面下着倾盆大雨。雨水溢满了檐槽，来不及排走，就迫不及待地涌涨上地面。</p>
        <p>We all stood there under the awning and just inside the door of the Wal-Mart. We all waited, some patiently, others irritated, because nature messed up their hurried day. I am always mesmerized by rainfall. I get lost in the sound and sight of the heavens washing away the dirt and dust of the world. Memories of running, splashing so carefree as a child come pouring in as a welcome reprieve from the worries of my day.</p>
        <p>我们都站在沃尔玛门口的遮篷下。大家都在等待，有人很耐心，有人很烦躁，因为老天在给他们本已忙碌的一天添乱。雨天总引起我的遐思。我出神地听着、看着老天冲刷洗涤这世界的污垢和尘埃，孩时无忧无虑地在雨中奔跑玩水的记忆汹涌而至，暂时缓解了我一天的焦虑。</p>
        <p>Her voice was so sweet as it broke the hypnotic trance we were all caught in, &ldquo;Mom, let's run through the rain.&quot; she said.</p>
        <p>小女孩甜美的声音打破了这令人昏昏欲睡的气氛，&ldquo;妈妈，我们在雨里跑吧。&rdquo;她说。</p>
        <p>What? Mom asked.</p>
        <p>&ldquo;什么？&rdquo;母亲问。</p>
        <p>Let's run through the rain! She repeated.</p>
        <p>&ldquo;我们在雨里跑吧，&rdquo;她重复。</p>
        <p>No, honey. We'll wait until it slows down a bit. Mom replied.</p>
        <p>&ldquo;不，亲爱的，我们等雨小一点再走。&rdquo;母亲回答说。</p>
        <p>This young child waited about another minute and repeated: &quot;Mom, let's run through the rain.&quot;</p>
        <p>过了一会小女孩又说：&ldquo;妈妈，我们跑出去吧。&rdquo;</p>
        <p>We'll get soaked if we do. Mom said.</p>
        <p>&ldquo;这样的话我们会湿透的。&rdquo;母亲说。</p>
        <p>No, we won't, Mom. That's not what you said this morning, the young girl said as she tugged at her Mom's arm.&quot;</p>
        <p>&ldquo;不会的，妈妈。你今天早上不是这样说的。&rdquo;小女孩一边说一边拉着母亲的手。</p>
        <p>This morning? When did I say we could run through the rain and not get wet?</p>
        <p>&ldquo;今天早上？我什么时候说过我们淋雨不会湿啊？&rdquo;</p>
        <p>Don't you remember? When you were talking to Daddy about his cancer, you said, If God can get us through this, he can get us through anything!</p>
        <p>&ldquo;你不记得了吗？你和爸爸谈他的癌症时，你不是说&lsquo;如果上帝让我们闯过这一关，那我们就没有什么过不去。&rsquo;&rdquo;</p>
        <p>世间万物皆有自己的季节，做任何事情也有一个恰当的时机。希望你有机会在雨中狂奔一回。</p>
      </div>
    </Scrollbar>
  ));
