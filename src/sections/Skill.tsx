import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';

const Skill = () => {
  return (
    <Container
      as={'section'}
      span={'lg'}
      className='mt-80'
    >
      <Tag spaceY={12}>
        <Text
          size={80}
          weight={600}
        >
          4”
          <br />
          React. Next JS. Node JS.
          <br />
          TypeScript. WordPress.
        </Text>

        <Text
          size={20}
          className='w-full sm:w-3/5'
        >
          I love infusing innovation into my projects, creating designs that
          tell stories and leave a lasting impression. My work is all about
          blending creativity with timeless beauty. Let's create something
          amazing together!
        </Text>
      </Tag>
    </Container>
  );
};

export default Skill;
