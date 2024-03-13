import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import { Flex } from '@/components/Flex';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion';
import { Icon } from '@/components/Icon';
import { TbChevronCompactDown } from 'react-icons/tb';

const features = [
  {
    title: 'accessibility',
    details:
      'Ensure your website is usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.',
  },
  {
    title: '24-hours uptime',
    details:
      'Create websites that are always available all day (24 hours). Sell, market, promote and do business online without experiencing downtime, bugs, crashes.',
  },
  {
    title: 'security',
    details:
      'Protect your website from hackers, malware, scams or phishing, and errors. Safeguard your website’s data, infrastructure, and user information against malicious activities continuously.',
  },
  {
    title: 'web mails',
    details:
      'Get a free web-based email accounts e.g business@example.com. Send promotional emails to your customers with a more secure and professional email accounts.',
  },
  {
    title: 'seo optimization',
    details:
      'Get optimized websites technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant and popular towards user search queries, enabling search engines rank them better.',
  },
];

const Feature = () => {
  return (
    <Container
      id='features'
      as={'section'}
      span={'lg'}
      className='mt-80'
    >
      <Tag
        spaceY={10}
        className='text-center'
      >
        <Text
          as={'h2'}
          size={56}
        >
          The features you need.
          <br />
          When you need it.
        </Text>
        <Text
          size={20}
          weight={500}
          color={'ash-300'}
          className='lg:w-3/5 mx-auto'
        >
          Build websites that packs a lot of powerful features for protecting
          your website from attacks, high seo ranking, 24/7 connectivity, and
          professional emails.
        </Text>
      </Tag>

      <Flex
        gapX={32}
        gapY={8}
        direction={'column'}
        className='sm:flex-row mt-20'
      >
        <Tag>
          <Text
            size={20}
            weight={500}
            color={'ash-300'}
          >
            Experience new digital experience with{' '}
            <Text
              as={'span'}
              size={20}
              weight={500}
            >
              responsive design
            </Text>{' '}
            that offers your users seamless experience while{' '}
            <Text
              as={'span'}
              size={20}
              weight={500}
            >
              protecting your website
            </Text>{' '}
            and users for spams and brute attacks.
          </Text>
        </Tag>

        <Tag>
          <Accordion opened='accessibility'>
            {features.map((feature, index) => (
              <AccordionItem key={index}>
                <AccordionTrigger
                  item={feature.title}
                  className='py-5 border-b flex justify-between items-center'
                >
                  <Text
                    size={20}
                    transform={'capitalize'}
                  >
                    {feature.title}
                  </Text>

                  <Icon
                    element={TbChevronCompactDown}
                    size={20}
                    color='#ff4000'
                  />
                </AccordionTrigger>
                <AccordionContent
                  item={feature.title}
                  className='py-5'
                >
                  <Text weight={500}>{feature.details}</Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Tag>
      </Flex>
    </Container>
  );
};

export default Feature;
