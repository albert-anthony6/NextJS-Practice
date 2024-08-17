export default function Post({ params }: { params: { id: string } }) {
  return <h1>{params.id}</h1>;
}
