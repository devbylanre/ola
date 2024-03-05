import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import { Flex } from '@/components/Flex';
import { Separator } from '@/components/Separator';

const Feature = () => {
  return (
    <Container
      as={'section'}
      span={'md'}
      className='mt-80 space-y-40'
    >
      <Tag spaceY={16}>
        <Text size={80}>
          All the best <br /> features.
        </Text>
        <Text
          size={28}
          className='lg:w-3/5'
        >
          Website built by me packs a lot of powerful features for protecting
          your website from attacks, high seo ranking, all-round connectivity,
          and professional emails.
        </Text>
      </Tag>

      <Flex gapX={32}>
        <Tag>
          <Separator />
          <Tag
            as={'ul'}
            spaceY={2}
          >
            <Text
              as={'li'}
              size={28}
            >
              Accessibility
            </Text>
            <Text
              as={'li'}
              size={28}
            >
              24-hours Uptime
            </Text>
            <Text
              as={'li'}
              size={28}
            >
              Security
            </Text>
            <Text
              as={'li'}
              size={28}
            >
              WebMails
            </Text>
            <Text
              as={'li'}
              size={28}
            >
              Seo Optimization
            </Text>
          </Tag>
        </Tag>

        <Tag>
          <Separator />
          <Text size={20}>
            Experience a digital experience with responsive design that offers
            your users with seamless user experience while protecting your
            website and users for spams and brute attacks.
          </Text>
        </Tag>
      </Flex>
    </Container>
  );
};

export default Feature;
