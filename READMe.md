# 유동환 (Dongwhan Yu) Portfolio

## 3D Portfolio web application

---

### Features

- Portfolio application in combination of static web page + 3D rendering
  - Synchronization using zustand + next/router
  - Animation effects (react-spring + TWEEN.js)
  - Support interaction with 3D contents (click event) - click bart character!
- Multi language support (next-18next): Korean + English at current state
- Parse Zipped model files
- Automated Unit Test execution using Github Actions (triggered by Push & PRs)

---

### Tech

| Type                   | Details                                                      |
| ---------------------- | ------------------------------------------------------------ |
| Programming Language   | Typescript                                                   |
| Web Framework          | Next.js (page routing)                                       |
| Style                  | SCSS, styled-components                                      |
| React State Management | zustand, Tanstack Query                                      |
| 3D rendering           | Three.js, R3F, React Three Drei                              |
| Animation              | react-spring, TweenJS                                        |
| Test                   | Jest, React Testing Library (Integrated with Github Actions) |
| Deploy                 | Vercel                                                       |

---

### Code Structure

- The basic structure follows default ruleset of Next.js page routing system.
- The directories will be wrapped with brackets ([])
- All component directories share the same structure
  - index.tsx: View of the component
  - use\*.tsx: Hook file handling logic of the component (optional)
  - style.ts: styled elements using styled-components (optional)
  - subComponent: Directory containing subcomponent (optional)

```
[Root]
ㄴ [pages]
   ㄴ URL Path
      ㄴ index.page.tsx: Page component for the path
      ㄴ [subComponentA]: Subcomponent used only inside this page

ㄴ [public]
   ㄴ [audios]: Static audio files
   ㄴ [images]: Static image files
   ㄴ [locales]: JSON locale files (used for i18next)
   ㄴ [models]: 3D Model files
   ㄴ [projects]: Files related to a cetain project included in the portfolio
      ㄴ [projectNameA]
      ㄴ ...

ㄴ [src]
   ㄴ [@types]: Ambient type declarations for extending types defined outside the codebase
   ㄴ [assets]: Directory containing asset files (eg. icons)
   ㄴ [components]: Directory containing globally used components (also contains components used for default page for cleaner structure inside page directory)
      ㄴ [containers]: Components that fill the page when rendered (eg. page loader)
      ㄴ [HOC]: Higher Order Components
      ㄴ ... : The rest of the directories are the components not fulfilling any of the above standards

    ㄴ [constants]: Constant variables (!constant variables in enums will be stored in types directory)
    ㄴ [dummyData]: Data used in the application (replacement of DB)
    ㄴ [hooks]: Globally used React Hooks
    ㄴ [queries]: Queries for Tanstack Query (React Query)
       ㄴ [A]
          ㄴ api.ts: Actual communication logic
          ㄴ useAQuery.ts: Hook returning useQuery result using the api function above

    ㄴ [store]: Stores for storing global state of the application
       ㄴ [useAStore]
          ㄴ index.ts: Global store using zustand
          ㄴ state.ts: Type of the state the store is containing
          ㄴ types.ts: Types of the properties inside the state (optional)

    ㄴ [utils]: Utility functions (The basic rule is adding a file directly under this, but could be grouped into a sub-directory if the module gets too complex)
```
