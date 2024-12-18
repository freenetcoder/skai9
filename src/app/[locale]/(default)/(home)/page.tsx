import { setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'
import { getArticleForIndex } from '@/lib/articles'
import ArticleIndex from '@/components/articles/ArticleIndex'
import HomeHeroRow from './HomeHeroRow'
import CTARow from '@/components/rows/CTARow'
import ProductsSlideRow from '@/components/rows/ProductsSlideRow'
import BlinksHeroRow from '../blinks/BlinksHeroRow'

const { generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const newsData = getArticleForIndex(
    'news',
    ['title', 'thumbnail', 'date'],
    locale
  )

  return (
    <>
      <HomeHeroRow />
      <BlinksHeroRow />
      {/* <CTARow /> */}
      {/* <ProductsSlideRow /> */}
      {/* <ArticleIndex articlesData={newsData} showItemsNum={3} /> */}
    </>
  )
}
