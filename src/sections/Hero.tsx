import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <Container
      id='overview'
      as={'section'}
      span={'lg'}
      className='mt-24 md:mt-40'
    >
      <Tag
        as={'section'}
        spaceY={16}
      >
        <Tag spaceY={2}>
          <Text
            as={'h1'}
            size={32}
            align={'center'}
          >
            Olanrewaju O.
          </Text>

          <Text
            as={'h2'}
            size={56}
            align={'center'}
          >
            Pushing Pixels.
            <br />
            Building Brands.
          </Text>
        </Tag>

        <Text
          size={20}
          weight={500}
          align={'center'}
          color={'ash-300'}
          className='w-full sm:w-3/5 mx-auto'
        >
          I'm a freelancer developer that helps brands push pixels, boundaries
          and thrive within their respective industry. I resolve digital
          challenges and explore new creative opportunities.
        </Text>

        <Button>
          <Link
            href={'https://twitter.com/devbylanre'}
            target='_blank'
          >
            Available for work
          </Link>
        </Button>

        <img
          src='/assets/images/ola.jpg'
          loading='lazy'
          className='w-full object-cover h-[320px] sm:h-[500px] lg:h-[600px] bg-ash-100 rounded-lg'
          style={{
            objectPosition: 'left 70%',
          }}
        />
      </Tag>
    </Container>
  );
};

export default Hero;
