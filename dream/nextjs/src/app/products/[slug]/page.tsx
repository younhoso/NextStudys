type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({params}: Props) {
  return <h1>{params.slug} 바지 제품 설명</h1>
}