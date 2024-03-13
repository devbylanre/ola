import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { Grid } from '@/components/Grid';
import Link from 'next/link';
import Image from 'next/image';

const works = [
  {
    brand: 'teckaa ltd.',
    industry: 'digital agency',
    image: 'teckaa.png',
    url: 'https://teckaa.com/',
  },
  {
    brand: 'excellium',
    industry: 'software agency',
    image: 'excellium.png',
    url: 'https://excellium.biz/',
  },
];

const Work = () => {
  return (
    <Container className='mt-80 w-full bg-zinc-100 py-40 space-y-20'>
      <Text
        as={'h2'}
        size={64}
        align={'center'}
      >
        Featured work
      </Text>

      <Container span={'xl'}>
        <Grid
          cols={1}
          gap={10}
          className='md:grid-cols-2'
        >
          {works.map((work) => (
            <Link
              key={work.brand}
              href={work.url}
              target='_blank'
              className='group'
            >
              <Image
                width={900}
                height={900}
                src={`/assets/images/${work.image}`}
                alt={work.image + 'showcase'}
                loading='lazy'
                className='w-full h-[280px] lg:h-[440px] object-cover rounded-[1.5rem] group-hover:scale-95 transition-all duration-300 ease-in-out'
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
            </Link>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Work;
