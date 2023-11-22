This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Pre-rendering
- In development mode (when you run npm run dev or yarn dev), pages are pre-rendered on every request. This also applies to Static Generation to make it easier to develop. When going to production, Static Generation will happen once, at build time, and not on every request.

- We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

- On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

- In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

## Static Generation with Data using `getStaticProps`
How does it work? Well, in Next.js, when you export a page component, you can also export an async function called getStaticProps. If you do this, then:

    - getStaticProps runs at build time in production, and…
    - Inside the function, you can fetch external data and send it as props to the page.

```
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

`Essentially, getStaticProps allows you to tell Next.js: "Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!"`



`You might have noticed that each markdown file has a metadata section at the top containing title and date. This is called YAML Front Matter, which can be parsed using a library called gray-matter.`

-  ***Pages that begin with [ and end with ] are dynamic routes in Next.js.***