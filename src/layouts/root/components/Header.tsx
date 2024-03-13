'use client';
import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';
import { Icon } from '@/components/Icon';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { TbMenu } from 'react-icons/tb';

const Menu = () => {
  return (
    <Fragment>
      {['overview', 'services', 'features'].map((list) => (
        <Text
          key={list}
          as={'li'}
          size={32}
          weight={500}
          color='ash-300'
          transform={'capitalize'}
          className='hover:text-ash-400 sm:text-[1.3rem]'
        >
          <Link href={`#${list}`}>{list}</Link>
        </Text>
      ))}
    </Fragment>
  );
};

export const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
            className='hidden sm:flex'
          >
            <Menu />
          </Flex>

          <Icon
            element={TbMenu}
            size={20}
            onClick={() => setIsVisible(!isVisible)}
            className='sm:hidden cursor-pointer stroke-zinc-500 hover:stroke-zinc-900'
          />

          {isVisible ? (
            <Flex
              as={'ul'}
              gapY={8}
              items={'center'}
              justify={'center'}
              direction={'column'}
              onClick={() => setIsVisible(false)}
              className='absolute top-0 left-0 w-full h-screen bg-white backdrop-blur-sm z-10'
            >
              <Menu />
            </Flex>
          ) : null}
        </Flex>
      </Container>
    </Tag>
  );
};
