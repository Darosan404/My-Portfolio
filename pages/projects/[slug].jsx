import {
  Text, Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import markdownToHtml from '../../service/markdownToHtml';
import { getAllProjects, getProjectBySlug } from '../../service/api';
import Layout from '../../component/layout';
import Section from '../../component/section';
import Load from '../../component/spinner';
import Markdown from '../../component/markdown';

export default function projects({ project }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <Load />;
  }
  const header = {
    title: `Project | ${project.title}`,
    description: project.description,
  };
  return (
    <>
      <Layout title={header.title} description={header.description}>
        <Image src={project.coverImage} alt="Imagen del Portafolio" objectFit="cover" w={['100%', null, '50%']} h="auto" mx="auto" />
        <Text as="h1" mt={4} fontSize="4xl" textAlign="center">{project.title}</Text>
        <Section mt="0">
          <Markdown content={project.content} />
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'description',
    'content',
    'coverImage',
  ]);
  if (!project) {
    return {
      notFound: true,
    };
  }
  const content = await markdownToHtml(project.content || '');

  return {
    props: {
      project: { ...project, content },
    },
  };
}

export async function getStaticPaths() {
  const Allprojects = getAllProjects(['slug']);

  return {
    paths: Allprojects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: true,
  };
}
