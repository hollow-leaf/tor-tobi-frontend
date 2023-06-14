export interface TextLike {
  kind: string
  text: string
}

export interface Signature {
  comment: {
    summary: TextLike[]
    blockTags: {
      tag: string
      content: TextLike[]
    }[]
  }
  type: {
    type: string
    id: number
  }
  parameters: {
    type: {
      type: string
      id: number
    }
  }[]
}

export interface Function {
  name: string
  kindString: 'Function'
  signatures: Signature[]
}

export type Hook = Function

export function deprecationTag(hook: Function) {
  const tags = hook?.signatures?.[0]?.comment?.blockTags

  if (!tags) return undefined

  return tags.find((t) => t.tag === '@deprecated')
}
