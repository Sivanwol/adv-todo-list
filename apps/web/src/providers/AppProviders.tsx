import {CacheProvider, type EmotionCache} from '@emotion/react';
import type {Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import type {FC, PropsWithChildren} from 'react';

import {createEmotionCache} from '@/lib/emotion';
import {ReactQueryClientProvider} from './ReactQueryClientProvider';
import {NextUIProvider} from "@nextui-org/react";

type Props = PropsWithChildren<{
  /**
   * next-auth session
   */
  session?: Session | null;
  /**
   * Optional emotion/cache to use
   */
  emotionCache?: EmotionCache;
}>;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const AppProviders: FC<Props> = (props) => {
  const {children, session, emotionCache = clientSideEmotionCache} = props;
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <CacheProvider value={emotionCache}>
        <NextUIProvider>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </NextUIProvider>
      </CacheProvider>
    </SessionProvider>
  );
};