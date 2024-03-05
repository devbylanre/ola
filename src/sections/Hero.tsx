import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

const Hero = () => {
  return (
    <Container
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
          align={'center'}
          color={'ash-300'}
          className='w-full sm:w-3/5 mx-auto'
        >
          I'm a freelancer developer that helps brands push pixels, boundaries
          and thrive within their respective industry. I resolve consumer
          challenges and explore new creative opportunities.
        </Text>

        <Button>Available for work</Button>

        <Tag className='h-[320px] sm:h-[500px] lg:h-[600px] bg-ash-100 rounded-lg'></Tag>
      </Tag>
    </Container>
  );
};

export default Hero;
