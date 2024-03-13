import { Container } from '@/components/Container';
import { Tag } from '@/components/Tag';
import { Flex } from '@/components/Flex';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import { Grid } from '@/components/Grid';
import {
  TbDevices,
  TbStackPop,
  TbMobiledata,
  TbPalette,
  TbApiApp,
  TbCircles,
  TbArrowsRandom,
} from 'react-icons/tb';

const services = [
  {
    icon: TbDevices,
    title: 'Website design',
    detail:
      'that are user-friendly for individuals with disabilities, ensuring equal access to information and services.',
  },
  {
    icon: TbStackPop,
    title: 'Single Page Applications',
    detail:
      'that provide better speed, responsiveness, and user engagement, ultimately enhancing the user experience.',
  },
  {
    icon: TbMobiledata,
    title: `API's`,
    detail:
      'that helps your organization secure access to data, services that drive innovation for internal partners and third-consumers.',
  },
  {
    icon: TbPalette,
    title: `Graphics design`,
    detail:
      'that convey information easily with amazing designs and layouts to promote, market and sell your products.',
  },
  {
    icon: TbCircles,
    title: `Branding`,
    detail:
      'create distinct brand identity for your business within the minds of your target audience and the general population.',
  },
  {
    icon: TbArrowsRandom,
    title: `Motion design`,
    detail:
      'combines graphic design with animation, filmmaking, and video production bringing the interfaces of your websites to life or creating an amazing promotional graphics.',
  },
];

const Service = () => {
  return (
    <Container
      id={'services'}
      span={'xl'}
      className='mt-80'
    >
      <Text
        as={'h2'}
        size={64}
      >
        Build it. Design it.
        <br /> Ship it with Ola.
        <br />
      </Text>

      <Grid
        cols={1}
        gap={12}
        className='mt-20 sm:grid-cols-2 xl:grid-cols-3'
      >
        {services.map((service) => (
          <Flex
            key={service.title}
            gapY={8}
            direction={'column'}
          >
            <Icon
              element={service.icon}
              size={30}
              color='#ff4000'
            />
            <Tag spaceY={2}>
              <Text
                as={'h3'}
                size={20}
              >
                {service.title}
              </Text>
              <Text
                color={'ash-300'}
                weight={500}
              >
                {service.detail}
              </Text>
            </Tag>
          </Flex>
        ))}
      </Grid>
    </Container>
  );
};

export default Service;
