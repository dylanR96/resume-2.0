/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProjectsImport } from './routes/projects'
import { Route as IntroImport } from './routes/intro'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'

// Create/Update Routes

const ProjectsRoute = ProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any)

const IntroRoute = IntroImport.update({
  id: '/intro',
  path: '/intro',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/intro': {
      id: '/intro'
      path: '/intro'
      fullPath: '/intro'
      preLoaderRoute: typeof IntroImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/intro': typeof IntroRoute
  '/projects': typeof ProjectsRoute
}

export interface FileRoutesByTo {
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/intro': typeof IntroRoute
  '/projects': typeof ProjectsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/intro': typeof IntroRoute
  '/projects': typeof ProjectsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/about' | '/contact' | '/intro' | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to: '/about' | '/contact' | '/intro' | '/projects'
  id: '__root__' | '/about' | '/contact' | '/intro' | '/projects'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  IntroRoute: typeof IntroRoute
  ProjectsRoute: typeof ProjectsRoute
}

const rootRouteChildren: RootRouteChildren = {
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  IntroRoute: IntroRoute,
  ProjectsRoute: ProjectsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/about",
        "/contact",
        "/intro",
        "/projects"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/intro": {
      "filePath": "intro.tsx"
    },
    "/projects": {
      "filePath": "projects.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
