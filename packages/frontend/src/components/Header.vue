<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  GlobeAltIcon,
  MenuIcon,
  MusicNoteIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  VolumeUpIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import ThemeToggle from './actions/ThemeToggle.vue'
import LogoIcon from './icons/IconLogo.vue'

const categories = [
  {
    name: 'Top Stories',
    description: 'Breaking news and trending stories curated for you.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'World News',
    description: "Find out what is happening around the globe.",
    href: '#',
    icon: GlobeAltIcon,
  },
  {
    name: 'Business',
    description: 'Economic news and up-to-date stock market reports.',
    href: '#',
    icon: ChartBarIcon,
  },
  { name: 'Entertainment',
    description: "Listen to your music, watch your videos.",
    href: '#',
    icon: MusicNoteIcon
  },
]
const callsToAction = [
  { name: 'Watch', href: '#', icon: PlayIcon },
  { name: 'Listen', href: '#', icon: VolumeUpIcon },
]
const resources = [
  {
    name: 'Events',
    description: 'See what meet-ups and other events are happening near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in the forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'How-to guides written by community members.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  { name: 'Security',
    description: 'Learn how to protect yourself online.',
    href: '#',
    icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'How to configure your portal dashboard', href: '#' },
  { id: 2, name: 'How to customize your news feed', href: '#' },
  { id: 3, name: 'Guide for creating a community event', href: '#' },
]
</script>

<template>
  <header class="mb-4">
    <Popover class="relative">
      <div class="mx-auto">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Logo</span>
              <LogoIcon class="h-8 w-auto sm:h-10" />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900 bg-white' : 'text-gray-500', 'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary px-2']">
                <span>Categories</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a v-for="item in categories" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                          <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> My Calendar </a>
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Todo List </a>

            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900 bg-white' : 'text-gray-500', 'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary px-2']">
                <span>Community</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                  <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                        <ul role="list" class="mt-4 space-y-4">
                          <li v-for="post in recentPosts" :key="post.id" class="text-base truncate">
                            <a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">
                              {{ post.name }}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-5 text-sm">
                        <a href="#" class="font-medium text-primary hover:text-primary"> View all posts <span aria-hidden="true">&rarr;</span></a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ThemeToggle />
            <div class="avatar ml-3">
              <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://api.lorem.space/image/face?hash=77703" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a v-for="item in categories" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> My Calendar </a>
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Todo List </a>
                <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                  {{ item.name }}
                </a>
              </div>
              <div class="flex items-center justify-end">
                <ThemeToggle />
                <div class="avatar ml-3">
                  <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=77703" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>
