export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const CATEGORY_LABELS: Record<string, string> = {
  research: 'Research',
  design: 'Design',
  field: 'Field & Workshop',
};
