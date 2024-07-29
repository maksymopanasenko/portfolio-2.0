'use client';

import { ImageComponent, Page } from '@/api/queries/getPage';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectContainerProps {
  page: Page;
  img: ImageComponent;
  bluredImg: string;
}

const ProjectContainer = ({ page, img, bluredImg }: ProjectContainerProps) => {
  return (
    <li key={page.id}>
      <Link href={page.slug} className="h-96 w-96 block relative" target="_blank">
        <div className="plates upper move_down"></div>
        {img && (
          <Image
            src={img.image.url}
            alt={img.alt}
            fill
            sizes="100vw"
            blurDataURL={bluredImg}
            placeholder="blur"
            className="object-cover z-[-1]"
          />
        )}
        <div className="plates lower move_up"> {page.title}</div>
      </Link>
    </li>
  );
};

export default ProjectContainer;
