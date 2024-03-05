import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import { Flex } from '@/components/Flex';
import { Separator } from '@/components/Separator';

const features = [
  'accessibility',
  '24-hours Uptime',
  'Security',
  'WebMails',
  'Seo Optimization',
];

const Feature = () => {
  return (
    <Container
      as={'section'}
      span={'md'}
      className='mt-80 space-y-40'
    >
      <Tag spaceY={16}>
        <Text
          as={'h2'}
          size={80}
        >
          All the best <br /> features.
        </Text>
        <Text
          size={28}
          color={'ash-300'}
          className='lg:w-4/5'
        >
          Build websites that packs a lot of powerful features for protecting
          your website from attacks, high seo ranking, 24/7 connectivity, and
          professional emails.
        </Text>
      </Tag>

      <Flex gapX={32}>
        <Tag>
          <Separator />
          <Tag
            as={'ul'}
            spaceY={2}
          >
            {features.map((feature) => (
              <Text
                key={feature}
                as={'li'}
                size={28}
                transform={'capitalize'}
              >
                {feature}
              </Text>
            ))}
          </Tag>
        </Tag>

        <Tag>
          <Separator />
          <Text
            size={20}
            color={'ash-300'}
          >
            Experience a new digital experience with{' '}
            <Text
              as={'span'}
              size={20}
            >
              responsive design
            </Text>{' '}
            that offers your users seamless experience while{' '}
            <Text
              as={'span'}
              size={20}
            >
              protecting your website
            </Text>{' '}
            and users for spams and brute attacks.
          </Text>
        </Tag>
      </Flex>
    </Container>
  );
};

export default Feature;
