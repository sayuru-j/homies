interface StoryProps {
  params: {
    slug: string;
  };
}

export default function Story({ params }: StoryProps) {
  if (params.slug === "create") {
    return <div>Create a story</div>;
  }

  if (params.slug === "manage") {
    return <div>Manage stories</div>;
  }
}
