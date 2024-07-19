/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BlockQuote,
  Cite,
  Quote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  // Image,
  // Text,
  Notes,
  Code
} from 'spectacle';
import {
  Bounce,
  Fade,
  CallFn,
  DropIn,
  FromLeft,
  FromTop,
  Anticipation,
  FollowThrough,
  Letterwave,
  Squash,
  Stretch,
  FromTopSquashStretch,
  FromTopFollowThroughFun,
  FromTopFollowThroughSerious,
  FromTopSecondaryAction,
  BrandEnergetic,
  BrandCalm,
  Rumble,
  Stroke,
} from './components/anim/index';
import ImageRow from './components/image-row';
import BounceList from './components/bounce-list';
import theme, { contentWidth, whitesmoke } from './theme';
import Title from './components/title';
import SectionHeading from './components/section-heading';
import SlideHeading from './components/slide-heading';
import ListHeading from './components/list-heading';
import SubsectionHeading from './components/subsection-heading';
import LinkHeading from './components/link-heading';
import Pic from './components/pic';
import Vid from './components/vid';
import Footer from './components/footer';
import LoginModal from './components/login-modal';
import Confetti from './components/confetti';
import BouncingBall from './components/bouncing-ball';
import Comparison from './components/comparison';
import NotificationBadge from './components/notification-badge';
import LogoRowSlide from './slides/logo-row-slide';
import EarthPointerSlide from './slides/earth-pointer-slide';
import DorsalVentralBrain from './slides/dorsal-ventral-brain';
import ProgressBarDemo from './slides/progress-bar-demo';
import PapyrusSlide from './slides/papyrus-slide';
import ThankYouSlide from './slides/thank-you-slide';
import wiredUK from '../assets/wired-uk.mp4';
import vimeo from '../assets/vimeo-cameo.mp4';
import rd from '../assets/rd-contstruction.mp4';

require('normalize.css');

// Aliases
const SH = SectionHeading;
const SSH = SubsectionHeading;
const H = SlideHeading;
const Annot = ({ children }) => <H size={6}>{children}</H>;
Annot.propTypes = PropTypes.node.isRequired;
const Hsmall = Annot;

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.state = {
      showSocialPointer: false,
      enableConfetti: false,
      fireConfetti: false,
    };
   
  }
  



  render() {
    return (
      <div
        role="widget" // eslint-disable-line
        onMouseDown={this.shootConfetti}
        onMouseUp={this.stopConfetti}
      >
        <Deck
          transition={['slide']}
          transitionDuration={300}
          theme={theme}
          controls={false}
          contentWidth={contentWidth}
          contentHeight={1000}
          progress="bar"
          bgColor="secondary"
          style={{
            zIndex: 5
          }}
        >
          <Slide >
            <Title lineHeight={1}>boom!</Title>
            <Heading size={4} textColor="nearBlack">wtf is this?</Heading>
          </Slide>

          {
            process.env.NODE_ENV === 'production' && (
              <Slide bgColor="#62ffc2">
                <H size={4} style={{ marginBottom: '0.5em' }}>Hey there, looks like you found my talk on the internet!</H>
                <H size={4} style={{ marginBottom: '0.5em' }}>If you're interested in some limited speaker notes, press <Code>alt + P</Code> .</H>
                <H size={4} style={{ marginBottom: '0.5em' }}>FYI there are some issues with font &amp; video loading on safari that I did not have time to address.</H>
                <H size={4}>It is best viewed at 1920 x 1080 resolution, and I can't guarantee it will look good otherwise.</H>
                <Notes>

                </Notes>
              </Slide>
            )
          }

          <Slide>
            <H>hello, i'm yash.</H>
            <Fade><Hsmall>i try & build stuff on the internet.</Hsmall></Fade>
          </Slide>

    
          <Slide>
            <ListHeading>today i'm going to trash-talk about,</ListHeading>
            <List>
  <Fade><ListItem>very bold of you to assume that i would have a clue.</ListItem></Fade>
  <Fade><ListItem>&nbsp;i obviously dont.</ListItem></Fade>
  <Fade><ListItem>but who cares ssly?&nbsp;not me. </ListItem></Fade>
  <Fade><ListItem>arent we all gonna die from global warming one day?</ListItem></Fade>
</List>
          </Slide>

          <Slide>
            <ImageRow
              showFirst={false}
              srcs={['gw1.jpg', 'gw2.jpg', 'gw3.jpg']}
              styleOverrides={[{ borderRadius: '0%' }, { borderRadius: '0%' }, { borderRadius: '0%' }]}
            />
            <Notes>
              Before I get started, I want to take a moment to acknowledge some folks, without whom I certainly
              wouldn't be standing up here talking about animation today, but whithout whom I might not have become
              a web developer in the first place. Without them I might have continued down a dangerous and
              self destructive path and applied to law school.
            </Notes>
          </Slide>

          <Slide>
            <SH>anyways,</SH>
          </Slide>

          <Slide>
            <H>moving on.<br /></H>
            <Notes>
              Animation is often regarded with skepticism at best, and outright derision at worst.
            </Notes>
          </Slide>

          <Slide>
            <div><Bounce><Heading size={4}>because</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>we  </Heading></Bounce></div>
            <div><Bounce><Heading size={4}>don't</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>give</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>any</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>fucks.</Heading></Bounce></div>
            <Notes>
              I've heard folks call animation in UI design superfluous, give it a backhanded complement of "surprise and delight"
              the implication being that its not serious enough to be a part of "real" design
            </Notes>
          </Slide>

    

          <Slide>
            <Rumble><Pic src="strong-emoji.png" /></Rumble>
            <Notes>
              Animation is actually incredibly powerful, expressive and useful design tool.
              It deserves to be taken seriously, at least as seriously as traditional design precepts.
            </Notes>
          </Slide>

          <Slide>
            <SSH>now lets actually talk sense.</SSH>
            <Notes>
              In order to fully appreciate design's usefulness, lets think about design in a kind of weird way.
            </Notes>
          </Slide>


       

          <Slide>
            <H>we need to <Bounce>take</Bounce> <Bounce>global warming</Bounce> <Bounce>seriously.</Bounce></H>
            
            <Notes>
              We infer at least as much information from how things move or change over time.
              In fact some research suggests that we infer *more* information from animation than we do "traditional" design
            </Notes>
          </Slide>

          <Slide>
            <SSH>you ask why?</SSH>
            <Notes>
              animation engages the brain differently than other types of visual information. 
              The two steams hypothesis describes this.
            </Notes>
          </Slide>

          <Slide>
            <SSH>why tf not? is what i ask you.</SSH>
            <Notes>
              animation engages the brain differently than other types of visual information. 
              The two steams hypothesis describes this.
            </Notes>
          </Slide>

       


          <Slide>
            <Heading size={3}>what does global warming essentially mean?</Heading>
            <div><Bounce><Heading size={4}>the ice</Heading></Bounce></div>
            <div><Bounce><Heading size={4}>is melting.</Heading></Bounce></div>
        
            <Notes>
              The where system is also evolutionary MUCH older, and to borrow a computer science term, closer to the metal.
              You can use animation to more directly communicate with the users hindbrain, and more efficiently manage users cognition
              and emotional state, which at the end of the day, is the goal of design: helping people understand information better, 
              and forging a deeper connection betrween the user and the experience.
            </Notes>
          </Slide>

          {/* <Slide>
            <H>
              <H size={3}>Ventral stream - <Fade>Static</Fade></H>
              <H size={3}>Dorsal stream - <Fade>Motion</Fade></H>
            </H>
            <Notes>
              Margaret Livingstone, a professor of neurobiology at harvard university 
              notes that humans have two primary pathways of visual perception: the what system and the where system. 
              -------------------------------
              The where system is also evolutionary MUCH older, and to borrow a computer science term, closer to the metal.
              You can use animation to more directly communicate with the users hindbrain, and more efficiently manage users cognition
              and emotional state, which at the end of the day, is the goal of design: helping people understand information better, 
              and forging a deeper connection betrween the user and the experience.

              Static design, like color, hierarchy, typography, mostly engages the what system. Animation engages a 
              whole different visual pathway, a whole other way that people communicate and process information.
              Which means there's this whole other visual pathway we can use to communicate. The Where System is 
              associated with muscle memory, which makes it ideal for creating actions that reinforce spacial 
              systems and cue gesture interactions.
            </Notes>
          </Slide> */}

          {/* <Slide>
            <H size={3}>What System - <Fade>Static design</Fade></H>
            <H size={3}>Where System - <Fade>Animation</Fade></H>
            <Notes>
              
            </Notes>
          </Slide> */}

          {/* <Slide>
            <H size={3}>What System - <Fade>more conscious</Fade></H>
            <H size={3}>Where System - <Fade>less conscious</Fade></H>
            <Notes>
              The what system is more conscious, and the where system tends to be more subtle. We can use this subtleness
              to our advantage. That's not to say that animation itself is always subtle, but its influence can be.
            </Notes>
          </Slide>

          <Slide>
            <H size={3}>What System - <Fade>software</Fade></H>
            <H size={3}>Where System - <Fade>hardware</Fade></H>
            <Notes>
              To fall back on a tech analogy, the what system is more highly evolved, it's newer, it's more like software.
              The where system is more like hardware. Faster, more intimate, closer to the metal.
            </Notes>
          </Slide> */}

          <Slide>
            <H>and we're running out of time.</H>
            <Notes>
              Because of this more "hardware" level connection with the human subconscious, animation is an incredibly information dense 
              way to communicate. At the very least it deserves an equal place alongside the old stalwarts of static design,
              like color and typography. And I'd argue that it actually might offer an even more efficient way to 
              communicate information to people.
            </Notes>
          </Slide>

          <Slide>
            <SH>but wait, isn't time an illusion?</SH>
            <Notes>
              Animation's place in our visual perception pipeline gives it unique abilities to influence human cognition
            </Notes>
          </Slide>

          <Slide>
            <H>probably.</H>
            <Notes>
              Because of this more "hardware" level connection with the human subconscious, animation is an incredibly information dense 
              way to communicate. At the very least it deserves an equal place alongside the old stalwarts of static design,
              like color and typography. And I'd argue that it actually might offer an even more efficient way to 
              communicate information to people.
            </Notes>
          </Slide>

          <Slide>
            <ListHeading>so what now?</ListHeading>
            <List>
              <ListItem><Fade>dummy stop assuming things, i have no fuckin' clue.</Fade></ListItem>
              <ListItem><Fade>sorry if the dummy part offended you.</Fade></ListItem>
              <ListItem><Fade>not really tho, what you gonna do? cry?</Fade></ListItem>
              <ListItem><Fade>nothing like i care yk lol.</Fade></ListItem>
            </List>
          </Slide>

          <Slide>
            <SSH>ehh anyways,</SSH>
            <Notes>
              Because animation is a more intimate form of communication, it can have wildly unintended and sometimes even dangerous consequences.
              Before talking about all the cool stuff you can do with animation, we need to take a moment to talk about how to animate with
              accessibility in mind. As we'll see in a minute, animation has profound influence over how we think and feel. It is of the 
              *utmost* importance to not abuse that power or embrace "dark patterns".
            </Notes>
          </Slide>

          <Slide>
            <Pic src="gw4.jpg" />
            <Notes>
              It can be as innocuous as this, using animation's power to guide focus to continually reel attention towards an ad
            </Notes>
          </Slide>

          <Slide>
            <Pic src="gw5.gif" />
            <Notes>
              Or as serious as creating animations specifically to help addict someone to gambling, as is common in slot machines 
              and even many video games such as candy crush and various loot crates.
            </Notes>
          </Slide>


          <Slide>
            <H>time to move on.</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>fr this time dummy.</H>
            <Notes>
              Animation can be a fabulous tool to relay information, as we'll see, but make sure that you include other ways to consume that information for folks who can't see the animation.
              This serves the double purpose of also making your site generally that much more accessible.
            </Notes>
          </Slide>

          <Slide>
            <H>yes i may have offended you again by calling you that.</H>
            <Notes>
              Folks with vestibular disorders can experience intense vertigo, dizziness, neausea, headaches, and other adverse symptoms.
              Try to avoid, animation that covers large parts of the screen, animations that quickly cover large distances, and simultaneous motion in different directions.
              It is worse if these factors are combined. Avoid flashing animations as well, as those can be triggers for folks with epilepsy and migraines.
            </Notes>
          </Slide>

        
              
         

  


          <Slide>
            <BounceList
              items={[
                'what can you do about it this time?',
                'absolutely nothing.',
                'you',
                "fuckin'",
                'dummy!',
              ]}
            />
            <Notes>
              Studies from the university of rotterdam and university of new mexico among many others have shown that animation 
              helps people retain information, peform better in problem solving tasks, and learn more efficiently. This is because 
              animation reduces cognitive load, but how?
            </Notes>
          </Slide>

          <Slide>
            <H>so now, circling back to the point,</H>
            <Notes>
              When the UI changes, your brain has to spend cycles on determining what has changed on the screen and what that means. 
              When you animate a state transition, that work is offloaded to the visual side of the brain, letting the brain's 
              "main thread" continue uninterrupted, just like a computer with more than one processor thread.
            </Notes>
          </Slide>

          <Slide>
            <H>what are we gonna do?</H>
            <Notes>
              Because animation can be used to attract attention, it can indicate when something has changed in the UI.
            </Notes>
          </Slide>

          <Slide>
            <NotificationBadge />
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <H>just got notified some ideas.</H>
            <Notes>
              
            </Notes>
          </Slide>

          <Slide>
            <Pic src="gw6.gif" />
            <Notes>

            </Notes>
          </Slide>

          <Slide>
            <H>oops, wrong slide!</H>
         
          </Slide>

          <Slide>
            <H>on a second thought, where'd we go?</H>
         
          </Slide>

 

        

          <Slide bgColor="#000">
            <EarthPointerSlide />
            <Notes>
              We live in a spacial world. See? Lots of space. We unconsciously build mental maps of the world around us, and it lets us
              generally know where things are without tons of conscious effort.
            </Notes>
          </Slide>

          <Slide>
            <H>the last pointer just brought us back home, innit?</H>
         
          </Slide>
          <Slide>
            <H>but guess who couldn't?</H>
         
          </Slide>


          <Slide>
            <Pic src="gw7.gif" />
            <Notes>
              See menu come in from left help reinforce where button is in UI.
            </Notes>
          </Slide>

          <Slide>
            <H>bastards.</H>
            <Notes>
              Humans more naturally understand 3d spaces than 2d spaces. It's common to layer elements on top of other elements
              as your UI becomes more complex. Animating these items into place lets the user understand where they came from,
              creates a sense of depth, and smooths the context change of another item appearing.
            </Notes>
          </Slide>

      

          <Slide>
            <H>time to move on again to whats actually important,</H>
            <Notes>
              Users on mobile look at your app or site through a tiny little port hole, and while moving from view to view 
              it's very easy to become lost. 
            </Notes>
          </Slide>

        

          <Slide>
            <SSH>the melting ice.</SSH>
            <Notes>
              Animation is fundamentally just change over time.
            </Notes>
          </Slide>

       

          <Slide>
            <Pic src="gw8.gif" />
            <Notes>
              And for some people, time might not even really exist at all
            </Notes>
          </Slide>
          
          <Slide>
            <H>man it is getting hot, no cap.</H>
     
          </Slide>
          <Slide>
            <H>lets try something.</H>
     
          </Slide>

          <Slide>
            <ProgressBarDemo />
            <Notes>
              Grad students at carnegie mellon university showed that progress bars feel like they fill 12% faster if they have 
              bands that animate against the direction of the bar. This operates off the same principle as riding on a train 
              and seeing another train coming the opposite direction, it feels like you're going twice as fast. We naturally 
              try to fit what we see into existing spacial patterns.
            </Notes>
          </Slide>

          {/* <Slide>
            <H>Animation keeps us mentally engaged</H>
            <Annot>[[ripe for cutting]]</Annot>
            <Notes>
              Animation keeps us mentally engaged through a long waiting period, and when we're mentally engaged, 
              time seems to move more quickly.
            </Notes>
          </Slide>

          <Slide>
            <Vid src="slack-loading.mp4" controls autoPlay={false} />
            <Notes>
              Slack conducts a masterclass here, moving from loading anim to loading anim to keep you engaged, 
              and make the loading process seem like it's faster than it actually  is.
            </Notes>
          </Slide> */}
         
          <Slide>
            <H>nevermind, i'm sleepy.</H>
     
          </Slide>

          <Slide>
            <SH>thanks for wasting time.</SH>
            <Notes>
              So we've been over the myriad ways animation can manage human cognition, but the other side of that 
              coin is how animation can influence our emotional state, even more than static design principles 
              like color or typography, we infer a remarkable amount of information from motion.
            </Notes>
          </Slide>
          <Slide>
            <SH>fin.</SH>
            <Notes>
              So we've been over the myriad ways animation can manage human cognition, but the other side of that 
              coin is how animation can influence our emotional state, even more than static design principles 
              like color or typography, we infer a remarkable amount of information from motion.
            </Notes>
          </Slide>

         

          {/* <Slide>
            <FromTop><LoginModal /></FromTop>
            <Cite>Normal ease</Cite>
            <Notes>
              See how this modal on the right enters, and it feels just that much more cheeky and spirited? People deride 
              animation as only serving this purpose, but even serving the purpose of making people feel happy while using 
              your product is an amazing tool at your disposal. Don't cast it aside because some people on the internet think 
              they're too serious and important to use it.
            </Notes>
          </Slide> */}

          

          <Slide bgColor="transparent">
           
            <CallFn fn={this.enableConfetti} />
            <CallFn fn={this.shootConfetti} />
            <CallFn fn={this.stopConfetti} />
            <Fade><LinkHeading href="http://assets.eli.wtf/talks/animation-talk-webu-2018">http://assets.eli.wtf/talks/animation-talk-webu-2018</LinkHeading></Fade>
            <CallFn fn={this.showSocialPoiner} />
          </Slide>

        </Deck>
        <Confetti
          enableConfetti={this.state.enableConfetti}
          shootConfetti={this.state.fireConfetti}
        />
        <Footer
          showSocialPoiner={this.state.showSocialPointer}
        />
      </div>
    );
  }
}
