import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";

export type User = {
  name: string;
  surname: string;
  phone: string;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);

    const data = await fetch(`${url.origin}/api/users`);
    const users = await data.json();

    return ctx.render(users);
  },
};

export default function Users(props: PageProps) {
  console.log(props.data);
  return (
    <Layout>
      <h2>Lista de todos los usuarios</h2>
      <ul>
        {props.data.map((user: User) => (
          <li>{user.name} {user.surname} - {user.phone}</li>
        ))}
      </ul>
    </Layout>
  );
}
