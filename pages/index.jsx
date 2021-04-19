import {
  Box, Text,
} from '@chakra-ui/react';
import fetch from '../node_modules/node-fetch';
import { getAllProjects } from '../service/api';
import Layout from '../component/layout';
import Me from '../component/me';
import Section from '../component/section';
import Skills from '../component/skill';
import Experiences from '../component/experiences';
import Portfolio from '../component/portfolio';

const header = {
  title: 'Home | Portfolio Davis',
  description: 'Portfolio of Davis',
};

export default function Home({
  dataInfo, dataSkills, dataExperiences, allProjects,
}) {
  return (
    <>
      <Layout title={header.title} description={header.description}>
        <Me data={dataInfo} />
        <Section background="gray.900">
          <Skills data={dataSkills} />
          <Experiences data={dataExperiences} />
        </Section>
        <Box bg="blue.700" p={4} w="100%" mt={4}>
          <Text as="h1" fontSize="4xl" textAlign="center" color="gray.50">Portfolio</Text>
          <Section mt="0">
            <Portfolio data={allProjects} />
          </Section>
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const info = await fetch('http://localhost:3000/api/me');
  const skills = await fetch('http://localhost:3000/api/skills');
  const experiences = await fetch('http://localhost:3000/api/experiences');
  const dataInfo = await info.json();
  const dataSkills = await skills.json();
  const dataExperiences = await experiences.json();
  const allProjects = getAllProjects([
    'title',
    'image',
    'slug',
    'description',
  ]);
  if (!dataInfo || !dataSkills || !dataExperiences || !allProjects) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataInfo,
      dataSkills,
      dataExperiences,
      allProjects,
    }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
