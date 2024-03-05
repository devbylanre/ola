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
      'that enhances user experience for all users with or without disability.',
  },
  {
    icon: IoAlbumsOutline,
    title: 'Single Page Applications',
    detail:
      'that enhances user experience for all users with or without disability.',
  },
  {
    icon: IoCubeOutline,
    title: `API's`,
    detail:
      'that enhances user experience for all users with or without disability.',
  },
];

const Service = () => {
  return (
    <Container
      span={'md'}
      className='mt-80 space-y-40'
    >
      <Flex gapX={32}>
        <Text size={64}>
          Fast. Amazing. Services <br />
        </Text>

        <Tag
          direction={'column'}
          spaceY={20}
        >
          {services.map((service) => (
            <Tag spaceY={4}>
              <Icon
                element={service.icon}
                size={40}
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
