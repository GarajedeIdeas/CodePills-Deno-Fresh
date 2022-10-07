import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <h1>Título de la página</h1>
      {children}
    </div>
  );
}
