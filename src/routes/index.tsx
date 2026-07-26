import { createFileRoute } from "@tanstack/react-router";

const HomeComponent = () => {
  return (
    <main>
      <h1>Hello world</h1>
      <p>Hello world</p>
    </main>
  );
};

const Route = createFileRoute("/")({
  component: HomeComponent,
});

export { Route };
