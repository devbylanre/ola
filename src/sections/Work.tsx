import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { Grid } from '@/components/Grid';
import { Tag } from '@/components/Tag';

const works = [
  {
    brand: 'teckaa ltd.',
    industry: 'digital agency',
    image: 'teckaa.png',
  },
  {
    brand: 'excellium',
    industry: 'software agency',
    image: 'excellium.png',
  },
];

const Work = () => {
  return (
    <Container className='mt-80 w-full bg-zinc-100 py-40 space-y-20'>
      <Text
        size={64}
        align={'center'}
      >
        Featured work
      </Text>

      <Container span={'xl'}>
        <Grid
          cols={2}
          gap={10}
        >
          {works.map((work) => (
            <Tag>
              <img
                src={`/assets/images/${work.image}`}
                alt=''
                className='w-full h-[440px] object-cover rounded-[1.5rem]'
              />
              <Text
                size={20}
                transform={'capitalize'}
                className='mt-8'
              >
                {work.brand}
              </Text>
              <Text
                size={14}
                transform={'capitalize'}
                className='mt-1'
              >
                {work.industry}
              </Text>
            </Tag>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Work;
