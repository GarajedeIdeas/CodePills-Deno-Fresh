import { PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";

export default function UserDetail({ params }: PageProps) {
  return (
    <div>
      <h2>Detalle del usuario {params.user_id}</h2>
    </div>
  );
}
