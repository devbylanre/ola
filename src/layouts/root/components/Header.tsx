import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <Tag
      as={'header'}
      className='border-b py-2 sticky top-0 bg-white/50 backdrop-blur-lg'
    >
      <Container span={'lg'}>
        <Flex
          as={'nav'}
          justify={'between'}
          items={'center'}
        >
          <Text
            size={24}
            color={'red-light'}
          >
            Ola.
          </Text>

          <Flex
            as={'ul'}
            gapX={12}
          >
            <Text
              as={'li'}
              size={13}
            >
              <Link href={'work'}>Overview</Link>
            </Text>
            <Text
              as={'li'}
              size={13}
            >
              <Link href={'work'}>Skills</Link>
            </Text>
            <Text
              as={'li'}
              size={13}
            >
              <Link href={'work'}>Projects</Link>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Tag>
  );
};
