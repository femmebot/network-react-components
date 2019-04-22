import spacing, {
  SpacingObject,
  SpacingSize,
} from '~shared/styles/constants/spacing'

interface PaddingProps {
  padding?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
  paddingTop?: string | number
}

export type Padding = SpacingObject<PaddingProps>

const padding: any = (size: SpacingSize) => ({ padding: spacing(size) })
padding.top = (size: SpacingSize) => ({ paddingTop: spacing(size) })
padding.right = (size: SpacingSize) => ({ paddingRight: spacing(size) })
padding.bottom = (size: SpacingSize) => ({ paddingBottom: spacing(size) })
padding.left = (size: SpacingSize) => ({ paddingLeft: spacing(size) })
padding.x = (size: SpacingSize) => ({
  paddingLeft: spacing(size),
  paddingRight: spacing(size),
})
padding.y = (size: SpacingSize) => ({
  paddingTop: spacing(size),
  paddingBottom: spacing(size),
})

export default padding as Padding
