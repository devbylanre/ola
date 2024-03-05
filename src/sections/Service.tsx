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

        <Flex
          direction={'column'}
          gapY={32}
        >
          {/* website design */}
          <Tag spaceY={8}>
            <Icon
              element={IoIdCardOutline}
              size={40}
            />
            <Text size={20}>
              Website design{' '}
              <Text
                as={'span'}
                size={20}
              >
                websites that enhances user experience for all users with or
                without disability.
              </Text>
            </Text>
          </Tag>

          {/* single page applications */}
          <Tag spaceY={8}>
            <Icon
              element={IoAlbumsOutline}
              size={40}
            />
            <Text size={20}>
              Single Page Applications{' '}
              <Text
                as={'span'}
                size={20}
              >
                websites that enhances user experience for all users with or
                without disability.
              </Text>
            </Text>
          </Tag>

          {/* apis's */}
          <Tag spaceY={8}>
            <Icon
              element={IoCubeOutline}
              size={40}
            />
            <Text size={20}>
              API's{' '}
              <Text
                as={'span'}
                size={20}
              >
                websites that enhances user experience for all users with or
                without disability.
              </Text>
            </Text>
          </Tag>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Service;
