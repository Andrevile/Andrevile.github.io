import { Post } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface LandingPageSectionProps {
  sectionTitle: string;
  items: Post[];
  renderItem: (post: Post) => ReactNode;
}

export const LandingPageSection = ({ sectionTitle, items, renderItem }: LandingPageSectionProps) => {
  return (
    <section className="mb-4">
      <h2 className="mb-3 text-2xl font-extrabold sm:text-4xl">{sectionTitle}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{items.map((post) => renderItem(post))}</div>
    </section>
  );
};
