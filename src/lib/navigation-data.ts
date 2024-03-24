import { readFile } from 'fs/promises';
import * as path from 'path';

import { z } from 'zod';

const navigationSchema = z.object({
  pages: z.array(
    z.object({
      name: z.string(),
      link: z.string().optional(),
      subItems: z.array(z.object({ name: z.string(), link: z.string() })).optional(),
    }),
  ),
});

export type NavigationData = z.infer<typeof navigationSchema>;
export type NavPage = NavigationData['pages'][0];
export type NavSubItem = Required<NavPage>['subItems'][0];

export const fetchNavigationData = async () => {
  const navigationData = (await readFile(path.join(process.cwd(), 'data/navigation.json'))) as unknown;
  const navigationDataParseResult = navigationSchema.safeParse(JSON.parse(navigationData as string));
  if (!navigationDataParseResult.success) {
    throw new Error('Failed to parse navigation data', { cause: navigationDataParseResult.error.message });
  }

  return navigationDataParseResult.data;
};
