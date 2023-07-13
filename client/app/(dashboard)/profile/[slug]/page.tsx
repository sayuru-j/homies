interface ProfileProps {
  params: {
    slug: string;
  };
}

export default function Profile({ params }: ProfileProps) {
  return <div>Profile</div>;
}
