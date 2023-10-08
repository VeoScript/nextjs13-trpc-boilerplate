import { serverClient } from "~/app/_trpc/serverClient";

export default async function ServerComponent() {
  const getMessage = await serverClient.getMessage();

  return (
    <div className="flex flex-row justify-center w-full">
      <h1>{getMessage}</h1>
    </div>
  );
}
