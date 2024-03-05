import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Flex } from '@/components/Flex';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import {
  IoIdCardOutline,
  IoAlbumsOutline,
  IoCubeOutline,
} from 'react-icons/io5';

const services = [
  {
    icon: IoIdCardOutline,
    title: 'Website design',
    detail:
      'that are user-friendly for individuals with disabilities, ensuring equal access to information and services.',
  },
  {
    icon: IoAlbumsOutline,
    title: 'Single Page Applications',
    detail:
      'that provide better speed, responsiveness, and user engagement, ultimately enhancing the user experience.',
  },
  {
    icon: IoCubeOutline,
    title: `API's`,
    detail:
      'that helps your organization secure access to data, services that drive innovation for internal partners and third-consumers.',
  },
];

const Service = () => {
  return (
    <Container
      id={'services'}
      span={'md'}
      className='mt-80'
    >
      <Flex
        gapX={1}
        gapY={20}
        direction={'column'}
        className='lg:flex-row'
      >
        <Text
          as={'h2'}
          size={64}
        >
          Fast. Amazing. Services <br />
        </Text>

        <Tag
          direction={'column'}
          spaceY={20}
        >
          {services.map((service) => (
            <Tag
              key={service.title}
              spaceY={4}
            >
              <Icon
                element={service.icon}
                size={36}
              />
              <Text
                size={20}
                color={'ash-300'}
              >
                <Text
                  as={'span'}
                  size={20}
                >
                  {service.title}
                </Text>{' '}
                {service.detail}
              </Text>
            </Tag>
          ))}
        </Tag>
      </Flex>
    </Container>
  );
};

export default Service;
