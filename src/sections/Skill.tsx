import { Container } from '@/components/Container';
import { Flex } from '@/components/Flex';
import { Grid } from '@/components/Grid';
import { Tag } from '@/components/Tag';
import { Text } from '@/components/Text';

const bentos = [
  {
    image: 'component.png',
    title: 'components',
    details:
      'Create UI components for your applications ensuring simple, flexible and web experience.',
  },
  {
    image: 'variant.png',
    title: 'variants',
    details:
      'Variations for components allowing dynamic props and functionality.',
  },
  {
    image: 'code.png',
    title: 'APIs',
    details:
      'Endpoints for your applications to send and receive data securely.',
  },
];

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
          weight={500}
          color={'ash-300'}
          className='w-full sm:w-4/6'
        >
          I'm passionate about adding fresh ideas into my projects, crafting
          designs that narrate brand stories and make a lasting impact. I focus
          on combining creativity, accessibility, clean code with visual design.
          Let's collaborate and make something truly remarkable!
        </Text>
      </Tag>

      <Grid
        cols={1}
        gap={8}
        className='mt-20 md:grid-cols-2 lg:grid-cols-3'
      >
        {bentos.map((bento, index) => (
          <Flex
            key={index}
            gapY={8}
            justify={'between'}
            direction={'column'}
            className='bg-slate-100 rounded-2xl p-5 overflow-hidden'
          >
            <img
              src={`/assets/images/${bento.image}`}
              alt='code'
              className='w-full h-[304px] object-cover object-left-top'
            />
            <Tag spaceY={2}>
              <Text transform={'capitalize'}>{bento.title}</Text>
              <Text
                size={14}
                weight={400}
              >
                {bento.details}
              </Text>
            </Tag>
          </Flex>
        ))}
      </Grid>
    </Container>
  );
};

export default Skill;
