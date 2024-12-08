import { setRequestLocale } from 'next-intl/server'
import { getDataForPageByFilename, PageProps } from '@/lib/pages'

import CTARow from '@/components/rows/CTARow'
import ProductsSlideRow from '@/components/rows/ProductsSlideRow'
import BlinksHeroRow from './BlinksHeroRow'
import Why1SOLnot1elSOLRow from './Why1SOLnot1elSOLRow'
import HavingLiquidityRow from './HavingLiquidityRow'
import StakingHeroRow from './StakingHeroRow'
import ElsolMetricsRow from '@/components/rows/ElsolMetricsRow'
import InstantLiquidityRow from '@/components/rows/InstantLiquidityRow'
import DirectStakingRow from './DirectStakingRow'
import VLDAirdropRow from '@/components/rows/VLDAirdropRow'

const { generateMetadata } = getDataForPageByFilename(__filename)
export { generateMetadata }

export default async function BlinksPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      {/* <BlinksHeroRow /> */}
      <HavingLiquidityRow />
      <ElsolMetricsRow />
      <DirectStakingRow />
      <StakingHeroRow />
      {/* <Why1SOLnot1elSOLRow /> */}
      <InstantLiquidityRow />
     
      <VLDAirdropRow />
      {/* <CTARow /> */}
      {/* <ProductsSlideRow /> */}
    </>
  )
}