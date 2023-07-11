import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({params}: Props) {
  if(params.slug === 'nothing'){
    notFound();
  }
  
  return <h1>{params.slug} 바지 제품 설명</h1>
};

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product
  }))
};