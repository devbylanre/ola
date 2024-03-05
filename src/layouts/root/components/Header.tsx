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
      className='border-b py-4 sticky top-0 z-10 bg-white/50 backdrop-blur-lg'
    >
      <Container span={'lg'}>
        <Flex
          as={'nav'}
          justify={'between'}
          items={'center'}
        >
          <img
            src='/assets/images/logo/Asset 1.svg'
            className='w-fit h-8'
          />

          <Flex
            as={'ul'}
            gapX={12}
          >
            {['overview', 'services', 'features'].map((list) => (
              <Text
                key={list}
                as={'li'}
                size={13}
                weight={500}
                transform={'capitalize'}
              >
                <Link href={`#${list}`}>{list}</Link>
              </Text>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Tag>
  );
};
