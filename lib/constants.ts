/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const REPO = 'https://espiral9.tech/portfolio';
export const SITE_URL = 'https://espiral9.tech/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'espiral9';
export const BRAND_NAME = 'Espiral 9';
export const SITE_NAME_MULTILINE = ['Espiral', '9'];
export const SITE_NAME = 'Espiral 9';
export const META_DESCRIPTION =
  '.';
export const SITE_DESCRIPTION =
  '.';
export const DATE = 'Inspiração para realizar';
export const SHORT_DATE = 'Jan 1 - 9:00am PST';
export const FULL_DATE = 'Jan 1st 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Portfolio',
    route: '/'
  },
  {
    name: 'Design',
    route: '/'
  },
  {
    name: 'Cases',
    route: '/'
  },
  {
    name: 'Blog',
    route: '/'
  },
  {
    name: 'Contatos',
    route: '/'
  },
  {
    name: 'Sobre',
    route: '/'
  }
];

export type TicketGenerationState = 'default' | 'loading';
