import { Card } from './ui/card'

// https://www.cssportal.com/css-glassmorphism-generator/

function RawGlass({
  blur,
  opacity,
  card_color: color,
  radius,
  border,
  shadow,
  ...props
}: {
  blur: number;
  opacity: number;
  card_color: { r: number, g: number, b: number };
  radius: number;
  border: {
    color: { r: number, g: number, b: number };
    width: number;
    opacity: number;
  } | null;
  shadow: {
    color: { r: number, g: number, b: number };
    blur: number;
    spread: number;
    opacity: number;
  }
} & React.ComponentProps<typeof Card>) {
  return <Card style={{
    background: `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderRadius: `${radius}px`,
    border: border == null ? 'none' : `${border.width}px solid rgba(${border.color.r}, ${border.color.g}, ${border.color.b}, ${border.opacity})`,
    boxShadow: `0 0 ${shadow.blur} ${shadow.spread} rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.opacity})`
  }} {...props} />
}

function Glass({ variant, children, ...props }: {
  variant:
    'frost' | 'ice' | 'thin' |
    'silk' | 'obsidian' | 'neon' |
    'plastic' | 'ocean' | 'cloud' | 'minimal',
  children: React.ReactNode,
} & React.ComponentProps<typeof Card>) {
  if (variant == 'frost') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.2}
      blur={10}
      radius={16}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 1,
        opacity: 0.3
      }}
      shadow={{
        color: { r: 255, g: 255, b: 255 },
        blur: 30,
        spread: 0,
        opacity: 0.3
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'ice') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.1}
      blur={25}
      radius={12}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 2,
        opacity: 0.5
      }}
      shadow={{
        color: { r: 255, g: 255, b: 255 },
        blur: 50,
        spread: 5,
        opacity: 0.4
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'thin') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.05}
      blur={2}
      radius={20}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 1,
        opacity: 0.2
      }}
      shadow={{
        color: { r: 255, g: 255, b: 255 },
        blur: 15,
        spread: -5,
        opacity: 0.1
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'silk') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.4}
      blur={15}
      radius={40}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 1,
        opacity: 0.3
      }}
      shadow={{
        color: { r: 0, g: 0, b: 0 },
        blur: 40,
        spread: 10,
        opacity: 0.2
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'obsidian') {
    return <RawGlass
      card_color={{ r: 26, g: 26, b: 26 }}
      opacity={0.7}
      blur={10}
      radius={8}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 1,
        opacity: 0.2
      }}
      shadow={{
        color: { r: 0, g: 0, b: 0 },
        blur: 40,
        spread: 5,
        opacity: 0.5
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'neon') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.1}
      blur={5}
      radius={15}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 2,
        opacity: 0.8
      }}
      shadow={{
        color: { r: 99, g: 102, b: 241 },
        blur: 60,
        spread: 10,
        opacity: 0.6
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'plastic') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.5}
      blur={0}
      radius={4}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 3,
        opacity: 0.6
      }}
      shadow={{
        color: { r: 0, g: 0, b: 0 },
        blur: 0,
        spread: 0,
        opacity: 0.3
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'ocean') {
    return <RawGlass
      card_color={{ r: 0, g: 119, b: 255 }}
      opacity={0.3}
      blur={18}
      radius={25}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 1,
        opacity: 0.4
      }}
      shadow={{
        color: { r: 0, g: 51, b: 102 },
        blur: 40,
        spread: 10,
        opacity: 0.4
      }}
      {...props}
    >{children}</RawGlass>
  }
  if (variant == 'cloud') {
    return <RawGlass
      card_color={{ r: 255, g: 255, b: 255 }}
      opacity={0.8}
      blur={12}
      radius={80}
      border={{
        color: { r: 255, g: 255, b: 255 },
        width: 1,
        opacity: 0.3
      }}
      shadow={{
        color: { r: 0, g: 0, b: 0 },
        blur: 20,
        spread: 2,
        opacity: 0.1
      }}
      {...props}
    >{children}</RawGlass>
  }
  return <RawGlass
    card_color={{ r: 255, g: 255, b: 255 }}
    opacity={0.02}
    blur={4}
    radius={0}
    border={{
      color: { r: 255, g: 255, b: 255 },
      width: 1,
      opacity: 0.1
    }}
    shadow={{
      color: { r: 0, g: 0, b: 0 },
      blur: 0,
      spread: 0,
      opacity: 0
    }}
    {...props}
  >{children}</RawGlass>
}

export { RawGlass, Glass }
