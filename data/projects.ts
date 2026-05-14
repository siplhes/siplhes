export interface Project {
  slug: string
  i18nKey: string
  url: string
  logo: {
    type: 'image' | 'component'
    src?: string
    component?: string
    className?: string
  }
  images: string[]
  seoTitle: string
  hasCharacteristics?: boolean
}

export const projects: Project[] = [
  {
    ///AdoptaZulia
    slug: 'adoptazulia',
    i18nKey: 'az',
    url: 'https://adoptazulia.org.ve',
    logo: {
      type: 'image',
      src: '/images/az.webp',
      className: 'project-image'
    },
    images: ['/images/az1.webp','/images/az2.webp','/images/az3.webp','/images/az4.webp','/images/az5.webp'],
    seoTitle: 'az Clothes Project by Joseph Hurtado',
    hasCharacteristics: true
  },
  ///BookAChoose
  {
    slug: 'bookachoose',
    i18nKey: 'bac',
    url: 'https://bookachoose.vercel.app',
    logo: {
      type: 'image',
      src: '/images/BookAChoose.svg',
      className: 'w-1/2'
    },
    images: [
      '/images/bac/1.webp',
      '/images/bac/2.webp',
      '/images/bac/3.webp',
      '/images/bac/4.webp',
      '/images/bac/5.webp'
    ],
    seoTitle: 'Book-a-Choose Project by Joseph Hurtado',
    hasCharacteristics: true
  },
  ///NSFW Clothes
  {
    slug: 'nsfwclothes',
    i18nKey: 'nsfw',
    url: 'https://nsfwclothes.vercel.app/',
    logo: {
      type: 'component',
      component: 'NSFWLogo',
      className: 'nsfwlogo'
    },
    images: ['/images/nsfw1.webp'],
    seoTitle: 'NSFW Clothes Project by Joseph Hurtado'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
