/**
 * Defines a few placeholder states with fake data for each of the reducer slices (resources, lessons, etc.).
 * This is for testing purposes only!! Ideally, we'd want to populate the Redux store with real data
 * from Firebase when the app first loads.
 */

import { LessonsSlice } from './lessonsSlice';
import { ResourcesSlice } from './resourcesSlice';
import { SectionsSlice } from './sectionsSlice';
import { UserSlice } from './userSlice';
import { TopicsSlice } from './topicsSlice';
import { TroubleshootingSlice } from './troubleshootingSlice';

export const INITIAL_TROUBLESHOOTING: TroubleshootingSlice = {};

export const INITIAL_RESOURCES: ResourcesSlice = {};

export const INITIAL_SECTIONS: SectionsSlice = {};

export const INITIAL_LESSONS: LessonsSlice = {};

export const INITIAL_USER: UserSlice = {};

export const INITIAL_TOPICS: TopicsSlice = {};
