import spacing, {
  SpacingObject,
  SpacingSize
} from "~shared/styles/constants/spacing";

interface MarginProps {
  margin?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginTop?: string | number;
}

export type Margin = SpacingObject<MarginProps>;

const margin: any = (size: SpacingSize) => ({ margin: spacing(size) });
margin.top = (size: SpacingSize) => ({ marginTop: spacing(size) });
margin.right = (size: SpacingSize) => ({ marginRight: spacing(size) });
margin.bottom = (size: SpacingSize) => ({ marginBottom: spacing(size) });
margin.left = (size: SpacingSize) => ({ marginLeft: spacing(size) });
margin.x = (size: SpacingSize | "auto") => {
  if (size === "auto") {
    return { marginLeft: size, marginRight: size };
  }

  return { marginLeft: spacing(size), marginRight: spacing(size) };
};
margin.y = (size: SpacingSize) => ({
  marginTop: spacing(size),
  marginBottom: spacing(size)
});

export default margin as Margin;
