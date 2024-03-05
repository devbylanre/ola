import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';
import { Icon } from '@/components/Icon';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import Link from 'next/link';
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoResizeSharp,
} from 'react-icons/io5';

const socials = [
  {
    url: 'https://twitter.com/devbylanre',
    icon: IoLogoTwitter,
  },
  {
    url: 'https://linkedin.com/devbylanre',
    icon: IoLogoLinkedin,
  },
  {
    url: 'https://github.com/devbylanre',
    icon: IoLogoGithub,
  },
];

const accordions = [
  {
    item: 'duration',
    title: 'How long does a project take?',
    content:
      'The duration depends on the project scope and complexity of the project. I offer estimated time-frames during our initial discussion and strive to adhere to mutually agreed-upon deadlines while maintaining high quality. For instance, a straightforward informational website with only a few static pages and minimal customization might require approximately 2-4 weeks for development.',
  },
  {
    item: 'services',
    title: 'What services do you offer?',
    content:
      'I provide a comprehensive array of services featuring various aspects of visual design. These services include, but are not limited to, website design, crafting captivating single-page applications, developing robust APIs to facilitate seamless communication between different software components, creating visually appealing and impactful logos, as well as engaging in graphic design to elevate the aesthetic appeal and user experience of digital assets. ',
  },
  {
    item: 'pricing',
    title: 'What is your pricing structure?',
    content:
      'The pricing structure is flexible and adaptable, tailored to suit the unique characteristics and intricacies of each individual project. Determining the cost involves a comprehensive assessment of factors such as the breadth and depth of project requirements, the anticipated timeline for completion, and the level of intricacy and detail demanded by the task at hand.',
  },
];

const Footer = () => {
  return (
    <Container
      span={'lg'}
      as={'footer'}
    >
      <Flex
        direction={'column'}
        justify={'center'}
        gapY={12}
        className='h-screen'
      >
        <Text
          as={'h2'}
          size={64}
          align={'center'}
        >
          Push your Pixels.
          <br />
          Publish a website.
        </Text>
        <Button>
          <Link href={'mailto:devbylanre@gmail.com'}>Reach out to Ola</Link>
        </Button>
      </Flex>

      <Tag
        span={'sm'}
        spaceY={12}
      >
        <Text
          as={'h3'}
          size={56}
          align={'center'}
        >
          Looking for answers?
        </Text>
        {/* accordions */}
        <Accordion className='basis-full'>
          {accordions.map((accordion) => (
            <AccordionItem
              key={accordion.item}
              className='border-b py-8 space-y-8'
            >
              <AccordionTrigger item={accordion.item}>
                <Flex
                  items={'center'}
                  justify={'between'}
                >
                  <Text
                    as={'h4'}
                    size={28}
                  >
                    {accordion.title}
                  </Text>

                  <Icon
                    element={IoResizeSharp}
                    size={20}
                  />
                </Flex>
              </AccordionTrigger>
              <AccordionContent
                item={accordion.item}
                className='mb-8'
              >
                <Text
                  size={18}
                  color={'ash-300'}
                >
                  {accordion.content}
                </Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Tag>

      <Tag
        spaceY={8}
        className='my-12'
      >
        <Text
          size={12}
          weight={500}
        >
          Copyright © 2024 Ola. All rights reserved. You can find and clone this
          project by locating it on my github repository. And for more
          information check out my social profiles by visiting the links below.
          Have more questions.{' '}
          <Text
            as={'span'}
            size={12}
            weight={500}
            color={'orange-300'}
          >
            Send a DM on Twitter | X | LinkedIn | WhatsApp [+234 705 220 8182]
          </Text>
        </Text>

        <Flex
          as={'ul'}
          gapX={8}
        >
          {socials.map((social) => (
            <Tag
              key={social.url}
              as={'li'}
              className='w-fit'
            >
              <Link
                href={social.url}
                target='_blank'
              >
                <Icon
                  element={social.icon}
                  size={20}
                  color='#6e6e6c'
                />
              </Link>
            </Tag>
          ))}
        </Flex>
      </Tag>
    </Container>
  );
};

export default Footer;
