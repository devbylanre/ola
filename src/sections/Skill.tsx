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
          as={'h2'}
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
          color={'ash-300'}
          className='w-full sm:w-3/5'
        >
          I'm passionate about adding fresh ideas into my projects, crafting
          designs that narrate brand stories and make a lasting impact. I focus
          on combining creativity with visual design. Let's collaborate and make
          something truly remarkable!
        </Text>
      </Tag>
    </Container>
  );
};

export default Skill;
