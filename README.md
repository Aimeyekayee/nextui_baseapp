# Next.js & NextUI(Tailwind base) Template Base Application

This is a template for creating applications using Next.js 14 (app directory) and NextUI (v2).

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Zod TypeScript-first schema validation with static type inference ](https://zod.dev/)
- [React-hot-toast](https://react-hot-toast.com/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)


## Custom Hook

### useAuthRedirect

The useAuthRedirect hook manages user authentication and redirects unauthorized users to a specified login page, use the following command on you page that want authenticate:

```bash
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
const MyComponent = () => {
  useAuthRedirect();
  return <div>Protected Content</div>;
};
```
### useContenti18n

The useContenti18n hook provides internationalized content for the application, specifically for any sections, use the following command on you page that want to use:

```bash
import useContenti18n from "@/hooks/useContenti18n";
const MyComponent = () => {
  const { faqs } = useContenti18n();
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};
```
### useDebounce

The useDebounce hook delays the update of a value by a specified amount of time, useful for handling fast-changing input data, use the following command on you component to handle:

```bash
import { useDebounce } from "@/hooks/useDebounce";
const MyComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Perform search with debouncedSearchTerm
  }, [debouncedSearchTerm]);
  return <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />;
};
```




  
## Project setup

### Template Creation

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
