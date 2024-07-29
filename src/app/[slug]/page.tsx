interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  console.log(params);

  return (
    <main className="min-h-screen pb-20">
      <h1>{params.slug}</h1>
    </main>
  );
};

export default ProjectPage;
